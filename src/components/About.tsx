const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
                <p className="text-lg text-gray-600 mb-4">
                    Quantitative Researcher at QMS Capital Management specializing in systematic trading strategies, 
                    machine learning, and quantitative analysis. I led the firm’s expansion into Emerging Markets FX 
                    by developing a dynamic universe selection framework and launching 10+ production-ready alpha strategies 
                    in this space. My broader research covers FX, commodities, equities, and fixed-income futures.
                </p>
                <p className="text-lg text-gray-600">
                    With a background in financial engineering and computer science, I build robust research infrastructure 
                    and predictive models that integrate macro, fundamental, and high-frequency signals to deliver scalable alpha.
                </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <span className="mr-2">📍</span> Raleigh, NC
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📧</span>
                  <a href="mailto:kartikagarwal777@gmail.com" className="hover:text-blue-600">
                    kartikagarwal777@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📱</span>
                  <a href="tel:4244409728" className="hover:text-blue-600">
                    (424) 440-9728
                  </a>
                </p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/kartik-agarwal/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                    </svg>
                    LinkedIn Profile
                  </a>
                  <a 
                    href="/resume.pdf" 
                    download="Agarwal_Kartik.pdf"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Programming & Analytics</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Python (Primary)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Java
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      R
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      MATLAB
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      SQL
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Technologies & Tools</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Bloomberg Terminal
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Git/Hg/SVN
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Kafka & Redis
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      GCP
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      AWS
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Systematic Trading",
                  "Machine Learning",
                  "Quantitative Analysis",
                  "Statistical Arbitrage",
                  "Alpha Research",
                  "Risk Management",
                  "Financial Engineering",
                  "Data Pipeline Development"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Personal Interests</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: "⚽", text: "Soccer" },
                  { icon: "🎾", text: "Tennis" },
                  { icon: "🥋", text: "Martial Arts" },
                  { icon: "🏎️", text: "Car Racing" },
                  { icon: "⌚", text: "Horology" },
                  { icon: "🎬", text: "Horror Movies" },
                  { icon: "🎮", text: "Video Games" }
                ].map((hobby) => (
                  <span
                    key={hobby.text}
                    className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm flex items-center gap-1 hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-base">{hobby.icon}</span>
                    {hobby.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
