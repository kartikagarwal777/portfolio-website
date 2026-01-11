const Projects = () => {
  const projects = [
    {
      title: "Automated Nifty Stocks Strategy",
      description: "Researched, developed, and deployed a multiple stat arb trading strategy on the top 100 NSE stocks (Nifty 50 + Next 50) over Google Cloud, with dynamic universe selection in backtesting to avoid survivorship bias.",
      highlights: ["Sharpe Ratio 3.52 on 10% daily turnover"]
    },
    {
      title: "Entrepreneurial & Platform Initiatives",
      items: [
        "Founded and built an invoicing software startup (end-to-end ownership; ultimately shut down)",
        "Initiated a student-led quantitative investment fund framework at UCLA"
      ]
    },
    {
      title: "Competitions",
      items: [
        "Booth Investment Competition: Represented UCLA at the Chicago Booth Investment Competition-Quant track",
        "CFA IRC: Represented UCLA at CFA IRC and performed financial analysis on Snapchat"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Research & Selected Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all hover:border-blue-500 border-l-4 border-gray-200 hover:rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              {project.description && (
                <p className="text-gray-600 mb-3">{project.description}</p>
              )}
              {project.highlights && (
                <ul className="list-disc list-inside space-y-1 text-gray-600 mb-3">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              )}
              {project.items && (
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {project.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
