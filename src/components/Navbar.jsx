import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    console.log("Scrolling to:", id); // Debugging

    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
      setIsOpen(false); // Close mobile menu after clicking
    } else {
      console.error("Section not found:", id);
    }
  };

  return (
    <motion.nav
      className="bg-gray-900 text-white fixed w-full z-50 shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Abel Adisu</h1>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-500"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  scrollToSection(item.toLowerCase());
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-900 text-center p-4 md:hidden">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item} className="py-2">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-500"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
