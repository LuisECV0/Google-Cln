import React from 'react';
import '../styles/Barra.css';
import GoogleLogo from '../sources/google.png';

function SearchBar() {
  return (
    <div className="search-bar">
      <img 
        src={GoogleLogo}
        alt="logo de google"
      />

      <div className="input-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input 
          type="text"
          placeholder="Buscar en Google o escribir una URL" 
        />
        <i className="fa-solid fa-microphone"></i>
      </div>

    </div>
  );
}

export default SearchBar;
