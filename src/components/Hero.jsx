import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import {
  SiSpring,
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import Typewriter from "typewriter-effect";

const techIcons = [
  { icon: <FaReact className="text-[#61DBFB]" />, size: 50 },
  { icon: <FaJava className="text-[#007396]" />, size: 50 },
  { icon: <FaNodeJs className="text-[#68A063]" />, size: 50 },
  { icon: <FaDocker className="text-[#0db7ed]" />, size: 50 },
  { icon: <FaDatabase className="text-[#FFD700]" />, size: 50 },
  { icon: <SiSpring className="text-[#6DB33F]" />, size: 50 },
  { icon: <SiTailwindcss className="text-[#38BDF8]" />, size: 50 },
  { icon: <SiMongodb className="text-[#4DB33D]" />, size: 50 },
  { icon: <SiJavascript className="text-[#F7DF1E]" />, size: 50 },
  { icon: <SiTypescript className="text-[#3178C6]" />, size: 50 },
];

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-black text-white overflow-hidden">
      {/* Blurred Code Terminal Background */}
      <div className="absolute inset-0 flex justify-center items-center opacity-20 blur-xl">
        <div className="w-[90%] max-w-4xl bg-gray-900/80 p-6 rounded-lg border border-gray-700 shadow-lg">
          <pre className="text-green-400 text-xs md:text-sm">
            <Typewriter
              options={{
                strings: [
                  "const fetchData = async () => {",
                  "  const response = await fetch('/api/data');",
                  "  const data = await response.json();",
                  "  console.log(data);",
                  "};",
                  "fetchData();",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 20,
              }}
            />
          </pre>
        </div>
      </div>

      {/* Rotating Tech Icons */}
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div
          className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {techIcons.map((item, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{ scale: 0.8 }}
              animate={{ scale: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              style={{
                left: `${
                  50 + 40 * Math.cos((index * 2 * Math.PI) / techIcons.length)
                }%`,
                top: `${
                  50 + 40 * Math.sin((index * 2 * Math.PI) / techIcons.length)
                }%`,
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative text-center px-6">
        <motion.h1
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hi, I'm a Full-Stack Developer
        </motion.h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300">
          Specialized in Java, Spring Boot, React, Tailwind CSS, Node.js, and
          more.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg text-lg font-semibold transition-transform duration-300"
          aria-label="Explore My Work"
        >
          Explore My Work
        </motion.button>
      </div>

      {/* Terminal Section with Typewriter Effect */}
      <div className="absolute bottom-10 w-[90%] max-w-3xl bg-gray-900/90 border border-gray-700 rounded-lg p-4 shadow-lg backdrop-blur-md">
        <p className="text-white text-sm mb-2">❯ Terminal:</p>
        <div className="bg-black/80 p-3 rounded-md text-green-400 font-mono text-xs md:text-sm">
          <Typewriter
            options={{
              strings: [
                "npm install react-icons",
                "npm install framer-motion",
                "npm install tailwindcss",
                "npm run dev",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 20,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
