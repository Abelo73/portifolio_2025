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

const Timeline2 = () => {
  return (
    <section className="py-16 bg-[#0d0d0d] text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🚀 My Career Path
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center justify-between mb-10 
                ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} 
                flex-col md:flex-row`} // Responsive: One line on small screens
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Experience Card */}
              <div className="w-full md:w-1/2 p-6 bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition transform">
                <h3 className="text-lg font-semibold text-blue-400">{exp.year}</h3>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <FaBriefcase className="text-cyan-400" /> {exp.title}
                </h2>
                <p className="text-gray-300">{exp.company}</p>
                <p className="text-gray-500 mt-2">{exp.description}</p>
              </div>

              {/* Timeline Dot */}
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-xl">
                <div className="w-5 h-5 bg-white rounded-full animate-ping absolute"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline2;
