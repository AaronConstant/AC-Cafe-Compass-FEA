import React from 'react'
import{ Link } from 'react-router-dom'
import '../Component-Stylings/Navbar.scss'

export default function NavBar() {
  

  return (
   <>
   <nav>
    <ul className='nav-links'>
      <li className='nav-links__title'><h1><span className='first-span'>Cafe</span><span className='sec-span'>COMPASS</span></h1></li>
      <ul className='bc-link'>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/bloggers'>Bloggers</Link></li>
        <li><Link to='/cafes'>Cafes</Link></li>
      </ul>
    </ul>
   </nav>
   </>
      
  )
}
