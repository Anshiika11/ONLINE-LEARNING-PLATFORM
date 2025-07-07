import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Only if you're using React Router
import './register.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`✅ ${data.message}`);
      } else {
        alert(`❌ Error: ${data.message}`);
      }

    } catch (error) {
      console.error('Registration error:', error);
      alert('❌ Registration failed. Please try again.');
    }
  };

  return (
    <div className="register">
      <div className="page-wrapper">
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username" 
          placeholder="Username" 
          value={formData.username}
          onChange={handleChange}
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password}
          onChange={handleChange}
          required 
        />
        <button type="submit">Create Account</button>
      </form>
      <div className="login-link">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
    
</div>

    </div>
  );
}

export default Register;
