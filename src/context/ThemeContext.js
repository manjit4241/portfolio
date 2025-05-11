import React, { createContext, useState, useEffect } from 'react';

// Create theme context
export const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Check if user has a saved preference
  const savedTheme = localStorage.getItem('theme');
  const [isDarkMode, setIsDarkMode] = useState(
    savedTheme === 'dark' || 
    (savedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Effect to update local storage and document body when theme changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    // Apply theme variables to root
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;