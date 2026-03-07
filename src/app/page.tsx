'use client';

import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  const heroStats = [
    { value: '11', label: 'Production-ready strategies' },
    { value: '$2B', label: 'Hedge fund research context' },
    { value: '8+', label: 'Years across quant + engineering' },
    { value: '12', label: 'Cross-functional team led' },
  ];

  const strengths = [
    'Alpha Research',
    'ML Signal Design',
    'Macro Modelling',
    'Portfolio Construction',
    'Data Pipelines',
    'Production Monitoring',
  ];

  return (
    <main className="relative min-h-screen text-slate-900">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[50rem] overflow-hidden">
        <div className="hero-orb hero-orb-one left-[-5rem] top-28" />
        <div className="hero-orb hero-orb-two right-[-4rem] top-36" />
        <div className="grid-fade absolute inset-0 opacity-70" />
      </div>
      <Header />
      <ScrollToTop />
      <div className="relative pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="pb-20 md:pb-24">
          <div className="section-shell">
            <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="space-y-8">
                <p className="section-kicker motion-reveal">Systematic Investing · Macro · ML</p>
                <div className="space-y-4">
                  <h1 className="motion-reveal motion-delay-1 text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl">
                    Kartik Agarwal
                  </h1>
                  <p className="motion-reveal motion-delay-2 max-w-2xl text-lg text-slate-600 sm:text-xl">
                    Alpha quant researcher and former engineering lead building research systems that turn economic intuition,
                    data, and machine learning into scalable investment decisions.
                  </p>
                </div>
                <div className="motion-reveal motion-delay-3 flex flex-wrap gap-3">
                  <a
                    href="/Kartik_Agarwal.pdf"
                    download="Kartik_Agarwal.pdf"
                    className="inline-flex items-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Download Resume
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kartik-agarwal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://kartikag.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-xl border border-cyan-200 bg-cyan-50 px-6 py-3 text-sm font-semibold text-cyan-800 hover:bg-cyan-100"
                  >
                    Substack
                  </a>
                </div>
                <div className="motion-reveal motion-delay-3 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                  <span className="stat-pill px-3 py-1.5 font-semibold">$2B fund strategy experience</span>
                  <span className="stat-pill px-3 py-1.5 font-semibold">Cross-asset research</span>
                  <span className="stat-pill px-3 py-1.5 font-semibold">Built for production</span>
                </div>
              </div>
              <div className="motion-reveal motion-delay-2 surface-panel p-6 sm:p-7">
                <p className="section-kicker">Current Focus</p>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Building durable alpha through data and disciplined execution
                </h2>
                <p className="mt-4 text-slate-600">
                  I care about signal quality, economic grounding, and live trading reliability. My work spans idea generation,
                  portfolio construction, and production monitoring pipelines.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-slate-200/80 bg-white/80 p-4">
                      <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                      <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl border border-slate-200/80 bg-white/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Core Strengths</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {strengths.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
