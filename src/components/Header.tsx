'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'pt-3' : 'pt-5'
      }`}
    >
      <div className="section-shell">
        <nav
          className={`rounded-2xl border backdrop-blur-md transition-all duration-500 ${
            isScrolled
              ? 'border-slate-200/80 bg-white/88 shadow-[0_18px_36px_rgba(15,23,42,0.12)]'
              : 'border-white/80 bg-white/65 shadow-[0_10px_26px_rgba(8,28,38,0.08)]'
          }`}
        >
          <div className="flex h-14 items-center justify-between px-3 sm:px-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-600 via-sky-700 to-cyan-800 text-xs font-bold text-white shadow-lg shadow-cyan-950/30">
                KA
              </span>
              <span className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
                Kartik Agarwal
              </span>
            </Link>
            <div className="hidden items-center gap-1 sm:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-white/90 hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="mailto:kartikagarwal777@gmail.com"
                className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-white/90 hover:text-slate-900"
              >
                Contact
              </a>
              <a
                href="/Kartik_Agarwal.pdf"
                download="Kartik_Agarwal.pdf"
                className="ml-1 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Download Resume
              </a>
            </div>
            <MobileMenu isScrolled={isScrolled} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
