const Experience = () => {
  const experiences = [
    {
      company: "QMS Capital Management",
      location: "Durham, NC",
      positions: [
        {
          title: "Quant Researcher",
          period: "Jul 2021 – Oct 2025"
        }
      ],
      achievements: [
        {
          main: "Directed alpha research across FX, commodity, equity, and fixed income futures, resulting in 11 production-ready trading strategies.",
          sub: [
            "Innovated economic-based macro predictors (e.g. bond risk premia, country sentiment, inflation expectation, gdp nowcast) using country fundamentals and alternative data",
            "Researched ML-driven trading strategies (Neural Nets, XGBoost, Affinity Propagation, Kalman Filter, Lasso)",
            "Incorporated higher frequency metrics like order flow data to enhance predictive signals",
            "Evaluated alternative data based on signal orthogonality and economics; negotiated pricing and ongoing vendor communication"
          ]
        },
        {
          main: "Introduced Emerging Markets FX trading at the firm.",
          sub: [
            "Managed the signal research, portfolio construction, regime modelling and risk management"
          ]
        },
        {
          main: "Designed and implemented a modular research and backtesting framework with integrated data pipelines, transaction cost modeling, performance attribution, and production monitoring."
        },
        {
          main: "Interfaced with global sell-side desks and academia to aggregate broker views, synthesize macro themes, and translate discretionary views into systematic trade hypotheses."
        }
      ]
    },
    {
      company: "GIC (Singapore Sovereign Wealth Fund)",
      location: "San Francisco, CA",
      positions: [
        {
          title: "AFP",
          period: "Mar 2020 – Dec 2020"
        }
      ],
      achievements: [
        {
          main: "Developed an NLP-driven trading strategy on U.S. equities by analyzing 10-K filings to uncover peer mispricings"
        }
      ]
    },
    {
      company: "UCLA (Federal Reserve Bank)",
      location: "Los Angeles, CA",
      positions: [
        {
          title: "Researcher",
          period: "Jun 2020 – Jun 2021"
        }
      ],
      achievements: [
        {
          main: "Applied NLP techniques to quantify the effect of COVID-19 policies on households by analyzing state and local government documents across the U.S."
        },
        {
          main: "Analyzed the effect of world events on trends in equity, debt, and real estate"
        }
      ]
    },
    {
      company: "WeInvest",
      location: "Bangalore, India",
      positions: [
        {
          title: "Software Engineer",
          period: "Mar 2019 – Jul 2019"
        }
      ],
      achievements: [
        {
          main: "Implemented and deployed a white-labeled robo-advisory platform for banks across Singapore and the Middle East"
        }
      ]
    },
    {
      company: "Zoho ManageEngine",
      location: "Chennai, India",
      positions: [
        {
          title: "Software Engineer/Product Lead",
          period: "Jun 2017 – Mar 2019"
        }
      ],
      achievements: [
        {
          main: "Built product Zoho Zeptomail from inception to product launch, now being used by 2.5k+ organizations",
        },
        {
          main: 
            "Led a cross-functional team of 12 developers, designers, testers, marketing and content writers",
        },
        { 
          main: "Spearheaded feature ideation, technical design, and execution to create a competitive product",
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all hover:border-blue-500 border-l-4 border-gray-200 hover:rounded-xl">
              <div className="flex flex-col sm:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                  {exp.positions.map((pos, idx) => (
                    <div key={idx} className="text-gray-600">
                      <span className="font-medium">{pos.title}</span>
                      <span className="text-gray-400"> • {pos.period}</span>
                    </div>
                  ))}
                </div>
                <div className="text-gray-500 mt-2 sm:mt-0">{exp.location}</div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>
                    {typeof achievement === 'string' ? achievement : achievement.main}
                    {achievement.sub && (
                      <ul className="list-none pl-6 mt-2 space-y-1">
                        {achievement.sub.map((subItem, subIdx) => (
                          <li key={subIdx} className="flex items-start">
                            <span className="mr-2 text-gray-400">o</span>
                            <span>{subItem}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
