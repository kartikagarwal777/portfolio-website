'use client';

import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="h-[60vh] min-h-[500px] flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-gray-900 animate-fade-in">Kartik Agarwal</h1>
            <p className="text-xl text-gray-600 animate-fade-in-delay">Alpha Quant Researcher & Software Engineer</p>
            <div className="flex justify-center space-x-4 animate-fade-in-delay-2">
              <a 
                href="mailto:kartikagarwal777@gmail.com"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all"
              >
                Contact Me
              </a>
              <a 
                href="https://www.linkedin.com/in/kartik-agarwal/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:scale-105 transition-all"
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </section>

        <About />
        <Experience />
        <Education />
        <Projects />
      </div>
    </main>
  );
}
