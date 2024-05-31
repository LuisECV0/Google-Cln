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

      <input 
        type="text"
        placeholder="Buscar en Google o escribir una URL" 
      /> 

      <div className="languages">
        <p>
          Ofrecido por Google en:
          <a href="#quechua">Español (Latinoamérica)</a>
          <a href="#espanol">Quechua</a>
        </p>
      </div>
    </div>
  );
}

export default SearchBar;
