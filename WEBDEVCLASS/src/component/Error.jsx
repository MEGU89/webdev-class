import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
      <h1 className='text-danger'>404 Page not found</h1>
      <button className='btn btn-primary mt-3' onClick={()=> navigate('/',{replace:true})}>Go to Home</button>
    </div>
  )
}

export default Error
