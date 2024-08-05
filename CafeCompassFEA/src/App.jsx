// import { useState } from 'react'
import './App.css'
import NavBar from '../Components/NavBar'
import Home from '../Pages/Home'
import Footer from '../Components/Footer'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
  <NavBar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    

  </Routes>
  <Footer/>
    </>
  )
}

export default App
