import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    year: "2023 - Present",
    title: "Junior Back-End Developer",
    company: "Act (Atlass Software Company)",
    description: "Developing and maintaining USSD mobile banking solutions using Java Spring Boot and microservices.",
  },
  {
    year: "2022 - 2023",
    title: "Quality Assurance (QA)",
    company: "Freelance",
    description: "Conducted software testing, reported bugs, and ensured system reliability.",
  },
  {
    year: "2022 (4 months)",
    title: "Internship - Quality Improvement",
    company: "Water Factory",
    description: "Worked on quality control and process improvement for water purification.",
  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Journey
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative flex overflow-x-auto scrollbar-hide py-10 px-4">
          <motion.div 
            className="flex space-x-8"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative min-w-[300px] md:min-w-[350px] bg-gray-800 p-6 rounded-lg shadow-lg backdrop-blur-md border border-gray-700"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute -top-4 left-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-full shadow-md">
                  {exp.year}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <FaBriefcase className="text-blue-400 text-xl" />
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                </div>
                <p className="text-blue-300">{exp.company}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
