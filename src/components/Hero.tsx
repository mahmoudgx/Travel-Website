import { FaPlane } from "react-icons/fa";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen hero-container"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white hero-content">
        <div className="mb-4">
          <FaPlane size={40} />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Travel without limits
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Create lifetime memories in unforgettable locations around the world
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full"
        >
          <a href="#Destinations"> Choose your Destinations</a>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
