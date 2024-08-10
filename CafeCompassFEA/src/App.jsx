import './App.css'

import NavBar from '../Components/NavBar'
import Home from '../Pages/Home'
import Bloggers from '../Pages/Bloggers'
import Footer from '../Components/Footer'
import Cafes from '../Pages/Cafes'
import EditBlogger from '../Pages/EditBlogger'

import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BloggerDetails from '../Components/BloggerDetails'
import New from '../Pages/New'

const API = import.meta.env.VITE_BASE_URL

function App() {
  return (
    <>
  <NavBar/>
  <Routes>

    <Route path='/' element={ <Home/> }/>
    <Route path='/bloggers' element={ <Bloggers/> }/>
    <Route path='/new-blogger'element={<New/>}/>
    <Route path='/bloggers/:id/reviews' element ={ <BloggerDetails/> }/>
    <Route path='/cafes' element={<Cafes/>}/>
    <Route path='/bloggers/edit-blogger' element={<EditBlogger/>}/>

  </Routes>
  <Footer/>
    </>
  )
}

export default App

