import React, { useEffect, useRef, useState } from 'react';

const Useref = () => {
  const [info, setInfo] = useState("");
  const [count, setCount] = useState(0);
  const infoRef = useRef();
  const countRef = useRef(null);

  useEffect(() => {
    infoRef.current.focus();

    countRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(countRef.current);
    };
  }, []);

  const doclear = () => {
    setInfo("");
    infoRef.current.focus();
  };

  return (
    <div style={{ height: "80vh" }} className="d-flex flex-column">
      <h2>Use Ref Example</h2>
      <p>Counter: {count}</p>
      <div>
        <input
          type="text"
          value={info}
          ref={infoRef}
          onChange={(e) => setInfo(e.target.value)}
        />
        <button className="btn btn-primary" onClick={doclear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Useref;
