import React from 'react'
import { useState, useEffect, useParams } from 'react'
import { useNavigate,Link } from 'react-router-dom'

const API = import.meta.env.VITE_BASE_URL

export default function BloggerDetails() {
    const { id } = useParams()
    const [bloggerdetails, setBloggerDetails] = useState()
    const [cafedetails, setCafeDetails] = useState()

    useEffect(()=> {
        fetch(`${API}/${id}/reviews`)
        .then(res=> res.json())
        .then(res => setBloggerDetails(res))
    },[])

    // useEffect(()=> {
    //     fetch(`${API}/cafes`)
    //     .then(res => res.json())
    //     .then(res=>)
    // },[])





  return (
    <div>BloggerDetails</div>
  )
}
