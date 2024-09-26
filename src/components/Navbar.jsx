import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaFileAlt, FaProjectDiagram, FaUserFriends, FaRobot } from 'react-icons/fa'; // Example icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-10">
      <div className="container mx-auto flex items-center justify-between h-14 px-4 lg:px-6">
        <div className="text-xl font-bold">Ensπre-path</div>
        {/* Hamburger Icon */}
        <button className="lg:hidden text-2xl" onClick={toggleMenu}>
          <FaBars />
        </button>
        {/* Large screen nav */}
        <nav className="hidden lg:flex gap-4">
          <Link className="hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/tests">Tests</Link>
          <Link className="hover:underline" to="/pathways">Pathways</Link>
          <Link className="hover:underline" to="/chat">Buddy</Link>
          <Link className="hover:underline" to="/mentor">Mentorship</Link>
          <Link className="hover:underline" to="/dashboard">
            <img
              src="https://avatar.iran.liara.run/public"
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="lg:hidden bg-gray-900 text-white flex flex-col items-start px-4 py-2 space-y-2">
          {/* Profile section on top */}
          <Link className="hover:underline flex items-center gap-2" to="/dashboard" onClick={toggleMenu}>
            <img
              src="https://avatar.iran.liara.run/public"
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
            <span>Profile</span>
          </Link>
          {/* Icons with section names */}
          <Link className="hover:underline flex items-center gap-2" to="/" onClick={toggleMenu}>
            <FaHome /> <span>Home</span>
          </Link>
          <Link className="hover:underline flex items-center gap-2" to="/tests" onClick={toggleMenu}>
            <FaFileAlt /> <span>Tests</span>
          </Link>
          <Link className="hover:underline flex items-center gap-2" to="/pathways" onClick={toggleMenu}>
            <FaProjectDiagram /> <span>Pathways</span>
          </Link>
          <Link className="hover:underline flex items-center gap-2" to="/chat" onClick={toggleMenu}>
            <FaRobot /> <span>Buddy</span>
          </Link>
          <Link className="hover:underline flex items-center gap-2" to="/mentor" onClick={toggleMenu}>
            <FaUserFriends /> <span>Mentorship</span>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
