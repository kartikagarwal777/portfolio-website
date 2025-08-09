const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all hover:border-blue-500 border-l-4 border-gray-200 hover:rounded-xl">
          <div className="flex flex-col sm:flex-row justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">Indian Stock Market Trading Strategy</h3>
            <span className="text-gray-500">Present</span>
          </div>
          <p className="text-gray-600">
            Researched, developed and deployed multi factor automated trading strategy over Google Cloud 
            for Nifty futures traded on the NSE to achieve a Sharpe ratio of 3.52 with a daily turnover of 10%. <a href="https://india-stock-public.streamlit.app/">View Live Performance</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
