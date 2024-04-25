import React, { createContext, useState } from 'react';
import Content from './Content';

export const ExContext = createContext();

const DemoUseContext = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    console.log('toggl;e');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ExContext.Provider value={{ isDarkMode, toggleTheme }}>
      <Content />
    </ExContext.Provider>
  );
};

export default DemoUseContext;
