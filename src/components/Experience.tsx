type Achievement = {
  main: string;
  sub?: string[];
};

type Position = {
  title: string;
  period: string;
};

type ExperienceEntry = {
  company: string;
  location: string;
  positions: Position[];
  achievements: Achievement[];
};

const Experience = () => {
  const experiences: ExperienceEntry[] = [
    {
      company: 'QMS Capital Management',
      location: 'Durham, NC',
      positions: [
        {
          title: 'Quant Researcher',
          period: 'Jul 2021 – Oct 2025',
        },
      ],
      achievements: [
        {
          main: 'Directed alpha research across FX, commodity, equity, and fixed income futures, resulting in 11 production-ready trading strategies.',
          sub: [
            'Innovated economic-based macro predictors (e.g. bond risk premia, country sentiment, inflation expectation, GDP nowcast) using country fundamentals and alternative data',
            'Researched ML-driven trading strategies (Neural Nets, XGBoost, Affinity Propagation, Kalman Filter, Lasso)',
            'Incorporated higher-frequency metrics like order flow data to enhance predictive signals',
            'Evaluated alternative data based on signal orthogonality and economics; negotiated pricing and ongoing vendor communication',
          ],
        },
        {
          main: 'Introduced Emerging Markets FX trading at the firm.',
          sub: ['Managed signal research, portfolio construction, regime modelling, and risk management'],
        },
        {
          main: 'Designed and implemented a modular research and backtesting framework with integrated data pipelines, transaction cost modeling, performance attribution, and production monitoring.',
        },
        {
          main: 'Interfaced with global sell-side desks and academia to aggregate broker views, synthesize macro themes, and translate discretionary views into systematic trade hypotheses.',
        },
      ],
    },
    {
      company: 'GIC (Singapore Sovereign Wealth Fund)',
      location: 'San Francisco, CA',
      positions: [
        {
          title: 'AFP',
          period: 'Mar 2020 – Dec 2020',
        },
      ],
      achievements: [
        {
          main: 'Developed an NLP-driven trading strategy on U.S. equities by analyzing 10-K filings to uncover peer mispricings.',
        },
      ],
    },
    {
      company: 'UCLA (Federal Reserve Bank)',
      location: 'Los Angeles, CA',
      positions: [
        {
          title: 'Researcher',
          period: 'Jun 2020 – Jun 2021',
        },
      ],
      achievements: [
        {
          main: 'Applied NLP techniques to quantify the effect of COVID-19 policies on households by analyzing state and local government documents across the U.S.',
        },
        {
          main: 'Analyzed the effect of world events on trends in equity, debt, and real estate.',
        },
      ],
    },
    {
      company: 'WeInvest',
      location: 'Bangalore, India',
      positions: [
        {
          title: 'Software Engineer',
          period: 'Mar 2019 – Jul 2019',
        },
      ],
      achievements: [
        {
          main: 'Implemented and deployed a white-labeled robo-advisory platform for banks across Singapore and the Middle East.',
        },
      ],
    },
    {
      company: 'Zoho ManageEngine',
      location: 'Chennai, India',
      positions: [
        {
          title: 'Software Engineer/Product Lead',
          period: 'Jun 2017 – Mar 2019',
        },
      ],
      achievements: [
        {
          main: 'Built product Zoho Zeptomail from inception to launch, now used by 2.5k+ organizations.',
        },
        {
          main: 'Led a cross-functional team of 12 developers, designers, testers, marketing, and content writers.',
        },
        {
          main: 'Spearheaded feature ideation, technical design, and execution to create a competitive product.',
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-28">
      <div className="section-shell">
        <p className="section-kicker">Track Record</p>
        <h2 className="section-title mt-4">Experience</h2>
        <p className="section-subtitle">
          A progression from software product leadership into systematic quant research, with a consistent focus on
          turning ideas into measurable outcomes.
        </p>
        <div className="relative mt-10 space-y-7 pl-8 md:pl-10">
          <span className="timeline-line" aria-hidden />
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.location}`} className="relative">
              <span className="timeline-dot" style={{ left: '-2.1rem', top: '1.5rem' }} aria-hidden />
              <article className="surface-panel-strong hover-lift p-5 sm:p-6 md:p-7">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">{exp.company}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {exp.positions.map((position) => (
                        <span
                          key={`${exp.company}-${position.title}`}
                          className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-800"
                        >
                          {position.title} · {position.period}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">{exp.location}</p>
                </div>
                <ul className="mt-5 space-y-3">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement.main} className="rounded-xl border border-slate-200 bg-slate-50/80 p-4">
                      <p className="text-slate-700">{achievement.main}</p>
                      {achievement.sub && (
                        <ul className="mt-3 space-y-2 border-l border-slate-200 pl-4">
                          {achievement.sub.map((subPoint) => (
                            <li key={subPoint} className="text-sm text-slate-600">
                              {subPoint}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
