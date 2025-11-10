/**
 * Navbar.tsx
 * Navbar component for various page links.
 */

'use client';

// Node Modules
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Components
import Logo from './Logo';

const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past threshold
      setScrolled(currentScrollY > 20);

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      }

      // Close mobile menu when scrolling
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const navItems = [
    { name: 'Products', href: '/products/coaster' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 w-full
        transition-all duration-300 ease-in-out
        border-b
        ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        ${scrolled ? 'bg-white shadow-sm border-black' : 'bg-transparent border-white'}
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <Link href="/">
            <Logo
              height={34}
              width={54}
              stroke={scrolled ? 'currentColor' : 'white'}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  px-4 py-2 text-sm font-medium hover:text-black transition-colors hover:bg-gray-50
                  ${scrolled ? 'text-black' : 'text-white'}
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors ${scrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-200'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div
            className={`
              md:hidden border-t border-gray-200 
              ${scrolled ? 'bg-white' : 'bg-transparent'}
            `}
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    block px-3 py-2 text-base font-medium text-gray-700 
                    hover:bg-gray-50 hover:text-black rounded-md transition-colors
                    ${scrolled ? 'text-black' : 'text-white'}
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
