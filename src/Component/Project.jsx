import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Chat Room [Test]',
    description: 'An interview test project that aims to verify skills in understanding the task and building UI with React.',
    stack: ['Typescript', 'Jotai', 'SWR', 'Tailwind CSS', 'Headless UI', 'json server', 'React Error Boundary'],
    imageUrl: 'https://via.placeholder.com/300x150', // Replace with actual image URL
  },
  {
    id: 2,
    title: 'RLibrary',
    description: 'Simple CRUD books system using Firebase/Firestore, Material UI, React, React Hook Form, React Router v6 and all these things bundled by vite',
    stack: ['React', 'React hooks', 'Context API', 'React Suspense', 'Router DOM v6', 'Firebase/Firestore', 'Material UI'],
    imageUrl: 'https://via.placeholder.com/300x150',
  },
  {
    id: 3,
    title: 'Cryptocurrency',
    description: 'Cryptocurrency app is my best React application so far. It’s built up using Ant design, RTK Query, ChartJS, Coinranking and Bing News API. I have learnt a lot of interesting technologies like RTK Query, ChartJS as well as integrating custom features into Ant components like filter/sorting data, view blocks as list/grid or implementing load more component.',
    stack: ['React', 'React Hooks', 'Redux', 'RTK Query', 'Rapid API', 'Ant Design', 'ChartJS'],
    imageUrl: 'https://via.placeholder.com/300x150',
  },
];

function Projects() {
  return (
    <div className="bg-gray-100 py-16 px-4" id="projects">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-purple-600 mb-12 text-center tracking-wide">Latest Projects</h2>
        
        <div className=" w-[80%] container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 hover:text-purple-600 transition duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <h4 className="font-semibold mb-2 text-gray-700">Stack</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-purple-100 text-purple-700 text-xs font-medium py-[0.25rem] px-[0.5rem] rounded-full hover:bg-purple-200 transition duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button 
            className="bg-purple-600 text-white px-4 py-2 text-md font-semibold shadow-lg hover:bg-purple-700 rounded-md transition duration-300 transform hover:-translate-y-1"
          >
            See more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
