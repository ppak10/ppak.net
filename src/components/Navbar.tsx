/**
 * Navbar.tsx
 * Navbar component for various page links.
 */

'use client';

// Node Modules
import { Menu, X } from 'lucide-react';
import { FC, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cva } from 'class-variance-authority';
import { usePostHog } from 'posthog-js/react';

// Components
import { Button } from 'components/ui/button';
import Logo from 'components/logos/ppak_net/Main';

// Constants
const LINKS = [
  { name: 'Products', href: '/products/coaster' },
  { name: 'About', href: '/about' },
];

// Style
// clear=true  — transparent over background video; text/border/stroke driven by CSS so
//               the browser applies the correct dark: colour before JS runs (no flash).
// clear=false — opaque; bg-white dark:bg-black except on home where we want the page bg.
const navStyles = cva(
  'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out border-b-2',
  {
    variants: {
      hidden: {
        true: '-translate-y-full opacity-0',
        false: 'translate-y-0 opacity-100',
      },
      clear: {
        true: 'bg-transparent border-white dark:border-black text-white dark:text-black',
        false: 'bg-white dark:bg-black shadow-sm border-black',
      },
    },
  }
);

const mobileMenuButtonStyles = cva('p-2 transition-colors', {
  variants: {
    clear: {
      false: 'text-foreground/70 hover:text-foreground',
      true: '', // inherits text-white / dark:text-black from nav
    },
  },
});

const mobileMenuStyles = cva('md:hidden border-t border-border/20', {
  variants: {
    clear: {
      false: 'bg-white dark:bg-black',
      true: 'bg-transparent',
    },
  },
});

const mobileLinkStyles = cva(
  'block px-3 py-2 text-base font-medium hover:bg-foreground/5 rounded-md transition-colors',
  {
    variants: {
      clear: {
        false: 'text-foreground',
        true: '', // inherits text-white / dark:text-black from nav
      },
    },
  }
);

const Navbar: FC = () => {
  // Hooks
  const pathname = usePathname();
  const posthog = usePostHog();
  const [hidden, setHidden] = useState(false);
  const [scrolledPast20, setScrolledPast20] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Reset scroll state synchronously during render when pathname changes so `clear`
  // is correct on the very first render of the new page — no useEffect lag, no flash.
  const prevPathnameRef = useRef(pathname);
  if (prevPathnameRef.current !== pathname) {
    prevPathnameRef.current = pathname;
    if (scrolledPast20) setScrolledPast20(false);
  }

  // Derived — always correct at render time.
  const clear = pathname !== '/' && !scrolledPast20;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (pathname !== '/') {
        setScrolledPast20(currentScrollY > 20);
      }

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      }

      if (mobileMenuOpen) setMobileMenuOpen(false);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen, pathname]);

  // JSX
  const desktopLinksJSX = LINKS.map(({ name, href }) => (
    <Button key={name} variant={clear ? 'clear' : 'default'}>
      <a
        href={href}
        onClick={() => posthog.capture('navbar_link_clicked', { name, href })}
      >
        {name}
      </a>
    </Button>
  ));

  const mobileLinksJSX = LINKS.map(({ name, href }) => (
    <Link
      className={mobileLinkStyles({ clear })}
      href={href}
      key={name}
      onClick={() => {
        setMobileMenuOpen(false);
        posthog.capture('navbar_link_clicked', { name, href });
      }}
    >
      {name}
    </Link>
  ));

  return (
    <nav
      className={navStyles({ clear, hidden })}
      style={!clear ? { backgroundColor: 'var(--background)' } : undefined}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <Link href="/" onClick={() => posthog.capture('navbar_logo_clicked')}>
            <div
              className={
                !clear
                  ? 'text-black dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.55)]'
                  : ''
              }
            >
              <Logo height={34} width={54} stroke="currentColor" />
            </div>
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
