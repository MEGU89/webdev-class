import React, { useState } from 'react'
import A from './A'

export const NameContext = React.createContext();
const UseContext = () => {
    const [name,setName] = useState("HARSHIT");

  return (
    <div>
      <h2>Use Context Example</h2>
      <NameContext.Provider value={name}>
      <A/>
      </NameContext.Provider>
    </div>
  )
}

export default UseContext
