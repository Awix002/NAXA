import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo, ArrowUp } from "../assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubMenu = (menuName) => setActiveMenu(activeMenu === menuName ? null : menuName);

  const renderMenuItem = (label, links, menuName) => (
    <div className="relative group">
      <button 
        className="flex items-center text-gray-800 hover:text-gray-600" 
        onClick={() => toggleSubMenu(menuName)}
      >
        {label}
        <img 
          src={ArrowUp} 
          alt="Arrow Up" 
          className={`w-4 h-4 ml-2 transition-transform ${activeMenu === menuName ? 'transform rotate-180' : ''}`}
        />
      </button>
      {activeMenu === menuName && (
        <div className="absolute left-0 mt-2 bg-white shadow-lg">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="text-center bg-yellow-500 p-2 text-white">
        We Have Been Working On Several Initiatives During The Jajarkot-Rukum Earthquake Response 2023. Check Them Out
      </div>

      <div className="max-w-7xl mx-auto px-2 py-4 flex justify-between items-center">
        <Link to="/services" className="flex items-center">
          <img src={logo} alt="Logo" className="h-9" />
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/services" className="text-gray-800 hover:text-gray-600">Services</Link>
          {renderMenuItem('Portfolio', [
            { to: '/portfolio/general', label: 'General' },
            { to: '/portfolio/international', label: 'International' }
          ], 'portfolio')}
          {renderMenuItem('Company', [
            { to: '/company/about-us', label: 'About Us' },
            { to: '/company/team', label: 'Team' },
            { to: '/company/work-with-us', label: 'Work with Us' },
            { to: '/company/awards', label: 'Awards' }
          ], 'company')}
          {renderMenuItem('Events & Media', [
            { to: '/events-media/events', label: 'Events' },
            { to: '/events-media/media', label: 'Media' },
            { to: '/events-media/publications', label: 'Publications' }
          ], 'events-media')}
          <Link to="/blogs" className="text-gray-800 hover:text-gray-600">Blogs</Link>
          <Link to="/contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Let's Talk</Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden text-gray-800 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link to="/services" className="block px-4 py-2 text-gray-800">Services</Link>
          {renderMenuItem('Portfolio', [
            { to: '/portfolio/general', label: 'General' },
            { to: '/portfolio/international', label: 'International' }
          ], 'portfolio')}
          {renderMenuItem('Company', [
            { to: '/company/about-us', label: 'About Us' },
            { to: '/company/team', label: 'Team' },
            { to: '/company/work-with-us', label: 'Work with Us' },
            { to: '/company/awards', label: 'Awards' }
          ], 'company')}
          {renderMenuItem('Events & Media', [
            { to: '/events-media/events', label: 'Events' },
            { to: '/events-media/media', label: 'Media' },
            { to: '/events-media/publications', label: 'Publications' }
          ], 'events-media')}
          <Link to="/blogs" className="block px-4 py-2 text-gray-800">Blogs</Link>
          <Link to="/contact" className="block px-4 py-2 bg-blue-500 text-white">Let's Talk</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
