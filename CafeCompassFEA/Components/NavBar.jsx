import React from 'react'
import{ Link } from 'react-router-dom'
import '../Component-Stylings/Navbar.scss'

export default function NavBar() {
  

  return (
   <>
   <nav>
    <ul className='nav-links'>
      <li className='nav-links__account'>Your Account</li>
      <li className='nav-links__title'><h1>
        <Link path='/'>Cafe Compass</Link></h1></li>
      <li className='nav-links__bloggers'><Link path='/bloggers'>Bloggers
      </Link></li>
      <li className='nav-links__cafes'><Link path='/cafes'>Cafes</Link></li>
    </ul>
   </nav>
   </>
      
  )
}
