const About = () => {
  const skillGroups = [
    {
      title: 'Programming & Analytics',
      items: ['Python (Primary)', 'Java', 'R', 'MATLAB', 'SQL'],
    },
    {
      title: 'Technologies & Tools',
      items: ['Bloomberg Terminal', 'Git/Hg/SVN', 'Kafka & Redis', 'GCP', 'AWS'],
    },
    {
      title: 'Areas of Expertise',
      items: [
        'Systematic Trading',
        'Machine Learning',
        'Quantitative Analysis',
        'Statistical Arbitrage',
        'Alpha Research',
        'Risk Management',
        'Financial Engineering',
        'Data Pipeline Development',
      ],
    },
  ];

  const interests = ['Soccer', 'Tennis', 'Martial Arts', 'Car Racing', 'Watches', 'Horror Movies', 'Video Games'];

  return (
    <section id="about" className="py-24 md:py-28">
      <div className="section-shell">
        <p className="section-kicker">Profile</p>
        <h2 className="section-title mt-4">About Me</h2>
        <p className="section-subtitle">
          Quantitative portfolio manager with deep experience in cross-asset strategy design, signal research, and
          production-grade investment systems.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <article className="surface-panel p-6 sm:p-7 hover-lift">
              <h3 className="text-2xl font-semibold text-slate-900">Investor mindset, engineering rigor</h3>
              <p className="mt-4 text-slate-600">
                I have built and launched systematic strategies across equities, currencies, commodities, and fixed income.
                My approach combines economic reasoning with statistical discipline, and I focus on turning research
                insights into resilient live systems.
              </p>
              <p className="mt-4 text-slate-600">
                Before moving fully into quant investing, I led software teams and shipped products at scale. That execution
                background helps me build workflows that are fast to iterate, easy to monitor, and robust in production.
              </p>
            </article>
            <article className="surface-panel p-6 sm:p-7">
              <h3 className="text-xl font-semibold text-slate-900">Contact</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-700 sm:text-base">
                <p>
                  <span className="font-semibold text-slate-900">Location:</span> Raleigh, NC
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Email:</span>{' '}
                  <a href="mailto:kartikagarwal777@gmail.com" className="text-cyan-700 hover:text-cyan-800">
                    kartikagarwal777@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Phone:</span>{' '}
                  <a href="tel:4244409728" className="text-cyan-700 hover:text-cyan-800">
                    (424) 440-9728
                  </a>
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/kartik-agarwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400"
                >
                  LinkedIn
                </a>
                <a
                  href="https://kartikag.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-100"
                >
                  Substack
                </a>
                <a
                  href="/Kartik_Agarwal.pdf"
                  download="Kartik_Agarwal.pdf"
                  className="rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Resume
                </a>
              </div>
            </article>
          </div>
          <div className="space-y-6">
            <article className="surface-panel-strong p-6 sm:p-7 hover-lift">
              <h3 className="text-xl font-semibold text-slate-900">Technical Skills</h3>
              <div className="mt-5 grid gap-5">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">{group.title}</h4>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-slate-700">
                          <span className="h-2 w-2 rounded-full bg-cyan-600" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
            <article className="surface-panel-strong p-6 sm:p-7 hover-lift">
              <h3 className="text-xl font-semibold text-slate-900">Personal Interests</h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-900"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
