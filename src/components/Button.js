import React from 'react';
import '../styles/Button.css'

const Button = () => {
  return (
    <div className='button'>

      <div className="button-container">
        <button className="google-search-button">Buscar con Google</button>
        <button className="google-search-button">Voy a tener suerte</button>
      </div>
      
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

export default Button;
