import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Kartik Agarwal
          </Link>
          <div className="hidden sm:flex items-center space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="#experience" className="text-gray-600 hover:text-gray-900">Experience</Link>
            <Link href="#education" className="text-gray-600 hover:text-gray-900">Education</Link>
            <Link href="#projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            <a 
              href="/Agarwal_Kartik.pdf"
              download="Agarwal_Kartik.pdf"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
