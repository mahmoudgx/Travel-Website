import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between p-4 sm:p-8 bg-blue-900 items-center text-center sm:text-left">
      <div>
        <h1 className="text-white text-md sm:text-md">
          © 2024 Travel. All Rights Reserved
        </h1>
      </div>
      <div className="flex space-x-2 sm:space-x-3 mt-4 sm:mt-0">
        <FaInstagram size={20} className="text-white" />
        <FaFacebook size={20} className="text-white" />
        <FaTwitter size={20} className="text-white" />
      </div>
    </div>
  );
};

export default Footer;
