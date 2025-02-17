import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Software Engineer",
    text: "An outstanding developer! Their attention to detail and problem-solving skills are remarkable.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Carter",
    role: "Tech Lead",
    text: "This developer brings innovative ideas to the table, making every project a success!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Williams",
    role: "UI/UX Designer",
    text: "A creative mind with a knack for sleek and functional designs. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="flex flex-col items-center justify-center py-12 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        What People Say
      </h2>

      <div className="relative w-full max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg text-center relative"
          >
            <FaQuoteLeft className="text-3xl text-purple-500 absolute top-4 left-4" />

            <p className="text-lg text-gray-300 italic">{testimonials[index].text}</p>

            <motion.img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-16 h-16 rounded-full mx-auto mt-6 border-4 border-purple-500"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />

            <h3 className="mt-4 text-xl font-semibold">{testimonials[index].name}</h3>
            <p className="text-sm text-gray-400">{testimonials[index].role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          className="p-3 bg-gray-700 rounded-full hover:bg-gray-600"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
          className="p-3 bg-gray-700 rounded-full hover:bg-gray-600"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
