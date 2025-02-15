import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projectsData = [
  {
    category: "Web",
    projects: [
      {
        title: "Portfolio Website",
        description: "A sleek portfolio built with React & Tailwind CSS.",
        image: "/projects/portfolio.png",
        github: "https://github.com/yourusername/portfolio",
        demo: "https://yourportfolio.com",
        stack: ["React", "Tailwind", "Framer Motion"],
      },
      {
        title: "E-commerce Store",
        description: "An online store with Stripe payment integration.",
        image: "/projects/ecommerce.png",
        github: "https://github.com/yourusername/ecommerce",
        demo: "https://myecommerce.com",
        stack: ["Next.js", "Node.js", "MongoDB"],
      },
      {
        title: "Blog CMS",
        description: "A full-stack CMS for blogging with an admin panel.",
        image: "/projects/blogcms.png",
        github: "https://github.com/yourusername/blogcms",
        demo: "https://myblogcms.com",
        stack: ["Vue.js", "Firebase", "Express"],
      },
    ],
  },
  {
    category: "AI",
    projects: [
      {
        title: "AI Chatbot",
        description: "A smart chatbot powered by GPT and Rasa.",
        image: "/projects/chatbot.png",
        github: "https://github.com/yourusername/chatbot",
        demo: "https://chatbotdemo.com",
        stack: ["Python", "GPT-4", "Rasa"],
      },
      {
        title: "Image Classifier",
        description: "AI-powered image classification with TensorFlow.",
        image: "/projects/imageclassifier.png",
        github: "https://github.com/yourusername/image-classifier",
        demo: "https://imageclassifierdemo.com",
        stack: ["TensorFlow", "Python", "Flask"],
      },
      {
        title: "Voice Assistant",
        description: "A virtual assistant with speech recognition.",
        image: "/projects/voiceassistant.png",
        github: "https://github.com/yourusername/voice-assistant",
        demo: "https://voiceassistant.com",
        stack: ["Python", "SpeechRecognition", "NLP"],
      },
    ],
  },
];

const tabs = ["Web", "AI"];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Web");

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6">
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        🚀 My Projects
      </h2>

      {/* Tabs */}
      <div className="flex space-x-6 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-lg text-lg font-semibold transition-all ${
              activeTab === tab ? "bg-green-500 text-black shadow-lg" : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projectsData
          .find((category) => category.category === activeTab)
          ?.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group bg-opacity-10 bg-white rounded-2xl p-6 shadow-2xl backdrop-blur-lg transition-all hover:shadow-green-400"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
              <div className="mt-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex gap-2 mt-3">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="bg-gray-800 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" className="text-white text-xl hover:text-gray-300">
                    <FaGithub />
                  </a>
                  <a href={project.demo} target="_blank" className="text-green-400 text-xl hover:text-green-300">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default Projects;
