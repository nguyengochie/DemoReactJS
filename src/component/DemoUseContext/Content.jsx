import React from 'react';
import DemoChildContext from './DemoChildContext';
import ButtonComponent from './ButtonComponent';

const Content = () => {
  return (
    <div>
      <ButtonComponent />
      <DemoChildContext />
    </div>
  );
};

export default Content;
