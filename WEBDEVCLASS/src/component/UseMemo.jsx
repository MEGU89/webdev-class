import React from 'react'
import TableOf from './Table';

const useMemoInfo = () => {
  const [num, setNum] = React.useState(0);
  const [color, setColor] = React.useState('black');

  const colors = ['red', 'blue', 'green', 'purple', 'orange'];
  const changeColor = () => {
    const nextColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(nextColor);
  };

  return (
    <div className='d-flex flex-column' style={{height:"80vh"}}>
      <h2>Use Memo Example</h2>
      <input type='text' value={num} onChange={(e)=>setNum(e.target.value)}/>
      <button onClick={changeColor} style={{margin: '10px 0'}}>Change Table Color</button>
      <TableOf num={num} color={color}/>
    </div>
  )
}

export default useMemoInfo