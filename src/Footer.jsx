import React from 'react';
// Import social media icons from a library like 'react-icons'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-white text-2xl font-bold">
              {/* Logo or brand name goes here */}
              Cropmind
            </a>
            <p className="mt-2">
              123 Tobias Street, City, Germany
              <br />
              Email: tobias@cropmind.ai
              <br />
              Phone: Tobias
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3">
            <div>
              <h2 className="text-xl font-bold mb-2">Cropmind</h2>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Contact</a></li>
                {/* More company links */}
              </ul>
            </div>
            
            {/* More columns for other categories */}
          </div>
        </div>
        <div className="text-center text-gray-500 mt-10 md:mt-20">
          © {new Date().getFullYear()} Cropmind. All rights reserved.
        </div>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-gray-400 hover:text-gray-200 mr-4">
            <FaFacebook size="24" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200">
            <FaLinkedin size="24" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
