import React from 'react';
import './Home.css';
import logo from './logo.png';
function Home() {
  return (
    <div className="body">
    <div className="text">VRSUPPORT</div>
    <div className="image">
    <img src={logo} alt="Logo" />
    </div>
    <div className="loading-circle"></div>
  </div>
);
}

export default Home
