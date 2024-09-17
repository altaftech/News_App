import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import News from './News';
import './App.css'

const App = () => {


  return (<>

    <Router>
      <header className="p-2 bg-black text-white sticky-top">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none show1">
              <img src="favicon.ico" alt="logo" width="40" height="32" />
              <Link className="navbar-brand ms-2 text-white" to="/">NewsBaba</Link>
              <img src="home.png" alt="home" width="40" className='hide' />
            </Link>
            <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0 ms-auto">
              <li className="nav-item"><Link className="nav-link text-white" aria-current="page" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/general">General</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/technology">Technology</Link></li>
            </ul>
          </div>
        </div>
      </header>

      <Routes>
        <Route exact path="/" element={<News key="general" country="in" category="general" />} />
        <Route exact path="/home" element={<News key="general" country="in" category="general" />} />
        <Route exact path="/business" element={<News key="business" country="in" category="business" />} />
        <Route exact path="/entertainment" element={<News country="in" category="entertainment" />} />
        <Route exact path="/general" element={<News key="general" country="in" category="general" />} />
        <Route exact path="/health" element={<News key="health" country="in" category="health" />} />
        <Route exact path="/science" element={<News key="science" country="in" category="science" />} />
        <Route exact path="/sports" element={<News key="sports" country="in" category="sports" />} />
        <Route exact path="/technology" element={<News key="technology" country="in" category="technology" />} />
      </Routes>
    </Router>
  </>
  );

};

export default App;


