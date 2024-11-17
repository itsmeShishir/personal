import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16" >
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://github.com/itsmeshishir" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/shishir-bhandari-9b33b01b7/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://x.com/shishir_vandari" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="mailto:contact@bhandarishishir.com.np" 
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        <p className="text-center text-sm text-gray-500 mb-2">
          © {new Date().getFullYear()} Shishir Bhandari. All rights reserved.
        </p>

        <a
          href="https://github.com/itsmeshishir/mainportfolio"
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
