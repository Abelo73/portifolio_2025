import { useState, useEffect, useRef } from "react";

const aboutText = [
  "➜  ~ whoami",
  "Full-Stack Developer",
  "➜  ~ echo 'About Me'",
  "Hello, I'm a passionate Full-Stack Developer! 🚀",
  "I specialize in Java, Spring Boot, React, and Node.js.",
  "I love building scalable and high-performance applications.",
  "I'm always exploring new technologies and problem-solving!",
  "Let's build something amazing together! 💡",
];

const About = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const cursorRef = useRef(null);

  useEffect(() => {
    if (lineIndex < aboutText.length) {
      if (charIndex < aboutText[lineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + aboutText[lineIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 30); // Adjust speed if needed

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedLines((prevLines) => [...prevLines, currentLine]);
          setCurrentLine("");
          setCharIndex(0);
          setLineIndex(lineIndex + 1);
        }, 200);

        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, lineIndex, currentLine]);

  // Blinking Cursor Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="scroll-mt-20 flex flex-col items-center justify-center min-h-screen bg-black text-green-400 px-6 md:px-16 font-mono"
    >
      {/* Terminal Header */}
      <div className="w-full max-w-3xl bg-gray-900 text-white p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <p className="text-sm">zsh - about_me</p>
      </div>

      {/* Terminal Body */}
      <div className="w-full max-w-3xl h-96 bg-gray-800 p-6 rounded-b-lg shadow-lg overflow-hidden">
        {displayedLines.map((line, index) => (
          <p key={index} className="text-white">
            {line.includes("whoami") || line.includes("echo") ? (
              <>
                <span className="text-yellow-400">➜  ~ </span>
                <span className="text-blue-400">{line.replace("➜  ~ ", "")}</span>
              </>
            ) : (
              line
            )}
          </p>
        ))}
        <p className="text-white">
          {currentLine}
          {showCursor && <span ref={cursorRef} className="bg-green-400">&nbsp;</span>}
        </p>
      </div>
    </section>
  );
};

export default About;
