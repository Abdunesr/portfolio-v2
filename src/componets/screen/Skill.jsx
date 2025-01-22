import pointerman from "../../assets/images/pointerman.gif";
import pointerman2 from "../../assets/images/pointer2.png";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Ensure you have framer-motion installed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFlutter,
  faJsSquare, // JavaScript
  faJava, // Java
  faNodeJs, // Node.js
  faHtml5, // HTML
  faCss3Alt, // CSS
  faGitAlt, // Git
  faPhp, // PHP
  faReact,
  faDartLang,
  faFigma, // Figma
} from "@fortawesome/free-brands-svg-icons";

function TailwindImg() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
    </svg>
  );
}
function Bootstrap() {
  return (
    <svg viewBox="0 0 576 512" fill="currentColor" height="1em" width="1em">
      <path d="M333.5 201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5c32.8-.1 50.9-13.3 50.9-36.9zM517 188.6c-9.5-30.9-10.9-68.8-9.8-98.1C508.3 60 484.5 32 452.5 32H123.7C91.6 32 67.9 60.1 69 90.5c1 29.3-.3 67.2-9.8 98.1-9.6 31-25.7 50.6-52.2 53.1v28.5c26.4 2.5 42.6 22.1 52.2 53.1 9.5 30.9 10.9 68.8 9.8 98.1-1.1 30.5 22.7 58.5 54.7 58.5h328.7c32.1 0 55.8-28.1 54.7-58.5-1-29.3.3-67.2 9.8-98.1 9.6-31 25.7-50.6 52.1-53.1v-28.5c-26.3-2.5-42.5-22.1-52-53.1zM300.2 375.1h-97.9V136.8h97.4c43.3 0 71.7 23.4 71.7 59.4 0 25.3-19.1 47.9-43.5 51.8v1.3c33.2 3.6 55.5 26.6 55.5 58.3 0 42.1-31.3 67.5-83.2 67.5zm-10-108.7h-50.1v78.4h52.3c34.2 0 52.3-13.7 52.3-39.5 0-25.7-18.6-38.9-54.5-38.9z" />
    </svg>
  );
}
function Sql() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" height="2em" width="3em">
      <path
        fill="currentColor"
        d="M5.082 5.593c-.564.564-.423 1.213.564 2.679.508.761 1.1 1.946 1.326 2.623.226.705.677 1.664.987 2.143.564.79.564.959.197 2.397-.226.902-.31 2.031-.197 2.736.169 1.185 1.128 2.905 1.72 3.102.508.169 1.241-.733 1.269-1.551 0-.705.028-.733.338-.226.536.874 2.228 2.735 2.369 2.594.056-.056-.31-.79-.846-1.607-.508-.846-1.1-1.946-1.325-2.454-.31-.846-.423-.902-.79-.508-.226.226-.508.874-.592 1.466-.226 1.354-.733 1.523-1.128.367s-.395-3.131 0-4.484c.282-.931.254-1.184-.226-1.89-.31-.423-.79-1.438-1.044-2.256-.254-.79-.846-1.974-1.325-2.595-1.1-1.551-1.1-2.115.056-1.89.479.085 1.213.423 1.664.733.423.31 1.156.564 1.607.564 1.354 0 3.723 1.326 5.443 3.046 1.326 1.325 2.002 2.397 3.441 5.302 1.692 3.44 1.833 3.638 2.877 3.976 1.241.423 3.835 2.002 3.835 2.341 0 .113-.649.282-1.438.338-2.115.226-2.313.62-.931 1.861.649.564 1.862 1.438 2.736 1.918l1.579.902-.733-.931c-.423-.508-1.297-1.297-1.974-1.72s-1.213-.874-1.213-.987c0-.113.479-.31 1.072-.395 1.579-.282 2.03-.423 2.03-.705 0-.423-2.848-2.566-4.202-3.159-1.156-.536-1.297-.762-2.792-3.835-1.326-2.82-1.861-3.61-3.553-5.302-2.171-2.171-3.666-3.102-5.584-3.384-.649-.113-1.551-.451-1.946-.733-.931-.705-2.82-.959-3.272-.479z"
      />
    </svg>
  );
}

function DataImage() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M11 19V9H4v10h7zm0-12V4a1 1 0 011-1h9a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1h8zm2-2v14h7V5h-7zM5 16h5v2H5v-2zm9 0h5v2h-5v-2zm0-3h5v2h-5v-2zm0-3h5v2h-5v-2zm-9 3h5v2H5v-2z" />
    </svg>
  );
}
function Cimage() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
      <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" />
    </svg>
  );
}

function ReactNative() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M6.357 9C3.72 9.68 2 10.845 2 12.175 2 14.282 6.405 16 11.85 16c.74 0 1.26-.039 1.95-.097" />
      <path d="M9.837 15.9c-.413-.596-.806-1.133-1.18-1.8-2.751-4.9-3.488-9.77-1.63-10.873 1.15-.697 3.047.253 4.974 2.254" />
      <path d="M6.429 15.387c-.702 2.688-.56 4.716.56 5.395 1.783 1.08 5.387-1.958 8.043-6.804.36-.67.683-1.329.968-1.978" />
      <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253 1.85-1.102 1.121-5.972-1.633-10.873-.384-.677-.777-1.204-1.18-1.8" />
      <path d="M17.66 15c2.612-.687 4.34-1.85 4.34-3.176C22 9.714 17.592 8 12.155 8c-.747 0-1.266.029-1.955.087" />
      <path d="M8 12c.285-.66.607-1.308.968-1.978 2.647-4.844 6.253-7.89 8.046-6.801 1.11.679 1.262 2.706.56 5.393M12.26 12.015h-.01c-.01.13-.12.24-.26.24a.263.263 0 01-.25-.26c0-.14.11-.25.24-.25h-.01c.13-.01.25.11.25.24" />
    </svg>
  );
}
function Github() {
  return (
    <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
    </svg>
  );
}
function MongoDb() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" height="1em" width="1em">
      <path
        fill="currentColor"
        d="M22.797 14.562a13.663 13.663 0 00-.407-2.297c-.625-2.369-1.666-4.637-3.134-6.603a16.58 16.58 0 00-1.294-1.532c-.476-.499-1.004-.957-1.336-1.578-.21-.393-.41-.791-.614-1.187-.003.124-.011.248-.011.371 0-.124.009-.248.011-.372l-.13-.327c-.022.075-.036.101-.036.129-.017.645-.383 1.083-.838 1.492-.512.46-.989.959-1.481 1.441.017.022.036.044.055.066-.019-.022-.038-.043-.055-.066-1.463 1.924-2.752 3.981-3.511 6.29a14.691 14.691 0 00-.517 2.056c-.259 1.481-.379 2.92-.296 4.42.046.829.191 1.645.407 2.448.785 2.917 2.379 5.336 4.558 7.392.405.382.842.729 1.265 1.093l.003-.011-.003.011.187.642.174.996.083 1.039c-.001.211-.01.423.003.633.003.054.074.104.113.156l.004-.006-.004.006.353.124.367.143a322.63 322.63 0 00-.063-.924l-.003-.91-.021.021.021-.021.127-1.386.092-.302.263-.467c.325-.262.674-.499.971-.79.536-.527 1.071-1.06 1.55-1.637a12.294 12.294 0 001.588-2.441c1.223-2.491 1.789-5.269 1.564-8.039l-.006-.074z"
      />
    </svg>
  );
}
function Skill() {
  const languageIcons = {
    Flutter: <FontAwesomeIcon icon={faFlutter} />,
    Dart: <FontAwesomeIcon icon={faDartLang} />,
    React: <FontAwesomeIcon icon={faReact} />,
    Javascript: <FontAwesomeIcon icon={faJsSquare} />,
    Tailwind: <TailwindImg />,
    Bootstrap: <Bootstrap />,
    Java: <FontAwesomeIcon icon={faJava} />,
    Node: <FontAwesomeIcon icon={faNodeJs} />,
    HTML: <FontAwesomeIcon icon={faHtml5} />,
    CSS: <FontAwesomeIcon icon={faCss3Alt} />,
    DataAnalysis: <DataImage />,
    JQuery: <FontAwesomeIcon icon={faJava} />,
    PHP: <FontAwesomeIcon icon={faPhp} />,
    C: <Cimage />,
    git: <FontAwesomeIcon icon={faGitAlt} />,
    Github: <Github />,
    SQL: <Sql />,
    MongosDB: <MongoDb />,
    Figma: <FontAwesomeIcon icon={faFigma} />,
    ReactNative: <ReactNative />,
  };

  const languages = Object.keys(languageIcons);
  const firstColumn = languages.slice(0, Math.ceil(languages.length / 2));
  const secondColumn = languages.slice(Math.ceil(languages.length / 2));
  const [visibleLanguages, setVisibleLanguages] = useState([]);
  const ref = useRef([]);

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      const index = entry.target.dataset.index;
      const isIntersecting = entry.isIntersecting;

      if (isIntersecting && !visibleLanguages.includes(languages[index])) {
        setVisibleLanguages((prev) => [...prev, languages[index]]);
      } else if (
        !isIntersecting &&
        visibleLanguages.includes(languages[index])
      ) {
        setVisibleLanguages((prev) =>
          prev.filter((lang) => lang !== languages[index])
        );
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1,
    });

    ref.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      ref.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [visibleLanguages]);

  return (
    <div id="skills">
      <SkillsLine />
      <div className="flex items-center justify-start space-x-10 ">
        {/* Image on the left side */}

        <div>
          <img
            src={pointerman}
            alt="Pointer Man"
            className="block dark:hidden w-96 h-96"
          />
          <img
            src={pointerman2}
            alt="Pointer Man"
            className="hidden dark:block w-96 h-96"
          />
        </div>

        {/* Skills list */}
        <div className="flex space-x-28">
          {[firstColumn, secondColumn].map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col items-center space-y-4"
            >
              {column.map((language, index) => (
                <motion.div
                  key={language}
                  data-index={languages.indexOf(language)}
                  ref={(el) => (ref.current[languages.indexOf(language)] = el)}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    visibleLanguages.includes(language)
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -50 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: languages.indexOf(language) * 0.2,
                  }}
                  className={`flex items-center text-lg font-semibold ${
                    language === "ReactNative" || language === "Figma"
                      ? "animate-pulse text-yellow-500" // Change style for progress
                      : ""
                  }`}
                >
                  <span className="mr-2">{languageIcons[language]}</span>
                  {language}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillsLine() {
  return (
    <div className="flex items-center w-full justify-center py-8">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 text-xl font-semibold text-gray-700">
        My Skills
      </span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
}

export default Skill;
