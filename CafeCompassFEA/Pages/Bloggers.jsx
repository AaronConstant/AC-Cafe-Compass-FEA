import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../Component-Stylings/bloggers.scss'
import Blogger from '../Components/Blogger';


const API = import.meta.env.VITE_BASE_URL;

export default function Bloggers() {
    const [bloggers, setBloggers] = useState([]);

    useEffect(() => {
        fetch(`${API}/bloggers`)
            .then(res => res.json())
            .then(res => setBloggers(res))
            .catch(err => console.error('Error fetching bloggers:', err));
    }, []);


    return (
    <>
        <h1 className='bloggers-title'> Certified CC Bloggers</h1>

        <div className='bloggers-container'>
            <Link to='/new-blogger'>
            <h2>Add New Blogger</h2>
            
            </Link>
            
                { bloggers.map(blogger => {
                    return <Blogger key={blogger.id} blogger={blogger} id={blogger.id}/>
                }
                )}
        </div>
    </>
    );
}
