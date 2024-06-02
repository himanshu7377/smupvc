import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../asset/logo.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="bg-gray-800 mb-3 p-2">
      <div className="max-w-7xl flex items-center justify-between flex-wrap">
        <div className="flex items-center text-white pl-2">
          <img
            src={logo}
            alt="logo"
            className="h-[90px] w-auto sm:h-[80px] md:h-[100px] lg:h-[120px] mr-2"
          />
          <span className="hidden sm:block font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-tight">
            S.M Upvc Glass and Decor
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMobile(!isMobile)}
            className="flex items-center px-3 py-2 text-white"
          >
            {isMobile ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ml-auto ${
            isMobile ? 'block' : 'hidden'
          }`}
        >
          <div className="text-lg md:text-xl lg:flex lg:justify-end space-x-4 mr-[-150px]">
            <a
              href="#home"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 "
            >
              Home
            </a>
            <a
              href="#services"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
            >
              Services
            </a>
            <a
              href="#about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
