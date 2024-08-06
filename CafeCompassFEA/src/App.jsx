// import { useState } from 'react'
import './App.css'

import NavBar from '../Components/NavBar'
import Home from '../Pages/Home'
import Bloggers from '../Pages/Bloggers'
import Footer from '../Components/Footer'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

const API = import.meta.env.VITE_BASE_URL

function App() {





  return (
    <>
  <NavBar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/bloggers' element={<Bloggers/>}/>

  </Routes>
  <Footer/>
    </>
  )
}

export default App
