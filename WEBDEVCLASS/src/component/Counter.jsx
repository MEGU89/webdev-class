import React, { useState } from 'react'

const Counter = () => {
    let [name,setName] = useState('')
    
  return (
    <div>
        <button  onClick={()=>{
            setName("HARSHIT")
        }}>Click here to change name</button>
      <h3>Name: {name} </h3>
      <button onClick={()=>{
        setName('')
      }}>Click here to remove name</button>

    </div>
  )
}

export default Counter
