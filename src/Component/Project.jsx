import React from 'react';
import nfilili from "../assets/nepfilili.png";
import bibaabo from "../assets/bibaabo.png";
const projects = [
  {
    id: 4,
    title: 'Bibaabo',
    description: 'A web platform built for Verve Tech, leveraging Laravel for the backend, MySQL for the database, and React for the frontend.',
    stack: ['Laravel', 'MySQL', 'React'],
    imageUrl: bibaabo,
  },
  {
    id: 5,
    title: 'Nepfilili',
    description: 'A complete backend and frontend solution using Django, DRF for the backend, and React and Next.js for the frontend.',
    stack: ['Django', 'DRF', 'React', 'Next.js'],
    imageUrl: nfilili,
  },
  {
    id: 6,
    title: 'Desire Consultancy',
    description: 'Developed a robust system for Desire Consultancy using Laravel and MySQL.',
    stack: ['Laravel', 'MySQL'],
    imageUrl: 'https://www.desireedunepal.com/_next/image?url=%2FDesire-logo.webp&w=256&q=75',
  },
  // {
  //   id: 7,
  //   title: 'Savr',
  //   description: 'A file-sharing application built using Django, DRF for the backend, and React for the frontend.',
  //   stack: ['Django', 'DRF', 'React'],
  //   imageUrl: 'https://via.placeholder.com/300x150',
  // },
  // {
  //   id: 8,
  //   title: 'OCCP Nepal',
  //   description: 'An electric car charging app built using React Native for mobile development, with React and DRF/Django for the backend.',
  //   stack: ['React Native', 'React', 'DRF', 'Django'],
  //   imageUrl: 'https://via.placeholder.com/300x150',
  // },
];

function Projects() {
  return (
    <div className="bg-gray-100 py-16 px-4" id="projects">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-purple-600 mb-12 text-center tracking-wide">Latest Projects</h2>
        
        <div className="w-[80%] container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
