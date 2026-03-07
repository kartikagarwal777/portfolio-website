type EducationEntry = {
  school: string;
  location: string;
  degree: string;
  achievements?: string[];
};

const Education = () => {
  const education: EducationEntry[] = [
    {
      school: 'UCLA Anderson School of Management',
      location: 'Los Angeles, CA',
      degree: 'Master of Financial Engineering',
      achievements: [
        'Represented UCLA at the Chicago Booth Investment Competition (Quant Track).',
        'Represented UCLA at CFA IRC and performed financial analysis on Snapchat.',
      ],
    },
    {
      school: 'Vellore Institute of Technology',
      location: 'Vellore, India',
      degree: 'Bachelor of Technology, Computer Science and Engineering',
    },
  ];

  return (
    <section id="education" className="py-24 md:py-28">
      <div className="section-shell">
        <p className="section-kicker">Foundation</p>
        <h2 className="section-title mt-4">Education</h2>
        <p className="section-subtitle">
          Formal training in financial engineering and computer science, reinforced through high-intensity competitions
          and applied research work.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {education.map((entry) => (
            <article key={entry.school} className="surface-panel hover-lift p-6 sm:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{entry.school}</h3>
                <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-amber-900">
                  {entry.location}
                </span>
              </div>
              <p className="mt-3 text-base font-semibold text-slate-700">{entry.degree}</p>
              {entry.achievements && (
                <ul className="mt-5 space-y-2 text-slate-600">
                  {entry.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-600" aria-hidden />
                      <span>{achievement}</span>
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

export default Education;
