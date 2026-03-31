import React, { Children, createContext, useState, useEffect } from 'react'

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleThemes = () => {
    setDarkMode(prev => !prev);
  }

  useEffect(() => {
    if (darkMode) {
      document.getElementById('root').classList.add('dark');
    } else {
      document.getElementById('root').classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, toggleThemes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext };