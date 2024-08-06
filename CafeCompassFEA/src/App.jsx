// import { useState } from 'react'
import './App.css'

import NavBar from '../Components/NavBar'
import Home from '../Pages/Home'
import Bloggers from '../Pages/Bloggers'
import Footer from '../Components/Footer'
import Cafes from '../Pages/Cafes'

import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BloggerDetails from '../Components/BloggerDetails'

const API = import.meta.env.VITE_BASE_URL

function App() {





  return (
    <>
  <NavBar/>
  <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/bloggers' element={<Bloggers/>}/>
    <Route path='/bloggers/:id' element ={<BloggerDetails/>}/>
    <Route path='/cafes' element={<Cafes/>}/>
    <Route path='/bloggers/:cafe_id/reviews'/>

  </Routes>
  <Footer/>
    </>
  )
}

export default App
