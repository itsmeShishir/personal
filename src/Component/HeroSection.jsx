import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import img1 from "../assets/illustration.svg";
function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen flex flex-col items-center" id="home">
      {/* Header */}
      <header className="flex justify-between items-center w-full max-w-6xl p-6 relative">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg">Shishir <span className="text-purple-700">Bhandari</span></span>
        </div>
        {/* Desktop Navigation */}
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
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900">
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-white shadow-lg p-6 rounded-lg md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <nav className="flex flex-col space-y-4">
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
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center w-full h-full flex-grow px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center text-center md:text-left max-w-6xl"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
        >
          {/* Left Side - Introduction Text */}
          <div className="flex flex-col items-center md:items-start text-left p-6 w-full md:w-1/2">
            {/* Social Media Icons */}
            <motion.div
              className="flex space-x-6 my-8"
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
            >
              <a href="https://www.facebook.com/Shishirbhandariii" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-700">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <FaFacebook size={24} />
                </motion.div>
              </a>
              <a href="https://www.linkedin.com/in/shishir-bhandari-9b33b01b7/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-700">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <FaLinkedin size={24} />
                </motion.div>
              </a>
              <a href="https://x.com/shishir_vandari" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-700">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <FaTwitter size={24} />
                </motion.div>
              </a>
              <a href="https://www.instagram.com/shishir.bhandarii/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-700">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <FaInstagram size={24} />
                </motion.div>
              </a>
            </motion.div>
            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
              Hi, I'm Shishir <span className="text-purple-700">Bhandari</span>,<br /> a Creative Developer
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              I design and develop beautiful, user-friendly applications. Let's work together to bring your ideas to life.
            </p>
            <motion.a
              href="#projects"
              className="mt-8 bg-purple-700 text-white rounded-full px-8 py-4 text-lg font-semibold hover:bg-purple-800"
              whileHover={{ scale: 1.1 }}
            >
              View My Work
            </motion.a>
          </div>

          {/* Right Side - Portfolio Image */}
          <motion.div
            className="flex justify-center items-center mt-10 md:mt-0 w-full md:w-1/2"
            variants={imageVariant}
          >
            <img
              src={img1}
              alt="Portfolio"
              className="w-full h-auto max-w-md"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
