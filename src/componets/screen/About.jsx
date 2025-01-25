import React from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon

const AboutMe = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center min-h-screen dark:bg-black dark:text-white text-white"
    >
      <div className="max-w-4xl p-8 bg-white text-black rounded-lg  transform transition-all dark:bg-black dark:text-white">
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
        <div className="mt-8 flex items-center space-x-4">
          <p className="text-lg font-semibold mb-4">
            Let's connect and create something amazing together!
          </p>
          <a
            href="https://www.linkedin.com/in/abdelah-nesredin-a6058b318/" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-600 hover:text-blue-800 transition-all"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
        <div className="mt-6 text-center">
          <a
            href="assets/cv/myprocv.pdf" // Correct path for public folder
            download
            className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-black  to-slate-600 dark:bg-gradient-to-r  dark:from-white  dark:to-slate-200 dark:text-black text-white rounded-lg shadow-lg hover:shadow-xl hover:from-slate-500 hover:to-slate-600 transition-all dark:bg-gray-800  dark:hover:bg-gray-700"
          >
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
