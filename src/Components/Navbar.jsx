import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Navbar.css"

function Navbar({links}) {
  return (
    <div className='navbar'>
        {links.map((link,id)=>{
          return <Link key={id} to={`${link.toLowerCase()==="home"?"/":link.toLowerCase()}`}>{link}</Link>
        })}
    </div>
  )
}

export default Navbar