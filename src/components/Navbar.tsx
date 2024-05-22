import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 p-5 md:p-10">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-3xl text-white font-bold">
          Travel
        </a>
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-10 text-xl text-white">
            <li>
              <a href="#Destinations" className="hover:text-gray-300">
                Destinations
              </a>
            </li>
            <li>
              <a href="#TravelPackages" className="hover:text-gray-300">
                Travel Packages
              </a>
            </li>
            <li>
              <a href="#Reviews" className="hover:text-gray-300">
                Reviews
              </a>
            </li>
            <li>
              <a href="#FAQ" className="hover:text-gray-300">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden flex flex-col items-center space-y-4 mt-4 text-xl text-white transition-all duration-300 ${
          isOpen
            ? "max-h-full opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {isOpen && (
          <ul className="flex flex-col items-center space-y-4 w-full">
            <li className="w-full">
              <a
                href="#Destinations"
                className="block w-full text-center py-2 hover:text-gray-300"
                onClick={toggleMenu}
              >
                Destinations
              </a>
            </li>
            <li className="w-full">
              <a
                href="#TravelPackages"
                className="block w-full text-center py-2 hover:text-gray-300"
                onClick={toggleMenu}
              >
                Travel Packages
              </a>
            </li>
            <li className="w-full">
              <a
                href="#Reviews"
                className="block w-full text-center py-2 hover:text-gray-300"
                onClick={toggleMenu}
              >
                Reviews
              </a>
            </li>
            <li className="w-full">
              <a
                href="#FAQ"
                className="block w-full text-center py-2 hover:text-gray-300"
                onClick={toggleMenu}
              >
                FAQ
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
