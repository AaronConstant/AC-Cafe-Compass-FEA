import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cafe from '../Components/Cafe.jsx';

const API = import.meta.env.VITE_BASE_URL;

export default function Cafes() {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    fetch(`${API}/cafes`)
      .then(res => res.json())
      .then(data => setCafes(data))
      .catch(err => console.error('Error fetching cafes:', err));
  }, []);

  return (
    <>
      <h1 className='cafes-title'>Local Cafes</h1>
      <div className='cafes-control-container'>
        <Link to='/new-cafe'>
          <h2 className='add-cafe'>Add New Cafe</h2>
        </Link>
        <table className='cafes-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Hours</th>
              <th>Rating</th>
              <th>WiFi</th>
              <th>Outdoor Seating</th>
              <th>LGBTQIA+ Friendly</th>
              <th>Established</th>
            </tr>
          </thead>
          <tbody>
            {cafes.map(cafe => (
              <Cafe key={cafe.id} cafe={cafe} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

