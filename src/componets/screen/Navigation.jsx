import React, { useState } from "react";
import lightlogo from "../../assets/images/lightlogo.png";
import darklogo from "../../assets/images/darklogo.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4 mb-0 bg-white dark:bg-black flex  sm:justify-between">
      <Logo />
      <div className="md:hidden mt-9 w-6 h-40">
        <button
          onClick={toggleMenu}
          className="text-gray-700 dark:text-gray-200 focus:outline-none "
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>{" "}
      <ul
        className={`relative md:static bg-white dark:bg-black md:flex md:space-x-16 transition-all duration-300 ease-in-out z-20 dark:z-20 ${
          isOpen
            ? "top-0 right-0 w-[75%] p-10 bg-opacity-50 dark:bg-opacity-50 sm:bg-opacity-90  dark:sm:bg-opacity-90  max-h-screen overflow-y-auto"
            : "top-[-400px] md:top-0 md:p-0 "
        }`}
      >
        {["Home", "About", "Skills", "Projects", "Article", "Contact"].map(
          (item) => (
            <li key={item} className="my-2 md:my-0">
              <a
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {item}
                <span className="block h-[2px] w-0 bg-black dark:bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

function Logo() {
  return (
    <div className="mb-4 md:mb-0">
      <img
        loading="lazy"
        src={lightlogo}
        alt="Light Mode"
        className="block dark:hidden w-46 h-32"
      />
      <img
        loading="lazy"
        src={darklogo}
        alt="Dark Mode"
        className="hidden dark:block w-46 h-32"
      />
    </div>
  );
}

export default Nav;
