/**
 * Navbar.tsx
 * Navbar component for various page links.
 */

'use client';

// Node Modules
import { Menu, X } from 'lucide-react';
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cva } from 'class-variance-authority';

// Components
import { Button } from 'components/ui/button';
import Logo from 'components/logos/ppak_net/Main';

// Constants
const LINKS = [
  { name: 'Products', href: '/products/coaster' },
  { name: 'About', href: '/about' },
];

// Style
const navStyles = cva(
  'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out border-b-2',
  {
    variants: {
      hidden: {
        true: '-translate-y-full opacity-0',
        false: 'translate-y-0 opacity-100',
      },
      clear: {
        true: 'bg-transparent border-white',
        false: 'bg-white shadow-sm border-black',
      },
    },
  }
);

const mobileMenuButtonStyles = cva('p-2 transition-colors', {
  variants: {
    clear: {
      false: 'text-gray-700 hover:text-black',
      true: 'text-white hover:text-gray-200',
    },
  },
});

const mobileMenuStyles = cva('md:hidden border-t border-gray-200', {
  variants: {
    clear: {
      false: 'bg-white',
      true: 'bg-transparent',
    },
  },
});

const mobileLinkStyles = cva(
  'block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-black rounded-md transition-colors',
  {
    variants: {
      clear: {
        false: 'text-black',
        true: 'text-white',
      },
    },
  }
);

const Navbar: FC = () => {
  // Hooks
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false); // Hides during scroll
  const [clear, setClear] = useState(pathname !== '/');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Force opaque navbar on certain pages
  // const forceOpaque = pathname === '/';
  // const theme = scrolled || forceOpaque ? 'opaque' : 'transparent';

  useEffect(() => {
    setClear(pathname !== '/'); // Sets correct navbar transparent on page load

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past threshold (only on non-homepage)
      if (pathname !== '/') {
        const scrolled = currentScrollY > 20;
        setClear(!scrolled);
      }

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      }

      // Close mobile menu when scrolling
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, mobileMenuOpen, pathname]);

  // JSX
  const desktopLinksJSX = LINKS.map(({ name, href }) => (
    <Button key={name} variant={clear ? 'clear' : 'default'}>
      <a href={href}>{name}</a>
    </Button>
  ));

  const mobileLinksJSX = LINKS.map(({ name, href }) => (
    <Link
      className={mobileLinkStyles({ clear })}
      href={href}
      key={name}
      onClick={() => setMobileMenuOpen(false)}
    >
      {name}
    </Link>
  ));

  return (
    <nav className={navStyles({ clear, hidden })}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <Link href="/">
            <Logo
              height={34}
              width={54}
              stroke={!clear ? 'currentColor' : 'white'}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3 space-x-1">
            {desktopLinksJSX}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              className={mobileMenuButtonStyles({ clear })}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className={mobileMenuStyles({ clear })}>
            <div className="space-y-1 px-2 pb-3 pt-2">{mobileLinksJSX}</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
