import React from 'react';
import {  FaReact, FaNodeJs, FaJsSquare, FaVuejs, FaGithub, FaGit } from 'react-icons/fa';
import { SiTypescript, SiHtml5, SiCss3, SiBootstrap, SiFlutter, SiExpo } from 'react-icons/si';

function AboutMe() {
  return (
    <div className="text-black min-h-screen flex items-center px-8 py-16" id="about">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center">
        {/* Left Side - About Me Text */}
        <div className="flex-1 md:pr-8 text-left">
          <h2 className="text-3xl font-bold text-green-400">About me</h2>
          <p className="mt-4 text-lg">
            Hi there! I'm Shishir Bhandari, a website developer with a passion for creating custom online experiences through hard-coded, efficient solutions.
            With a skill set including HTML, CSS, JavaScript, and React, I have the tools to bring any website vision to life with clean, well-structured code.
        </p>
        <p className="mt-4 text-lg">
            My expertise goes beyond basic development; I specialize in crafting tailored, responsive, and scalable web applications from scratch, ensuring
            that my clients have unique, high-performance sites that meet their needs.
        </p>
        <p className="mt-4 text-lg">
            So if you're in need of a new website or just looking to revamp your current online presence, I'd love to chat and see how
            I can help. Let's bring your website dreams to reality together!
        </p>

          <h3 className="mt-8 text-xl font-bold text-green-400">Here are my main skills:</h3>
          
          {/* Skills Icons */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-4 text-3xl">
            <FaReact className="text-blue-400" />
            <SiTypescript className="text-blue-600" />
            <FaVuejs className="text-green-500" />
            <FaNodeJs className="text-green-500" />
            <SiHtml5 className="text-orange-600" />
            <SiCss3 className="text-blue-600" />
            <SiBootstrap className="text-purple-600" />
            <FaJsSquare className="text-yellow-500" />
            <SiFlutter className="text-blue-500" title="Flutter" />
            <FaGithub className="text-gray-800" title="GitHub" /> 
            <FaGit className="text-orange-500" title="Git" /> 
            <SiExpo className="text-black" title="Expo" /> 
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex-1 mt-8 md:mt-0 md:ml-8 flex justify-center">
          <img
            src="https://vinayaksingh.com/static/media/VinayakSingh.b47f5e7975b80ccbd448.png" 
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
