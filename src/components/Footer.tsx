import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between p-5 md:p-10 sm:p-8 bg-blue-900 items-center text-center sm:text-left">
      <div>
        <h1 className="text-white text-lg sm:text-md">
          © 2024 Travel. All Rights Reserved
        </h1>
      </div>
      <div className="flex space-x-2 sm:space-x-3 mt-4 sm:mt-0">
        <FaInstagram
          href="#"
          size={25}
          className="text-white hover:text-gray-300 cursor-pointer"
        />
        <FaFacebook
          href="#"
          size={25}
          className="text-white hover:text-gray-300 cursor-pointer"
        />
        <FaTwitter
          size={25}
          className="text-white hover:text-gray-300 cursor-pointer"
          href="#"
        />
      </div>
    </div>
  );
};

export default Footer;
