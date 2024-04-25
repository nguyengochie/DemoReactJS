import React, { useContext } from 'react';
import { ExContext } from '.';

const getTheme = (darkmode) => {
  if (darkmode) return { backgroundColor: '#797979', color: '#ffff' };
  return { backgroundColor: '#ffff', color: 'black' };
};
const DemoChildContext = () => {
  const { isDarkMode } = useContext(ExContext);
  return <div style={getTheme(isDarkMode)}>DemoChildContext</div>;
};

export default DemoChildContext;
