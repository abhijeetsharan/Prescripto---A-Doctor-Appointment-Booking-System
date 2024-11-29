import React, { useState, useEffect, useRef } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown toggle state
  const [token, setToken] = useState(true);
  const dropdownRef = useRef(null); // Reference to the dropdown menu

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Desktop Navbar */}
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <img
          onClick={() => navigate('/')}
          className="w-32 cursor-pointer"
          src={assets.logo}
          alt="Logo"
        />

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className="text-gray-600 hover:text-indigo-600 font-medium"
          >
            Home
          </NavLink>
          {token && (
            <NavLink
              to="/dashboard"
              className="text-gray-600 hover:text-indigo-600 font-medium"
            >
              Dashboard
            </NavLink>
          )}
          <NavLink
            to="/doctors"
            className="text-gray-600 hover:text-indigo-600 font-medium"
          >
            Doctors
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-600 hover:text-indigo-600 font-medium"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-600 hover:text-indigo-600 font-medium"
          >
            Contact
          </NavLink>
        </nav>

        {/* Profile and Mobile Menu */}
        <div className="flex items-center gap-6 relative">
          {token ? (
            <div ref={dropdownRef} className="relative">
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                src={assets.profile_pic}
                alt="Profile"
                onClick={() => setShowDropdown((prev) => !prev)} // Toggle dropdown
              />
              {showDropdown && (
                <div className="absolute top-12 right-0 w-48 bg-white shadow-md rounded-md flex flex-col gap-3 py-3 px-4">
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      navigate('/my-profile');
                    }}
                    className="text-gray-600 hover:text-indigo-600 text-sm"
                  >
                    My Profile
                  </button>
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      navigate('/my-appointments');
                    }}
                    className="text-gray-600 hover:text-indigo-600 text-sm"
                  >
                    My Appointments
                  </button>
                  <button
                    onClick={() => {
                      setToken(false);
                      setShowDropdown(false);
                      navigate('/');
                    }}
                    className="text-gray-600 hover:text-red-600 text-sm"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="hidden md:inline-block bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition duration-200"
            >
              Create Account
            </button>
          )}

          {/* Hamburger Menu Icon for Mobile */}
          <img
            onClick={() => setShowMenu(!showMenu)}
            className="w-6 md:hidden cursor-pointer"
            src={assets.menu_icon}
            alt="Menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/"
              className="text-gray-600 hover:text-indigo-600 font-medium"
            >
              Home
            </NavLink>
            {token && (
              <NavLink
                onClick={() => setShowMenu(false)}
                to="/dashboard"
                className="text-gray-600 hover:text-indigo-600 font-medium"
              >
                Dashboard
              </NavLink>
            )}
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/doctors"
              className="text-gray-600 hover:text-indigo-600 font-medium"
            >
              All Doctors
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/about"
              className="text-gray-600 hover:text-indigo-600 font-medium"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/contact"
              className="text-gray-600 hover:text-indigo-600 font-medium"
            >
              Contact
            </NavLink>
            {token && (
              <button
                onClick={() => {
                  setToken(false);
                  setShowMenu(false);
                  navigate('/');
                }}
                className="text-gray-600 hover:text-red-600 font-medium"
              >
                Logout
              </button>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
