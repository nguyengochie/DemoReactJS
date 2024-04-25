import React, { useContext } from 'react';
import { ExContext } from '.';

const ButtonComponent = () => {
  const { toggleTheme } = useContext(ExContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ButtonComponent;
