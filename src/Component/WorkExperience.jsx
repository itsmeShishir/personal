import React, { useState } from 'react';

function WorkExperience() {
  const jobs = [
    {
      id: 1,
      company: 'TrioPlusTechnology',
      role: 'Intern',
      location: '@ Laravel Developer',
      date: 'Feb - Sept 2018',
      responsibilities: [
        'Assisted in the development of web applications using Laravel framework, improving functionality and performance.',
        'Collaborated with senior developers to debug and troubleshoot existing code, gaining hands-on experience with PHP and MySQL.',
        'Contributed to code reviews and team discussions, helping to refine and optimize project solutions.',
      ],
    },
    {
      id: 2,
      company: 'Nfili Tech',
      role: 'Junior Software Engineer',
      location: '@ Python Developer',
      date: 'Jan 2017 - Jan 2018',
      responsibilities: [
        'Developed and maintained backend systems using Python and Django, resulting in a 20% improvement in processing time.',
        'Wrote and optimized SQL queries to handle large datasets for analytical reports.',
        'Provided support for Linux-based systems and implemented scripts to automate routine tasks, reducing manual workload by 30%.',
      ],
    },
    {
      id: 3,
      company: 'Verv Tech',
      role: 'Mid Level Software Engineer',
      location: '@ Frontend Developer',
      date: 'March 2019 - July 2021',
      responsibilities: [
        'Led frontend development for several web applications using React, enhancing user experience and responsiveness.',
        'Designed reusable components and maintained a consistent UI/UX across projects.',
        'Collaborated with designers and backend developers to implement efficient and scalable solutions, increasing client satisfaction.',
      ],
    },
    {
      id: 4,
      company: 'Durshikshya',
      role: 'Senior Level Software Engineer',
      location: '@ Mobile Application Development',
      date: 'July 2021 - Present',
      responsibilities: [
        'Developed cross-platform mobile applications using Flutter, providing seamless user experiences across iOS and Android.',
        'Worked closely with stakeholders to gather requirements and implement new features based on client feedback.',
        'Improved app performance by optimizing code and implementing best practices, leading to a 25% increase in app load speed.',
      ],
    },
  ];

  const [activeJobId, setActiveJobId] = useState(jobs[0].id);
  const activeJob = jobs.find((job) => job.id === activeJobId);

  return (
    <div className="min-h-screen flex flex-col items-center text-black px-4 py-12 md:px-8 lg:px-16" id="experience">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-green-400">Where I've Worked</h2>
      <div className="flex flex-col md:flex-row max-w-5xl w-full">
        {/* Sidebar for Company List */}
        <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 md:w-1/3 rounded-lg overflow-x-auto">
          {jobs.map((job) => (
            <button
              key={job.id}
              onClick={() => setActiveJobId(job.id)}
              className={`w-full text-left py-2 px-4 rounded-lg transition-all duration-200 truncate ${
                activeJobId === job.id
                  ? 'bg-green-500 text-white font-semibold'
                  : 'bg-gray-100 text-gray-800 hover:bg-green-200 hover:text-green-800'
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Main Content Area for Job Details */}
        <div className="flex-grow mt-8 md:mt-0 md:ml-8">
          <h3 className="text-xl sm:text-2xl font-semibold">
            {activeJob.role} <span className="text-green-400">{activeJob.location}</span>
          </h3>
          <p className="text-gray-600 mt-1">{activeJob.date}</p>
          <ul className="mt-4 space-y-3 text-gray-700 list-disc list-inside">
            {activeJob.responsibilities.map((resp, index) => (
              <li key={index} className="leading-relaxed">
                {resp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
