import React from 'react';

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of XYZ",
      year: "2018 - 2022",
    },
    {
      degree: "High School Diploma",
      institution: "ABC High School",
      year: "2016 - 2018",
    },
    {
      degree: "Middle School Certificate",
      institution: "DEF Middle School",
      year: "2014 - 2016",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-16" id="education">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Education</h2>
      
      <div className="relative flex flex-col items-center max-w-4xl w-full">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300 hidden md:block"></div>

        {/* Education Entries */}
        {educationData.map((edu, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center md:w-1/2 px-4 py-8 ${index % 2 === 0 ? 'md:items-end md:pr-8 text-right' : 'md:items-start md:pl-8 text-left'}`}
            style={{ transform: index % 2 === 0 ? 'translateX(-50%)' : 'translateX(50%)' }}
          >
            {/* Timeline Circle in Center */}
            <div className="relative mb-4 md:mb-0">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-green-500 text-white font-bold rounded-full flex items-center justify-center">
                {index + 1}
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 w-full max-w-sm">
              <h3 className="text-2xl font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-gray-600 mt-1">{edu.institution}</p>
              <p className="text-gray-500 mt-1">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
