// src/contexts/ThemeContext.jsx
import React, { createContext, useState, useContext } from "react";

// 1. Khởi tạo context [cite: 24, 27]
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {}
});

// 2. Tạo provider [cite: 31]
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const contextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// 4. Custom hook [cite: 51, 52]
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};