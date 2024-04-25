import React, { useEffect, useState } from 'react';

const DemoUpdateDOM = () => {
  const [input, setInput] = useState();

  useEffect(() => {
    console.log('mounted');
    document.title = input;
  });

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
};

export default DemoUpdateDOM;
