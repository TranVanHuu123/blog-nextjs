"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProdiver = ({ children }) => {
  // const [isDarkMode, setIsDarkMode] = useState("dark");
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
