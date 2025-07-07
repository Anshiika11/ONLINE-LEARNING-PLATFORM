
import { Link } from 'react-router-dom';
import './course.css';
function WebDCourse() {
    return (
        <div className="webdcourse">
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
                <h1>Web Development</h1>
                <iframe
                    src="https://www.youtube.com/embed/Q33KBiDriJY"
                    width="600"
                    height="400"
                    title="Example iframe"
                    allowFullScreen
                    style={{ border: 'none', borderRadius: '8px' }}
                ></iframe>

                <p>This course is designed for complete beginners who want to start their journey in Web Development. You will learn about different technologies that are being used in the development. This course will start from basic to a developer level.</p>

            </main>
        </div>
    )
}
export default WebDCourse;