'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import { site, waUrl, whatsappMessages } from '@/lib/site';

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Sample Report', href: '/sample-report' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Why HouseRx', href: '/why-us' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
        scrolled
          ? 'border-line bg-cream/90 backdrop-blur-md'
          : 'border-transparent bg-cream'
      }`}
    >
      <div className="container-wrap flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-baseline gap-1 font-display text-2xl text-ink"
          aria-label={`${site.name} home`}
        >
          <span className="font-medium">House</span>
          <span className="italic text-teal">Rx</span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-body transition-colors ${
                  active ? 'text-teal' : 'text-ink hover:text-teal'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href={waUrl(whatsappMessages.default)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden lg:inline-flex"
        >
          <MessageCircle size={16} strokeWidth={1.75} />
          Book an Audit
        </a>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-ink lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-cream lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="container-wrap flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-baseline gap-1 font-display text-2xl text-ink"
            >
              <span className="font-medium">House</span>
              <span className="italic text-teal">Rx</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-ink"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="container-wrap mt-12" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block border-b border-line py-4 font-display text-h2 text-ink transition-colors hover:text-teal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="block border-b border-line py-4 font-display text-h2 text-ink transition-colors hover:text-teal"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="mt-10 flex flex-col gap-3">
              <a
                href={waUrl(whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                <MessageCircle size={16} strokeWidth={1.75} />
                Book an Audit
              </a>
              <a
                href={`tel:${site.phoneLink}`}
                className="btn-secondary w-full justify-center"
              >
                Call {site.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
