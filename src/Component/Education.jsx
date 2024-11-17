import React from 'react';

function Education() {
  const educationData = [
    {
      degree: "(B.hons in Computer Science)",
      institution: "Softwarica College of IT & Ecommerce",
      affiliated: "Affiliated with Coventry University",
      year: "2020 - 2023",
    },
    {
      degree: "High School Certificate",
      institution: "Everest College",
      affiliated: "Affiliated with TU",
      year: "2016 - 2019",
    },
    {
      degree: "Secondary School Certificate",
      institution: "AIA",
      affiliated: "Affiliated with PAPSON",
      year: "2004 - 2015",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-16" id="education">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Education</h2>

      <div className="relative flex flex-col items-center max-w-4xl w-full">
        {/* Vertical Line for Desktop */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300 hidden lg:block"></div>

        {/* Education Entries */}
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center lg:text-left w-full lg:w-1/2 px-4 py-8 ${
              index % 2 === 0 ? 'lg:items-end lg:pr-8 lg:text-right' : 'lg:items-start lg:pl-8 lg:text-left'
            }`}
          >
            {/* Timeline Circle */}
            <div className="relative mb-4 lg:mb-0">
              <div className="w-10 h-10 bg-green-500 text-white font-bold rounded-full flex items-center justify-center mx-auto lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
                {index + 1}
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 w-full max-w-sm">
              <h3 className="text-2xl font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-gray-600 mt-1">{edu.institution}</p>
              <p className="text-gray-500 mt-1">{edu.affiliated}</p>
              <p className="text-gray-500 mt-1">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
