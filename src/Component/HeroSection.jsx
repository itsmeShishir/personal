import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen flex flex-col items-center" id="home">
      {/* Header */}
      <header className="flex justify-between items-center w-full max-w-6xl p-6">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg">Shishir <span className='text-purple-700'>Bhandari</span></span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="#experience" className="text-gray-700 hover:text-gray-900">Experience</a>
          <a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a>
          <a href="#education" className="text-gray-700 hover:text-gray-900">Education</a>
          <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
        </nav>
        <div className="flex space-x-4">
          <a href="#contact" className="bg-purple-700 text-white rounded-full px-5 py-2 hover:bg-purple-800">
            Hire Me
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-16 px-4">
        {/* Left Side - Introduction Text */}
        
        <div className="flex flex-col items-start text-left p-6 w-full md:w-1/2">
        {/* Social Media Icons */}
        <div className="flex space-x-6 my-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-700">
              <FaFacebook size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-700">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-700">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-700">
              <FaInstagram size={24} />
            </a>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Hi, I'm Shishir <span className='text-purple-700'>bhandari</span> ,<br /> a Creative Developer
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            I design and develop beautiful, user-friendly applications. Let's work together to bring your ideas to life.
          </p>
          <a href="#projects" className="mt-8 bg-purple-700 text-white rounded-full px-8 py-4 text-lg font-semibold hover:bg-purple-800">
            View My Work
          </a>

          
        </div>

        {/* Right Side - Portfolio Image */}
        <div className="flex justify-center items-center mt-10 md:mt-0 w-full md:w-1/2">
          <img
            src="https://vinayaksingh.com/static/media/illustration.cf4b7a67f23b684549c4f797c62b527a.svg"
            alt="Portfolio"
            className="w-full h-auto max-w-md" 
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
