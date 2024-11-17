import React from 'react';
import { FaGithub } from 'react-icons/fa';

function ContactSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 bg-transparent" id="contact">
      <h3 className="text-green-400 text-lg font-semibold mb-2">04. What's Next?</h3>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h1>
      <p className="text-gray-600 max-w-md mb-8">
        Although I'm always open for any new opportunities, my inbox is open.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a
        href="mailto:contact@bhandarishishir.com.np"
        className="inline-flex items-center justify-center px-6 py-3 border border-green-400 text-green-400 font-semibold rounded hover:bg-green-400 hover:text-white transition duration-300"
      >
        Say Hello
      </a>

      <footer className="mt-16 text-gray-600 text-sm">
        <p>Built by Shishir Bhandari</p>
        <a
          href="https://github.com/itsmeshishir"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center mt-2 text-gray-600 hover:text-gray-800"
        >
          <FaGithub className="mr-1" /> Source code - GitHub
        </a>
      </footer>
    </div>
  );
}

export default ContactSection;
