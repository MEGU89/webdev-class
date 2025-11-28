import React, { useState } from 'react'
import Red from './Red';

export const ColorContext = React.createContext();
const Color = () => {
    const [color,setColor] = useState({red:"#FF0000", green:"#00FF00"})
  return (
    <div>
        I am on color page
      <ColorContext.Provider value={color}>
      <Red/>
      </ColorContext.Provider>
    </div>
  )
}

export default Color
