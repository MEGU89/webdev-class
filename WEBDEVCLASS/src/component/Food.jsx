import React from 'react'
import { useNavigate } from 'react-router-dom'
import D from './D';

const Food = (probs) => {
  const naviagate = useNavigate();
  return (
    <div>
      <h1> Like this Food {probs.food} </h1>
      <button className='btn btn-primary' onClick={()=>naviagate(-2)}>Back</button>
      <D/>
    </div>
  )
}

export default Food
