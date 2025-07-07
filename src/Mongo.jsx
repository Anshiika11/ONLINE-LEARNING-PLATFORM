import './course.css';
import { Link } from 'react-router-dom';
function HelloWorld() {
    return (
        <div className="helloworld">
           
                <header className="navbar">
                        <div className="logo">
                          <Link to="/">EASYLEARN</Link>
                        </div>
                        <nav className="nav-links">
                          <Link to="/register">Register</Link>
                          <Link to="/login">Login</Link>
                        </nav>
                      </header>
            <main className="course-container">
                <h1>Machine Learning 1O2</h1>
                <iframe
                    src="https://www.youtube.com/embed/7eh4d6sabA0"
                    width="600"
                    height="400"
                    title="Example iframe"
                    allowFullScreen
                    style={{ border: 'none', borderRadius: '8px' }}
                ></iframe>

                <p>This course is designed for complete beginners who want to start their journey in Machine Learning.This course leads you from a beginner's level to a professional level.</p>

            </main>
        </div>
    )
}
export default HelloWorld;