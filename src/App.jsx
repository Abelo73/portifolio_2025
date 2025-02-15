import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience ";
import Timeline from "./components/Timeline";
import Timeline2 from "./components/Timeline2";

const fadeInVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation should happen multiple times
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* Full-screen sections with animations */}
      <motion.div
        className="h-screen flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <Hero />
      </motion.div>

      <motion.div
        className="h-screen flex items-center justify-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <About />
      </motion.div>

      <motion.div
        className="h-screen flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <Skills />
      </motion.div>

      {/* <motion.div
        className="h-screen flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <Experience />
      </motion.div> */}
      {/* <motion.div
        className="h-screen flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <Timeline />
      </motion.div> */}

      <motion.div
        className="h-screen flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <Timeline2 />
      </motion.div>



      <motion.div
        className="h-screen flex items-center justify-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <Projects />
      </motion.div>

      <motion.div
        className="h-screen flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <Testimonial />
      </motion.div>

      <motion.div
        className="h-screen flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <Contact />
      </motion.div>

      <Footer />
    </>
  );
};

export default App;
