import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      className="bg-gray-900 text-white fixed w-full z-50 shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Abel Adisu</h1>

        <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <ul className={`md:flex gap-6 hidden`}>
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <ul className={`absolute top-16 left-0 w-full bg-gray-900 text-center p-4 md:hidden ${isOpen ? "block" : "hidden"}`}>
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="py-2">
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
