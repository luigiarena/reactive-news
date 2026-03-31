import React, { Children, createContext, useState, useEffect } from 'react'

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }

  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }
  const persistedState = loadFromLocalStorage();

  const [darkMode, setDarkMode] = useState(persistedState?.darkMode || false);

  const toggleThemes = () => {
    setDarkMode(prev => !prev);
  }

  useEffect(() => {
    if (darkMode) {
      document.getElementById('root').classList.add('dark');
    } else {
      document.getElementById('root').classList.remove('dark');
    }
    saveToLocalStorage({ darkMode });
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, toggleThemes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext };