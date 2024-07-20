import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo, ArrowDown, AForward, BMap } from "../assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <nav className=" absolute w-full font-serifMon tracking-wide">
      <div className="w-full">
        <div className="w-full relative flex items-center justify-center bg-cYellow px-3 py-2 cursor-pointer underline-solid-blue hover:text-cblue font-serifMon text-sm tracking-wide font-medium group">
          <span className="inline-flex items-center transition-transform transform group-hover:-translate-x-2 text-center">
            We Have Been Working On Several Initiatives During The Jajarkot-Rukum Earthquake Response 2023. Check Them Out
            <img 
              src={AForward} 
              alt="Arrow" 
              className="h-5 ml-2 opacity-0 transition-opacity transform group-hover:translate-x-2 group-hover:opacity-100" 
            />
          </span>
        </div>
      </div>

      <div className="" >
        <div className="flex justify-evenly items-center mt-2">
          <img src={logo} alt="Logo" className="h-9" />
          
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className=" hover:text-cblue">Services</Link>

            <div className="relative group">
              <button className=" flex items-center">
                Portfolio
                <img 
                  src={ArrowDown} 
                  alt="Arrow Up" 
                  className="w-4 h-4 ml-1 group-hover:scale-y-[-1]"
                />
              </button>
              <div className="absolute w-64 h-30 hidden group-hover:block bg-white shadow-lg shadow-gray-200">
                <Link to="/portfolio/general" className="block px-4 py-2  hover:bg-cYellow">General</Link>
                <Link to="/portfolio/international" className="block px-4 py-2  hover:bg-cYellow">International</Link>
              </div>
            </div>

            

            <div className="relative group">
              <button className=" flex items-center">
                Company
                <img 
                  src={ArrowDown} 
                  alt="Arrow Up" 
                  className="w-4 h-4 ml-2 group-hover:scale-y-[-1]"
                />
              </button>
              <div className="absolute w-64 h-30 hidden group-hover:block bg-white shadow-lg ">
                <Link to="/company/about-us" className="block px-4 py-2  hover:bg-cYellow">About Us</Link>
                <Link to="/company/team" className="block px-4 py-2  hover:bg-cYellow">Team</Link>
                <Link to="/company/work-with-us" className="block px-4 py-2  hover:bg-cYellow">Work with Us</Link>
                <Link to="/company/awards" className="block px-4 py-2  hover:bg-cYellow">Awards & Achievements</Link>
              </div>
            </div>

            <Link to="/GeoAI" className=" hover:text-cblue">GeoAI</Link>

            <div className="relative group">
              <button className=" flex items-center">
                Events & Media
                <img 
                  src={ArrowDown} 
                  alt="Arrow Up" 
                  className="w-4 h-4 ml-2 group-hover:scale-y-[-1]"
                />
              </button>
              <div className="absolute w-64 h-30 hidden group-hover:block bg-white shadow-lg ">
                <Link to="/events-media/events" className="block px-4 py-2  hover:bg-cYellow">Events</Link>
                <Link to="/events-media/media" className="block px-4 py-2  hover:bg-cYellow">Media</Link>
                <Link to="/events-media/publications" className="block px-4 py-2  hover:bg-cYellow">Publications</Link>
              </div>
            </div>

            <Link to="/blogs" className=" hover:text-cblue">Blogs</Link>
          </div>
          <div>
         
          <div className="w-full relative flex items-center justify-center bg-cYellow px-6 py-3 cursor-pointer  hover:text-cblue font-serifMon text-sm tracking-wide font-medium group">
            <Link to="/contact" className=" inline-flex items-center transition-transform transform group-hover:-translate-x-2 text-right ">Let's Talk</Link>
            <img 
                src={AForward} 
                alt="Arrow" 
                className="h-5 ml-2 opacity-0 transition-opacity transform group-hover:translate-x-2 group-hover:opacity-100" 
              />
          </div>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className=" focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      

      {isOpen && (
        <div className="md:hidden bg-cYellow shadow-lg mt-2">
          <Link to="/services" className="block px-4 py-2 ">Services</Link>
          <div className="relative group">
            <button 
              className="block px-4 py-2  w-full text-left  items-center"
              onClick={() => toggleSubMenu('portfolio')}
            >
              Portfolio
              <svg 
                className="w-4 h-4 ml-2 inline-block transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeMenu === 'portfolio' && (
              <div className="bg-cYellow">
                <Link to="/portfolio/general" className="block px-4 py-2 ">General</Link>
                <Link to="/portfolio/international" className="block px-4 py-2 ">International</Link>
              </div>
            )}
          </div>
          <div className="relative group">
            <button 
              className="block px-4 py-2  w-full text-left items-center"
              onClick={() => toggleSubMenu('company')}
            >
              Company
              <svg 
                className="w-4 h-4 ml-2 inline-block transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeMenu === 'company' && (
              <div className="bg-cYellow">
                <Link to="/company/about-us" className="block px-4 py-2 ">About Us</Link>
                <Link to="/company/team" className="block px-4 py-2 ">Team</Link>
                <Link to="/company/work-with-us" className="block px-4 py-2 ">Work with Us</Link>
                <Link to="/company/awards" className="block px-4 py-2 ">Awards</Link>
              </div>
            )}
          </div>
          <div className="relative group">
            <button 
              className="block px-4 py-2  w-full text-left items-center"
              onClick={() => toggleSubMenu('events-media')}
            >
              Events & Media
              <svg 
                className="w-4 h-4 ml-2 inline-block transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeMenu === 'events-media' && (
              <div className="bg-cYellow">
                <Link to="/events-media/events" className="block px-4 py-2 ">Events</Link>
                <Link to="/events-media/media" className="block px-4 py-2 ">Media</Link>
                <Link to="/events-media/publications" className="block px-4 py-2 ">Publications</Link>
              </div>
            )}
          </div>
          <Link to="/blogs" className="block px-4 py-2 ">Blogs</Link>
          
        </div>

      )}
      </div>
    </nav>
  );
};

export default Navbar;
