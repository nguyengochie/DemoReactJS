import React, { useState } from 'react';
let timerId;
const DemoUseRef = () => {
  const [count, setCount] = useState(1);

  const handleStart = () => {
    timerId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 500);
    console.log('timerId', timerId);
  };
  const handleStop = () => {
    console.log('timerId stop', timerId);
    clearInterval(timerId);
  };
  return (
    <div>
      <h1>{count}</h1>
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default DemoUseRef;
