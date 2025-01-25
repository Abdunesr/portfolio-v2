import React from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon

const AboutMe = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center min-h-screen dark:bg-black dark:text-white  text-white"
    >
      <div className="max-w-4xl p-8 bg-white text-black rounded-lg shadow-lg transform transition-all dark:bg-black dark:text-white">
        <h1 className="text-5xl font-bold text-center mb-6">About Me</h1>
        <p className="text-lg mb-4 leading-relaxed">
          Hello! I'm a passionate web developer dedicated to creating beautiful
          and functional user experiences. My journey in web development began
          with a fascination for how websites are constructed, and over the
          years, I've developed a deep understanding of both front-end and
          back-end technologies.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          I thrive on challenges and enjoy solving problems creatively. My goal
          is to build responsive and interactive web applications that delight
          users and meet their needs.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          When I'm not immersed in code, you can find me exploring new
          technologies, reading insightful articles, or working on personal
          projects that fuel my curiosity.
        </p>
        <div className="mt-8 flex ml-2">
          <p className="text-lg font-semibold mb-4">
            Let's connect and create something amazing together!{" "}
          </p>
          <a
            href="https://www.linkedin.com/in/abdelah-nesredin-a6058b318/" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-600 hover:text-blue-800 transition-all"
          >
            <FaLinkedin size={28} /> {/* LinkedIn icon with size 40px */}
          </a>
          {/* LinkedIn Icon */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
