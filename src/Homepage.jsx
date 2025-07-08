import './homepage.css';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error("Error fetching courses:", err));
  }, []);
  return (
    
    <div className="homepage">
      <header className="navbar">
        <div className="logo">
          <Link to="/">EASYLEARN</Link>
        </div>
        <nav className="nav-links">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <main className="main-content">
        <h1>Available Courses</h1>
        <section className="course-grid">
          <div className="course-card">
            
            <h2>Python for Beginners</h2>
            <img src="public/python.webp" alt="Python Course" className="course-image" />
            <p>Learn the basics of Python programming.</p>
            <Link to="/python-course">View Course</Link>
          </div>
          <div className="course-card">
            <h2>Machine Learning 1O1</h2>
            <img src="public/ai-chip-artificial-intelligence-future-technology-innovation.jpg" alt="ML" className="course-image" />
            <p>Start your ML journey with simple algorithms.</p>
            <Link to="/ml-course">View Course</Link>
          </div>
          <div className="course-card">
            <h2>Web Development</h2>
            <img src="public/programming-background-collage-2.jpg" alt="Webd" className="course-image" />
            <p>HTML, CSS, and JavaScript from scratch.</p>
            <Link to="/webd-course">View Course</Link>
          </div>
          <div className="course-card">
            <h2>Microsoft Power Bi</h2>
            <img src="public/representation-user-experience-interface-design.jpg" alt="Power bi" className="course-image" />
            <p>Power Bi for desktop</p>
            <Link to="/power-bi">View Course</Link>
          </div>
          <div className="course-card">
            <h2>Microsoft Excel</h2>
            <img src="public/103564-ON3T23-963.jpg" alt="Excel" className="course-image" />
            <p>Excel from beginner to master</p>
            <Link to="/excel-course">View Course</Link>
          </div>
          <div className="course-card">
            <h2>Java for beginners </h2>
            <img src="public/pexels-markusspiske-177598.jpg" alt="Java" className="course-image" />
            <p>Java for beginners </p>
            <Link to="/webd-course">View Course</Link>
          </div>
          <div className="course-card">
            <h2>AI-based copywriting course</h2>
            <img src="public/robot-handshake-human-background-futuristic-digital-age.jpg" alt="AI" className="course-image" />
            <p>Become a Pro Copywriter. </p>
            <Link to="/webd-course">View Course</Link>
          </div>
          <div className="course-card">
            <h2>Upgrade your social media with chatGpt</h2>
            <img src="public/hand-holding-smartphone-social-media-concept.jpg" alt="Chatgpt" className="course-image" />
            <p>Fueling ideas and making connections</p>
            <Link to="/webd-course">View Course</Link>
          </div>
          <div className="course-card">
            <h2>React.js for Frontend Developers</h2>
            <img src="public/lautaro-andreani-UYsBCu9RP3Y-unsplash.jpg" alt="Chatgpt" className="course-image" />
            <p>JavaScript library used to build interactive user interfaces </p>
            <Link to="/webd-course">View Course</Link>
          </div>
          <div className="course-card">
            <h2>Node.js & Express</h2>
            <img src="public/favour-usifo-8w8yjqDs3-c-unsplash.jpg" alt="Chatgpt" className="course-image" />
            <p>Powerful combo for building the backend of modern web applications.</p>
            <Link to="/webd-course">View Course</Link>
          </div>
          <div className="course-card">
            <h2>Git & GitHub Version Control</h2>
            <img src="public/rubaitul-azad-HLQDfaJUTVI-unsplash.jpg" alt="Chatgpt" className="course-image" />
            <p>Track changes to your code over time.</p>
            <Link to="/webd-course">View Course</Link>
          </div>
          <div className="course-card">
            <h2>Natural Language Processing </h2>
            <img src="public/shutterstock_2317041353.webp" alt="Chatgpt" className="course-image" />
            <p>Natural Language Processing Basics</p>
            <Link to="/webd-course">View Course</Link>
          </div>
          <div className="course-card">
            <h2>Machine learning 1O2</h2>
            <img src="public/arseny-togulev-MECKPoKJYjM-unsplash.jpg" alt="Chatgpt" className="course-image" />
            <p>ML Projects with Python (Hands-on)</p>
            <Link to="/hello-world">View Course</Link>
          </div>
          <div className="course-card">
            <h2>JavaScript</h2>
            <img src="public/growtika-qaedPly-Uro-unsplash.jpg" alt="Chatgpt" className="course-image" />
            <p>JavaScript : Interactive and dynamic.</p>
            <Link to="/webd-course">View Course</Link>
          </div>
          <div className="course-card">
            <h2>MongoDb</h2>
            <img src="public/rubaitul-azad-cijiWIwsMB8-unsplash.jpg" alt="Chatgpt" className="course-image" />
            <p>MongoDb - NoSQL database</p>
            <Link to="/webd-course">View Course</Link>
          </div>
          <div className="course-card">
            <h2>Data Science</h2>
            <img src="public/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg" alt="Chatgpt" className="course-image" />
            <p>The Data science course</p>
            <Link to="/webd-course">View Course</Link>
          </div>

        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 EASYLEARN. All rights reserved.</p>
      </footer>
    </div>
  
  );
}

export default Homepage;
