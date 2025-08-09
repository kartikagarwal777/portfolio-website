const Experience = () => {
  const experiences = [
    {
      company: "QMS Capital Management",
      location: "Durham, NC",
      positions: [
        {
          title: "Associate (Alpha Quant Researcher)",
          period: "Feb 2023 – Present"
        },
        {
          title: "Senior Analyst",
          period: "Jul 2021 - Jan 2023"
        }
      ],
      achievements: [
        "Led firm's expansion into Emerging Markets by developing systematic framework for tradable currencies",
        "Researched and implemented 10 successful alpha strategies for EM FX universe",
        "Developed alpha models using ML techniques including Neural Nets(TFT), XGBoost, Affinity Propagation",
        "Designed Python-based infrastructure for research workflows and data pipelines",
        "Created predictive signals for forecasting higher frequency metrics",
        "Constructed proprietary macro indexes for enhanced model inputs",
        "Incorporated fundamental factors into alpha models",
        "Researched statistical arbitrage strategy for global commodity and equity futures",
        "Conducted peer code reviews and model validations"
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
        "Generated efficient trading strategy exploiting mispricing in stock returns using NLP text-based network classification"
      ]
    },
    {
      company: "UCLA",
      location: "Los Angeles, CA",
      positions: [
        {
          title: "Researcher",
          period: "Jun 2020 – Jun 2021"
        }
      ],
      achievements: [
        "Partnered with Federal Reserve Bank of Philadelphia to quantify COVID policies' impact",
        "Analyzed trends and diversification in equity, debt, and real estate across countries"
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
        "Managed implementation and deployment of Wealth Management Robo Advisory product for Singapore and Middle East banks"
      ]
    },
    {
      company: "Zoho ManageEngine",
      location: "Chennai, India",
      positions: [
        {
          title: "Software Engineer",
          period: "Jun 2017 – Mar 2019"
        }
      ],
      achievements: [
        "Developed core features of Zoho Zeptomail used by 2.5k+ organisations",
        "Led team of dozen developers in developing key modules and features"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
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
                  <li key={idx}>{achievement}</li>
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
