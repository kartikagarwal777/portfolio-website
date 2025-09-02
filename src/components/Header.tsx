'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link 
            href="/" 
            className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-gray-900'
            }`}
          >
            Kartik Agarwal
          </Link>
          <div className="hidden sm:flex items-center space-x-8">
            <Link 
              href="#about" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link 
              href="#experience" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Experience
            </Link>
            <Link 
              href="#education" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Education
            </Link>
            <Link 
              href="#projects" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="mailto:kartikagarwal777@gmail.com" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
            <a 
              href="/Agarwal_Kartik.pdf"
              download="Agarwal_Kartik.pdf"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105"
            >
              Download Resume
            </a>
          </div>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
