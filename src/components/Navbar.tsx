import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 p-10">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#">
          <div className="text-3xl text-white font-bold">Travel</div>
        </a>

        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-10 text-xl text-white">
            <a href="#Destinations">
              <li className="hover:text-gray-300 cursor-pointer">
                Destinations
              </li>
            </a>
            <a href="#TravelPackages">
              <li className="hover:text-gray-300 cursor-pointer">
                Travel Packages
              </li>
            </a>
            <a href="#Reviews">
              <li className="hover:text-gray-300 cursor-pointer">Reviews</li>
            </a>
            <a href="#FAQ">
              <li className="hover:text-gray-300 cursor-pointer">FAQ</li>
            </a>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 mt-4 text-xl text-white">
            <a href="#Destinations">
              <li className="hover:text-gray-300 cursor-pointer">
                Destinations
              </li>
            </a>
            <a href="#TravelPackages">
              <li className="hover:text-gray-300 cursor-pointer">
                Travel Packages
              </li>
            </a>
            <a href="#Reviews">
              <li className="hover:text-gray-300 cursor-pointer">Reviews</li>
            </a>
            <a href="#FAQ">
              <li className="hover:text-gray-300 cursor-pointer">FAQ</li>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
