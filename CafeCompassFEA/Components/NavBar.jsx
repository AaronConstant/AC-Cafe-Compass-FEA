import React from 'react'
import{ Link } from 'react-router-dom'
import '../Component-Stylings/Navbar.scss'
import logo from '../resource-pics/CCafeCompass.png'

export default function NavBar() {
  

  return (
   <>
   <nav>
    <ul className='nav-links'>
      <li className='nav-links__bloggers'><Link to='/bloggers'>Bloggers
      </Link></li>
      <li className='nav-links__title'><h1>
        <Link to='/'><img src={logo} alt="CC-logo" /></Link></h1></li>
      <li className='nav-links__cafes'><Link to='/cafes'>Cafes</Link></li>
    </ul>
   </nav>
   </>
      
  )
}
