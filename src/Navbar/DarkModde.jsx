import React, { useEffect, useState } from 'react';
import DarkIcon from './Dark.jpg';   // Icon for dark mode (e.g., moon)
import LightIcon from './Light.png'; // Icon for light mode (e.g., sun)

function DarkModeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "light");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {theme === "dark" ? (
        <img
          onClick={toggleTheme}
          className="w-11 h-11 cursor-pointer rounded-full transition-transform duration-300 hover:scale-110 drop-shadow-lg"
          src={LightIcon}
          alt="Switch to Light Mode"
        />
      ) : (
        <img
          onClick={toggleTheme}
          className="w-11 h-11 cursor-pointer rounded-full transition-transform duration-300 hover:scale-110 drop-shadow-lg"
          src={DarkIcon}
          alt="Switch to Dark Mode"
        />
      )}
    </div>
  );
}

export default DarkModeToggle;
