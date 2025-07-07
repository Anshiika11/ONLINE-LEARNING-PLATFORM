import './course.css';
import { Link } from 'react-router-dom';
function PowerBi() {
    return (
        <div className="powerbi">
           
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
                <h1>Microsoft Power Bi</h1>
                <iframe
                    src="https://www.youtube.com/embed/7eh4d6sabA0"
                    width="600"
                    height="400"
                    title="Example iframe"
                    allowFullScreen
                    style={{ border: 'none', borderRadius: '8px' }}
                ></iframe>

                <p>This course is designed for beginners in data analysis, business students, analysts, and professionals who want to visualize data effectively.</p>

            </main>
        </div>
    )
}
export default PowerBi;