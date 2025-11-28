import React, { use, useContext } from 'react'
import { ColorContext } from './Color'

const RedGreen = () => {
  const colors = useContext(ColorContext)
  return (
    <div>
        I am on red green page
      <h2 style={{color:colors.red}}>I am red</h2>
      <h2 style={{color:colors.green}}>I am green</h2>
    </div>
  )
}

export default RedGreen
