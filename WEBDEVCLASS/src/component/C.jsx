import React, { useContext } from 'react'
import { NameContext } from './UseContext'


const C = (props) => {
    const name = useContext(NameContext);
  return (
    <div>
      <h2>Component C </h2>
      <h3>Name: {name}</h3>
    </div>
  )
}

export default C
