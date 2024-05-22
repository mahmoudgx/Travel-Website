import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 p-5 md:p-10 ">
      <div className="container mx-auto flex items-center justify-between ">
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
      <motion.div
        className={`md:hidden flex flex-col items-center space-y-4 mt-4 text-xl text-white`}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col items-center space-y-4 w-full">
          <motion.li
            className="w-full"
            initial={false}
            animate={{ y: isOpen ? 0 : 20, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="#Destinations"
              className="block w-full text-center py-2 hover:text-gray-300"
              onClick={toggleMenu}
            >
              Destinations
            </a>
          </motion.li>
          <motion.li
            className="w-full"
            initial={false}
            animate={{ y: isOpen ? 0 : 20, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="#TravelPackages"
              className="block w-full text-center py-2 hover:text-gray-300"
              onClick={toggleMenu}
            >
              Travel Packages
            </a>
          </motion.li>
          <motion.li
            className="w-full"
            initial={false}
            animate={{ y: isOpen ? 0 : 20, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="#Reviews"
              className="block w-full text-center py-2 hover:text-gray-300"
              onClick={toggleMenu}
            >
              Reviews
            </a>
          </motion.li>
          <motion.li
            className="w-full"
            initial={false}
            animate={{ y: isOpen ? 0 : 20, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="#FAQ"
              className="block w-full text-center py-2 hover:text-gray-300"
              onClick={toggleMenu}
            >
              FAQ
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default NavBar;
