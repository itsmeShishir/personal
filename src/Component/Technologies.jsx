import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaNodeJs, FaGit, FaGithub, FaGitlab, FaVuejs, FaAws, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiFlask, SiTailwindcss, SiJest, SiTensorflow, SiAntdesign, SiFirebase, SiPostman, SiDigitalocean, SiPythonanywhere, SiMongodb, SiPostgresql, SiSequelize, SiPassport, SiVercel, SiNetlify } from 'react-icons/si';

const technologies = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'NodeJS', icon: <FaNodeJs /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'VueJS', icon: <FaVuejs /> },
  { name: 'Jest', icon: <SiJest /> },
  { name: 'Tensorflow', icon: <SiTensorflow /> },
  { name: 'Ant Design Vue', icon: <SiAntdesign /> },
  { name: 'Git', icon: <FaGit /> },
  { name: 'Github', icon: <FaGithub /> },
  { name: 'Gitlab', icon: <FaGitlab /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'Digital Ocean', icon: <SiDigitalocean /> },
  { name: 'AWS EC2', icon: <FaAws /> },
  { name: 'PythonAnywhere', icon: <SiPythonanywhere /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Sequelize', icon: <SiSequelize /> },
  { name: 'PassportJS', icon: <SiPassport /> },
  { name: 'Netlify', icon: <SiNetlify /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Docker', icon: <FaDocker /> },
];

function Technologies() {
  return (
    <div className=" py-16" id="skills">
      <div className="container mx-auto px-8 w-[80%]">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">Technologies I Use.</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-red-100 rounded-lg shadow hover:bg-red-200 transition duration-300"
            >
              <div className="text-red-600 text-2xl mb-2">{tech.icon}</div>
              <span className="text-sm font-medium text-red-700">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
