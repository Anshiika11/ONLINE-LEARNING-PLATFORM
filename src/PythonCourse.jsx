
import { Link } from 'react-router-dom';
import './course.css';
function PythonCourse() {
    return (
        <div className="pythoncourse">
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
                <h1>Python Course</h1>
                <iframe
                    src="https://www.youtube.com/embed/_uQrJ0TkZlc"
                    width="600"
                    height="400"
                    title="Example iframe"
                    allowFullScreen
                    style={{ border: 'none', borderRadius: '8px' }}
                ></iframe>

                <p>This course is designed for complete beginners who want to start their journey in Python programming. You will learn about variables, data types, control structures, functions, and basic libraries.</p>
            </main>
        </div>
    )
}
export default PythonCourse;