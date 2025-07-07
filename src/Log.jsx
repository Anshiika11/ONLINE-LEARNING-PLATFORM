import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Only if you're using React Router
import './login.css';

function Login() {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example: send formData to your backend
    console.log('Submitting:', formData);

    // fetch('/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // }).then(response => ...);
  };

  return (
    <div className="login">
      <div className="page-wrapper">
    <div className="form-container">
      <h2>Login</h2>
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
        <button type="submit">Log in</button>
      </form>
      <div className="login-link">
        New user? <Link to="/register">Register</Link>
      </div>
    </div>
    
</div>

    </div>
  );
}

export default Login;
