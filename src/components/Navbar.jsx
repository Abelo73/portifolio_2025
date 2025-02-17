import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Contact",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
      setActiveSection(id); // Update active section
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "Home";
      navItems.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const sectionTop = section.offsetTop - 120; // Adjust based on navbar height
          if (window.scrollY >= sectionTop) {
            currentSection = item;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="text-white bg-white/10 backdrop-blur-md shadow-lg fixed w-full z-50"
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
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeSection === item
                    ? "bg-blue-500 text-white border-b-2 border-blue-700"
                    : "hover:text-blue-500"
                }`}
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

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-900 text-center p-4 md:hidden">
            {navItems.map((item) => (
              <li key={item} className="py-2">
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`block px-4 py-2 rounded-md transition-all ${
                    activeSection === item
                      ? "bg-blue-500 text-white border-l-4 border-blue-700"
                      : "hover:text-blue-500"
                  }`}
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
