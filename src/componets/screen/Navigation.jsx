import React, { useState } from "react";
import lightlogo from "../../assets/images/lightlogo.png";
import darklogo from "../../assets/images/darklogo.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-black relative">
      <Logo />
      <div className="md:hidden mt-4 z-20">
        <button
          onClick={toggleMenu}
          className="text-gray-700 dark:text-gray-200 focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      <ul
        className={`absolute md:static bg-white dark:bg-black md:flex md:space-x-16 transition-all duration-300 ease-in-out ${
          isOpen
            ? "top-16 right-0 w-full p-4 bg-opacity-90"
            : "top-[-200px] md:top-0 md:p-0"
        }`}
      >
        {["Home", "About", "Skills", "Projects", "Article", "Contact"].map(
          (item) => (
            <li key={item} className="my-2 md:my-0">
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {item}
                <span className="block h-[2px] w-0 bg-black dark:bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            </li>
          )
        )}
        <li></li>
      </ul>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleMenu} // Close the menu when clicking outside
        />
      )}
    </nav>
  );
}

function Logo() {
  return (
    <div className="mb-4 md:mb-0 sm:hidden md:block">
      <img
        src={lightlogo}
        alt="Light Mode"
        className="block dark:hidden w-46 h-32"
      />
      <img
        src={darklogo}
        alt="Dark Mode"
        className="hidden dark:block w-46 h-32"
      />
    </div>
  );
}

export default Nav;
