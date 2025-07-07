// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MLCourse from './MLCourse';
import Homepage from './Homepage';
import PythonCourse from './PythonCourse';
import WebDCourse from './Tigger';
import Register from './Regi';
import HelloWorld from './MLO';
import PowerBi from './Powerbi';
import MSExcel from './Excel';
import './App.css';
import Login from './Log';

function App() {
  return (
    <Router>

      <Routes>

        <Route
          path="/"
          element={
            <div className="container">
              
              <div className="logo">EASYLEARN</div>
              <div className="tagline">Empower your future with online learning</div>
              
              <Link className="btn" to="/homepage">Explore Courses</Link>
            </div>
            
            
          }
        />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/ml-course" element={<MLCourse />} />
        <Route path="/python-course" element={<PythonCourse />} />
        <Route path="/webd-course" element={<WebDCourse />} />
        <Route path="/hello-world" element={<HelloWorld/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/power-bi" element={<PowerBi/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/excel-course" element={<MSExcel/>}/>
        <Route path="/excel-course" element={<MSExcel/>}/>
        <Route path="/excel-course" element={<MSExcel/>}/>
        <Route path="/excel-course" element={<MSExcel/>}/>
        <Route path="/excel-course" element={<MSExcel/>}/>
        <Route path="/excel-course" element={<MSExcel/>}/>
        <Route path="/excel-course" element={<MSExcel/>}/>
        <Route path="/excel-course" element={<MSExcel/>}/>
      </Routes>
    </Router>
  );
}

export default App;
