import React from 'react'
import { useState, useEffect, useParams } from 'react'
import { useNavigate,Link } from 'react-router-dom'

const API = import.meta.env.VITE_BASE_URL

export default function BloggerDetails() {
    const { id } = useParams()
    const [bloggerdetails, setBloggerDetails] = useState()

    useEffect(()=> {
        fetch(`${API}/${id}`)
        .then(res=> res.json())
        .then(res => setBloggerDetails(res))
    })

    console.log(bloggerdetails)

  return (
    <div>BloggerDetails</div>
  )``
}
