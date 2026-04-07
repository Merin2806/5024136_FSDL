import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./main.css";
import Home from "./pages/Home";
import Tracker from "./pages/Tracker";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/tracker"> Tracker</Link> | 
        <Link to="/about"> About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;