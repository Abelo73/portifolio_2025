import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Junior Back-End Developer",
    company: "Act (Atlass Software Company)",
    duration: "2023 - Present",
    description:
      "Developing and maintaining USSD mobile banking solutions using Java Spring Boot and microservices.",
  },
  {
    title: "Quality Assurance (QA)",
    company: "Freelance",
    duration: "2022 - 2023",
    description:
      "Conducted software testing, reported bugs, and ensured system reliability.",
  },
  {
    title: "Internship - Quality Improvement",
    company: "Water Factory",
    duration: "2022 (4 months)",
    description:
      "Worked on quality control and process improvement for water purification.",
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Experience
        </motion.h2>

        <div className="relative border-l-4 border-blue-500 pl-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div className="absolute left-[-24px] top-0">
                <FaBriefcase className="text-blue-500 text-xl bg-gray-800 p-2 rounded-full" />
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg backdrop-blur-lg border border-gray-700">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-blue-400">{exp.company} | {exp.duration}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
