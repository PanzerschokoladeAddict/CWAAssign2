"use client";
import React, { useEffect } from "react";

const ThemeSelect = () => {
  const [theme, setTheme] = React.useState("light-theme");

  useEffect(() => {
    const savedTheme = localStorage.getItem("Theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = "";
      document.body.classList.add(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Theme", theme);
    document.body.className = "";
    document.body.classList.add(theme);
  }, [theme]);

  const themeChange = (e: any) => {
    setTheme(e.target.value);
  };

  return (
    <div>
      <label>
        <span>Theme:</span>
        <select value={theme} onChange={themeChange}>
          <option value="light-theme">Light</option>
          <option value="dark-theme">Dark</option>
          <option value="fanta-theme">Fanta</option>
          <option value="chocolate-theme">Chocolate</option>
        </select>
      </label>
    </div>
  );
};

export default ThemeSelect;
