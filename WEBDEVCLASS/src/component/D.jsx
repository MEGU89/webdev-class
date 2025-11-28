import React, { useContext } from 'react'
import { NameContext } from './UseContext'

const D = () => {
    // we can not use this here because it is not a child of A or its child's child
    const name = useContext(NameContext);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default D
