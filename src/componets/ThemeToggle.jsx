import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className="fixed top-4 right-4 z-50 flex items-center justify-center m-0 cursor-pointer sm:top-6 sm:right-6 md:top-8 md:right-8"
      onClick={toggleTheme}
    >
      <div className="relative inline-block w-14 h-7 sm:w-16 sm:h-8 md:w-20 md:h-10 align-middle select-none transition duration-300 ease-in-out">
        {/* Background of the toggle */}
        <div
          className={`${
            darkMode ? "bg-slate-300" : "bg-slate-600"
          } inline-block w-full h-full rounded-full shadow-md transition-all duration-300`}
        ></div>

        {/* Slider of the toggle */}
        <div
          className={`${
            darkMode
              ? "translate-x-7 sm:translate-x-8 md:translate-x-10"
              : "translate-x-0"
          } inline-block w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 transform bg-white rounded-full shadow-lg transition-transform duration-300 ease-in-out`}
        >
          <span
            className={`absolute top-1 left-1 text-xs font-bold text-center text-gray-800 transition-opacity duration-300 ${
              darkMode ? "opacity-0" : "opacity-100"
            }`}
          >
            ☀️
          </span>
          <span
            className={`absolute top-1 left-1 text-xs font-bold text-center text-gray-800 transition-opacity duration-300 ${
              darkMode ? "opacity-100" : "opacity-0"
            }`}
          >
            🌙
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
