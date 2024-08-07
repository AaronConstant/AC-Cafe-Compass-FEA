import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Component-Stylings/NewBloggerForm.scss'
const API = import.meta.env.VITE_BASE_URL;

export default function AddNewBlogger() {

  const navigate = useNavigate();

  const [newBlogger, setNewBlogger] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlogger({ ...newBlogger, [name]: value });
  };

  const handleCheckboxChange = () => {
    setNewBlogger({ ...newBlogger, membership_status: !newBlogger.membership_status });
  };

  const addBlogger = (newBlogger) => {
    fetch(`${API}/bloggers`, {
      method: 'POST',
      body: JSON.stringify(newBlogger),
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
    addBlogger(newBlogger);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>

      <legend><h2>Add New Blogger</h2></legend>
        <input
          type="text"
          name="first_name"
          value={newBlogger.first_name}
          onChange={handleChange}
          placeholder="First Name"
          />
        <input
          type="text"
          name="last_name"
          value={newBlogger.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          />
        <input
          type="text"
          name="username"
          value={newBlogger.username}
          onChange={handleChange}
          placeholder="Username"
          />
        <input
          type="password"
          name="password"
          value={newBlogger.password}
          onChange={handleChange}
          placeholder="Password"
          />
        <input
          type="email"
          name="email"
          value={newBlogger.email}
          onChange={handleChange}
          placeholder="Email"
          />
        <input
          type="text"
          name="gender_identity"
          value={newBlogger.gender_identity}
          onChange={handleChange}
          placeholder="Gender Identity"
          />
        <input
          type="datetime-local"
          name="last_login"
          value={newBlogger.last_login}
          onChange={handleChange}
          placeholder="Last Login"
          />
        <label>
          Membership Status:
          <input
            type="checkbox"
            name="membership_status"
            checked={newBlogger.membership_status}
            onChange={handleCheckboxChange}
            />
        </label>
        <input
          type="text"
          name="phone_number"
          value={newBlogger.phone_number}
          onChange={handleChange}
          placeholder="Phone Number"
          />
        <button type="submit">Add Blogger</button>
          </fieldset>
      </form>
    </div>
  );
}

