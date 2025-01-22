import lightme from "../../assets/images/lightme.jpg";
import darkme from "../../assets/images/darkme.jpg";
import linkdin from "../../assets/images/linkdin.png";
import git from "../../assets/images/git.png";
import ins from "../../assets/images/ins.png";

import { useEffect, useState } from "react";

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-white text-gray-800 p-4 sm:p-6 md:p-10 lg:p-12 xl:p-16 dark:bg-black dark:text-white">
      <div className="flex flex-col md:w-1/2 p-4 animate__animated animate__fadeInLeft relative group">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
          <AnimatedText />
        </h2>
        <div className="overflow-hidden items-center">
          <img
            src={lightme}
            alt="Animated"
            className="block dark:hidden w-52 sm:w-60 md:w-72 lg:w-80 h-52 sm:h-60 md:h-72 lg:h-80 transition-transform duration-300 transform group-hover:translate-y-[-20px] group-hover:scale-105 group-hover:animate-oo"
          />
          <img
            src={darkme}
            alt="Animated"
            className="hidden dark:block w-52 sm:w-60 md:w-72 lg:w-80 h-52 sm:h-60 md:h-72 lg:h-80 transition-transform duration-300 transform group-hover:translate-y-[-20px] group-hover:scale-105 group-hover:animate-oo"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href="https://www.linkedin.com/in/abdelah-nesredin-a6058b318/"
            className="mx-2"
          >
            <img
              src={linkdin}
              alt="LinkedIn"
              className="w-5 sm:w-6 h-5 sm:h-6 inline"
            />
          </a>
          <a href="https://github.com/Abdunesr/" className="mx-2">
            <img
              src={git}
              alt="GitHub"
              className="w-5 sm:w-6 h-5 sm:h-6 inline"
            />
          </a>
          <a href="https://www.instagram.com/abd_nesr7/" className="mx-2">
            <img
              src={ins}
              alt="Medium"
              className="w-5 sm:w-6 h-5 sm:h-6 inline"
            />
          </a>
        </div>
      </div>

      <div className="hidden md:block w-1 bg-gradient-to-b from-slate-400 to-slate-600 mx-4 h-full animate-pulse"></div>

      <div className="text-center md:text-left md:w-1/2 p-4">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Hello, I'm Abdelah Nesredin
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl text-center md:text-left mb-8 animate__animated animate__fadeIn"
          style={{ fontFamily: "Dancing Script, cursive" }}
        >
          I’m Abdelah Nesredin, a software engineer specializing in mobile app
          and full-stack web development. I create innovative solutions that
          enhance user experiences and drive engagement. With a strong
          foundation in various programming languages.
        </p>

        <a
          href="#contact"
          className="relative inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-slate-600 text-white font-semibold rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group"
        >
          <span className="absolute inset-0 bg-black transform scale-0 transition-transform duration-500 group-hover:scale-110"></span>
          <span className="relative z-10">Let's Talk 🗣️</span>
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
        </a>
      </div>
    </div>
  );
}

function AnimatedText() {
  const messages = [
    "I am a Software Engineer",
    "Mobile App (Flutter) Developer",
    "MERN Developer",
    "Full Stack developer ",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Hide text before changing
      setTimeout(() => {
        setCurrentMessageIndex(
          (prevIndex) => (prevIndex + 1) % messages.length
        );
        setIsVisible(true); // Show new text
      }, 500); // Wait for the fade-out to complete
    }, 3500); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <h2
        className="ml-0 text-base sm:text-lg"
        style={{ fontFamily: "Dancing Script, cursive" }}
      >
        Hi' there 👋🏿 *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </h2>
      <p
        className={`text-base sm:text-lg md:text-xl text-gray-600 transition-all duration-700 ease-in-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
        style={{ fontFamily: "Dancing Script, cursive" }}
      >
        {messages[currentMessageIndex]}
      </p>
    </div>
  );
}

export default Home;
