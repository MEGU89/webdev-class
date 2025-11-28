import React, { useState } from 'react';

const names = ['Harshit', 'Imran', 'ACP', 'Daya', 'Abhijeet', 'Saluke'];
const colors = ['#d72525ff', '#3ae374', '#ff6f91', '#0078d4', '#ffb347', '#a29bfe'];
const sizes = ['24px', '32px', '40px', '48px', '56px'];

const Changename = () => {
  const [name, setName] = useState(names[0]);
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState(sizes[0]);

  const changeRandom = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    // const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    setName(randomName);
    // setColor(randomColor);
    // setSize(randomSize);
  };
  const changecolor = ()=>{
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  }
  const changesize=()=>
  {
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    setSize(randomSize);
  }

return (
  <div>
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2 style={{ color: color, fontSize: size }}>{name}</h2>
      <button className='btn btn-primary' onClick={changeRandom}>
        Change Name
      </button>
    </div>
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
        {/* <h2 style={{ color: color, fontSize: size }}>{name}</h2> */}
      <button className='btn btn-primary' onClick={changecolor}>
        Colors
      </button>
    </div>
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
        {/* <h2 style={{ color: color, fontSize: size }}>{name}</h2> */}
      <button className='btn btn-primary' onClick={changesize}>
        Size
      </button>
    </div>
  </div>
);
};

export default Changename;