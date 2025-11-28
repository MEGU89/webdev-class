import React, { useContext } from 'react'
import RedGreen from './RedGreenBoth'
import { ColorContext } from './Color'


const Red = () => {
    const colors = useContext(ColorContext)
  return (
    <div>
        I am on red page
      <h2 style={{color:colors.red}}>I am red</h2>
      <RedGreen/>
    </div>
  )
}

export default Red
