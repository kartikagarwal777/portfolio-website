'use client';

import { useEffect, useState } from 'react';

type MenuItem = {
  href: string;
  text: string;
  isExternal?: boolean;
  newTab?: boolean;
};

type MobileMenuProps = {
  isScrolled: boolean;
};

const MobileMenu = ({ isScrolled }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [isOpen]);

  const menuItems: MenuItem[] = [
    { href: '#about', text: 'About' },
    { href: '#experience', text: 'Experience' },
    { href: '#education', text: 'Education' },
    { href: '#projects', text: 'Projects' },
    { href: 'https://www.linkedin.com/in/kartik-agarwal/', text: 'LinkedIn', isExternal: true, newTab: true },
    { href: 'https://kartikag.substack.com', text: 'Substack', isExternal: true, newTab: true },
    { href: 'mailto:kartikagarwal777@gmail.com', text: 'Contact', isExternal: true },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
    if (isExternal) {
      closeMenu();
      return;
    }

    e.preventDefault();
    closeMenu();

    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 92;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sm:hidden">
      <button
        onClick={toggleMenu}
        className={`grid h-10 w-10 place-items-center rounded-xl border transition-colors ${
          isScrolled
            ? 'border-slate-300 bg-white text-slate-800'
            : 'border-white/80 bg-white/70 text-slate-800'
        }`}
        aria-label="Toggle menu"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed left-0 top-0 z-50 h-full w-full bg-slate-950/50"
            onClick={closeMenu}
          />

          {/* Menu */}
          <div
            className="fixed inset-0 z-[51] h-screen w-full overflow-y-auto bg-white/95 shadow-2xl backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full px-6 pb-8 pt-16">
              <button
                onClick={closeMenu}
                className="absolute right-4 top-4 rounded-full border border-slate-200 p-2 text-slate-600 hover:text-slate-900"
                aria-label="Close menu"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="mb-6">
                <p className="section-kicker">Navigation</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">Explore</h3>
              </div>
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.newTab ? '_blank' : undefined}
                    rel={item.newTab ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    onClick={(e) => handleLinkClick(e, item.href, item.isExternal)}
                  >
                    <span>{item.text}</span>
                    <span aria-hidden className="text-lg">→</span>
                  </a>
                ))}
              </div>
              <a
                href="/Kartik_Agarwal.pdf"
                download="Kartik_Agarwal.pdf"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                onClick={closeMenu}
              >
                Download Resume
              </a>
              <a
                href="https://kartikag.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                onClick={closeMenu}
              >
                Visit Substack
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
