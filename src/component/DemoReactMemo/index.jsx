import React, { useState } from 'react';
import Child from './Child';

const DemoRectMemo = () => {
  const [state, setState] = useState({ value: 1, name: 'joker' });
  const handleIncrease = () => setState({ ...state, value: state.value + 1 });
  return (
    <div>
      <Child name={state.name} />
      <div>{state.value}</div>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default DemoRectMemo;
