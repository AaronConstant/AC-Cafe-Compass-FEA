import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const API = import.meta.env.VITE_BASE_URL;

export default function UpdateBlogger() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [blogger, setBlogger] = useState({
    first_name: '', 
    last_name: '',
    username: '', 
    password: '', 
    email: '', 
    gender_identity: '', 
    last_login: '', 
    membership_status: false, 
    phone_number: ''
  });

  useEffect(() => {
    fetch(`${API}/bloggers/${id}`)
      .then((res) => res.json())
      .then((data) => setBlogger(data))
      .catch((err) => console.error(err));
  }, [id]);

  console.log(blogger)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogger({ ...blogger, [name]: value });
  };

  const handleCheckboxChange = () => {
    setBlogger({ ...blogger, membership_status: !blogger.membership_status });
  };

  const updateBlogger = (updatedBlogger) => {
    fetch(`${API}/bloggers/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedBlogger),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      console.log('Server response:', res);
      navigate(`/bloggers`);
    })
    .catch(err => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlogger(blogger);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend><h1 className='new-blogger-title'>⭐️ Update Blogger ⭐️</h1></legend>
          <input
            type="text"
            name="first_name"
            value={blogger.first_name}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="last_name"
            value={blogger.last_name}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <input
            type="text"
            name="username"
            value={blogger.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={blogger.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <input
            type="email"
            name="email"
            value={blogger.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="gender_identity"
            value={blogger.gender_identity}
            onChange={handleChange}
            placeholder="Gender Identity"
          />
          <input
            type="date"
            name="last_login"
            value={blogger.last_login}
            onChange={handleChange}
            placeholder="Last Login"
          />
          <label>
            Membership Status:
            <input
              type="checkbox"
              name="membership_status"
              checked={blogger.membership_status}
              onChange={handleCheckboxChange}
            />
          </label>
          <input
            type="text"
            name="phone_number"
            value={blogger.phone_number}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          <button type="submit">Update Blogger</button>
        </fieldset>
      </form>
    </div>
  );
}
