import React, { useState, useEffect } from 'react'
import BloggerDetails from '../Components/BloggerDetails'


const API = import.meta.env.VITE_BASE_URL

export default function Bloggers() {
    const [bloggers, setBloggers] = useState()

    useEffect(() => {
        fetch(`${API}`)
    },[])



  return (
    <div>Bloggers</div>
  )
}
