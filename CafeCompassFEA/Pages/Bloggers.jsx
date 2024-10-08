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
            <div className='btn-box'>

            <Link to='/new-blogger'>
            <h2 className='add-blogger'>Add New Blogger</h2>
            
            </Link>

            </div>
            <div className='bloggers-container1'>
                <p>pickles</p>
                <div className='bloggers-control-container'>
                        { bloggers.map(blogger => {
                            return <Blogger key={blogger.id} blogger={blogger} id={blogger.id}/>                    
                        }
                        )}
                </div>
            </div>
    </>
    );
}
