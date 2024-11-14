import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16" >
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://github.com/yourusername" // Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername" // Replace with your LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/yourusername" // Replace with your Twitter link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="mailto:your-email@example.com" // Replace with your email
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-500 mb-2">
          © {new Date().getFullYear()} Shishir Bhandari. All rights reserved.
        </p>

        {/* Optional GitHub Source Code Link */}
        <a
          href="https://github.com/yourusername/yourportfolio" // Replace with your repository link
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-sm text-gray-500 hover:underline flex items-center space-x-1"
        >
          <FaGithub size={16} />
          <span>Source code on GitHub</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
