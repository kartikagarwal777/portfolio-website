'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const emailAddress = 'kartikagarwal777@gmail.com';
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
  ];

  const handleCopyEmail = async () => {
    try {
      if (!navigator.clipboard) return;
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

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
              <div className="group relative">
                <a
                  href={`mailto:${emailAddress}`}
                  className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-white/90 hover:text-slate-900"
                >
                  Contact
                </a>
                <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-72 -translate-x-1/2 translate-y-2 rounded-xl border border-slate-200 bg-white/95 p-3 opacity-0 shadow-[0_22px_38px_rgba(15,23,42,0.15)] backdrop-blur transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Email</p>
                  <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2">
                    <a
                      href={`mailto:${emailAddress}`}
                      className="min-w-0 flex-1 truncate text-sm font-medium text-slate-700 hover:text-cyan-700"
                    >
                      {emailAddress}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900"
                    >
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
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
