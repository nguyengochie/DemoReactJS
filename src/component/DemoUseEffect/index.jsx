import React, { useEffect, useState } from 'react';
import DemoUpdateDOM from './DemoUpdateDOM';
import DemoCallAPI from './DemoCallAPI';

/*
1. Upadate DOM
    - update title page
2. call API
    - select tab to call API
3. listen DOM event
    - scroll
    - resize
4. Cleanup
    - remove listener
    - clear timer
*/

const DemoUseEffect = () => {
  const [show, setShow] = useState(false);

  const onToggle = () => setShow(!show);

  return (
    <div>
      <button style={{ height: 20, width: 50 }} onClick={onToggle}>
        Toggle
      </button>
      {show && <DemoCallAPI />}
    </div>
  );
};

export default DemoUseEffect;
