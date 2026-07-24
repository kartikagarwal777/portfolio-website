const profileQuestions = [
  {
    question: "What does Kartik Agarwal specialize in?",
    answer:
      "Cross-asset alpha research, macro signal design, machine learning, portfolio construction, and the production systems that take an investment idea from research to live monitoring.",
  },
  {
    question: "Which markets has he researched?",
    answer:
      "His experience spans foreign exchange, commodities, equities, and fixed income futures, including the introduction of an Emerging Markets FX research program.",
  },
  {
    question: "What outcomes has his work produced?",
    answer:
      "He has helped produce 11 production-ready trading strategies, built a software product used by more than 2,500 organizations, and led a cross-functional team of 12.",
  },
  {
    question: "What is his technical background?",
    answer:
      "He combines a Master of Financial Engineering from UCLA Anderson with a computer science background and hands-on experience in Python, statistical modelling, data pipelines, and cloud platforms.",
  },
];

const ProfileHighlights = () => {
  return (
    <section id="profile-highlights" className="py-24 md:py-28" aria-labelledby="profile-highlights-title">
      <div className="section-shell">
        <p className="section-kicker">Professional Snapshot</p>
        <h2 id="profile-highlights-title" className="section-title mt-4">
          Kartik Agarwal at a glance
        </h2>
        <p className="section-subtitle">
          A concise summary of the markets, methods, and outcomes that define Kartik&apos;s work in quantitative
          investing and software engineering.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {profileQuestions.map((item) => (
            <article key={item.question} className="surface-panel-strong hover-lift p-6 sm:p-7">
              <h3 className="text-xl font-semibold text-slate-900">{item.question}</h3>
              <p className="mt-3 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileHighlights;
