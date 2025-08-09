const Education = () => {
  const education = [
    {
      school: "UCLA ANDERSON SCHOOL OF MANAGEMENT",
      location: "Los Angeles, CA",
      degree: "Master of Financial Engineering",
      achievements: [
        "Represented UCLA at the Chicago Booth Investment Competition-Quant track",
        "Represented UCLA at CFA IRC and performed financial analysis on Snapchat"
      ]
    },
    {
      school: "VELLORE INSTITUTE OF TECHNOLOGY",
      location: "Vellore, India",
      degree: "Bachelor of Technology, Computer Science and Engineering"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="border-l-4 border-gray-200 pl-4 hover:border-blue-500 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">{edu.school}</h3>
                <span className="text-gray-500">{edu.location}</span>
              </div>
              <p className="text-gray-600 font-medium mb-2">{edu.degree}</p>
              {edu.achievements && (
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
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

export default Education;
