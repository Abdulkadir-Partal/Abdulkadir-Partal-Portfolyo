// src/components/Navbar.js
import React from 'react';
import '../index'; // Doğru import edildiğinden emin ol

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-links">
          <li><a href="#home">Anasayfa</a></li>
          <li><a href="#about">Hakkımda</a></li>
          <li><a href="#experience">Deneyim</a></li>
          <li><a href="#skills">Yetenekler</a></li>
          <li><a href="#projects">Projeler</a></li>
          
          
          <li><a href="#contact">İletişim</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
