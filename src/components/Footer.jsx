import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://web.facebook.com/Abelo732/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-500 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/Abelo373"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-400 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/Abelo73/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-600 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Footer Links */}
        <ul className="flex justify-center space-x-6 mb-4 text-sm">
          <li>
            <a href="#" className="hover:text-white transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Copyright Section */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Abel Adisu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
