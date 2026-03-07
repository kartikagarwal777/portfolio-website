type ProjectEntry = {
  title: string;
  description?: string;
  highlights?: string[];
  items?: string[];
  tag: string;
};

const Projects = () => {
  const projects: ProjectEntry[] = [
    {
      title: 'Automated Nifty Stocks Strategy',
      tag: 'Systematic Strategy',
      description:
        'Researched, developed, and deployed a multiple stat-arb trading strategy on the top 100 NSE stocks (Nifty 50 + Next 50) over Google Cloud, with dynamic universe selection in backtesting to avoid survivorship bias.',
      highlights: ['Sharpe Ratio 3.52 on 10% daily turnover.'],
    },
    {
      title: 'Entrepreneurial & Platform Initiatives',
      tag: 'Venture Building',
      items: [
        'Founded and built an invoicing software startup (end-to-end ownership; ultimately shut down).',
        'Initiated a student-led quantitative investment fund framework at UCLA.',
      ],
    },
    {
      title: 'Competitions',
      tag: 'Performance',
      items: [
        'Booth Investment Competition: Represented UCLA at the Chicago Booth Investment Competition (Quant track).',
        'CFA IRC: Represented UCLA and performed financial analysis on Snapchat.',
      ],
    },
  ];

  return (
    <section id="projects" className="pb-24 pt-24 md:pb-32 md:pt-28">
      <div className="section-shell">
        <p className="section-kicker">Work Highlights</p>
        <h2 className="section-title mt-4">Research & Selected Projects</h2>
        <p className="section-subtitle">
          A mix of deployed quantitative research, entrepreneurial ownership, and competitive investing work that reflects
          both technical depth and execution range.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="surface-panel-strong hover-lift flex h-full flex-col p-6">
              <span className="w-fit rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-800">
                {project.tag}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{project.title}</h3>
              {project.description && <p className="mt-3 text-slate-600">{project.description}</p>}
              {project.highlights && (
                <ul className="mt-4 space-y-2 text-slate-700">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-amber-500" aria-hidden />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
              {project.items && (
                <ul className="mt-4 space-y-2 text-slate-700">
                  {project.items.map((item) => (
                    <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
