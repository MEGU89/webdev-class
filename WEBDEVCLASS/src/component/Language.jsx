import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Language = () => {
  return (
    <div>
      <nav>
        <NavLink to={"java"}>Java</NavLink>
        <NavLink to={"python"}>Python</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Language
