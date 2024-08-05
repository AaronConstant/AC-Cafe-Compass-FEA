// import { useState } from 'react'
import './App.css'
import NavBar from '../Components/NavBar'


function App() {

  return (
    <>
  <NavBar/>
  <div className='container'>
      <main>Main Content</main>
      <div className="bloggers">Bloggers Content</div>
      <div className="cafe">Cafe Content</div>
      <div className="footer">Footer Content</div>
    </div>
    </>
  )
}

export default App
