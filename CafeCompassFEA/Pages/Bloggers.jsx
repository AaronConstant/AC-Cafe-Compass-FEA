import React, { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import BloggerDetails from '../Components/BloggerDetails'
import '../Component-Stylings/bloggers.scss'


const API = import.meta.env.VITE_BASE_URL;

export default function Bloggers() {
    const [bloggers, setBloggers] = useState([]);

    useEffect(() => {
        fetch(`${API}/bloggers`)
            .then(res => res.json())
            .then(res => setBloggers(res))
            .catch(err => console.error('Error fetching bloggers:', err));
    }, []);

    // console.log(bloggers)

    return (
    <>
        <h1 className='bloggers-title'> Certified CC Bloggers</h1>
        <div className='bloggers-container'>
                { bloggers.map(blogger => (
                    <div className='bloggers-container__bloggers' key={ blogger.id }>
                        {<Link to={`/bloggers/:${blogger.id}`} className='bloggers-container__name'>
                            { blogger.first_name } { blogger.last_name }
                        </Link> }
                    </div>
                ))}
        </div>
    </>
    );
}
