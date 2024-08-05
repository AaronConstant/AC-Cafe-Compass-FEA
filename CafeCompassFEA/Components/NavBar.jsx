import React from 'react'
// import{ Link } from 'react-router-dom'
import '../Component-Stylings/Navbar.scss'

export default function NavBar() {
  return (
   <>
   <nav>
    <ul className='nav-links'>
      <li className='nav-links__account'>Your Account</li>
      <li className='nav-links__title'><h1>
        Cafe Compass
        </h1>
        </li>
      <li className='nav-links__bloggers'>Bloggers</li>
      <li className='nav-links__cafes'>Cafes</li>
    </ul>
   </nav>
   </>
      
  )
}
