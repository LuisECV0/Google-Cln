import React from 'react';
import '../styles/footer.css'
const Button = () => {
  return (
<footer className="footer">
      <div className="footer-top">
        <p>Perú</p>
      </div>

      <div className="footer-botton">

        <div className='botton-right'>
          <a href="#sobre-google">Sobre Google</a>
          <a href="#publicidad">Publicidad</a>
          <a href="#negocios">Negocios</a>
          <a href="#como-funciona-la-busqueda">Cómo funciona la Búsqueda</a>
        </div>

        <div className='botton-left'>
          <a href="#privacidad">Privacidad</a>
          <a href="#condiciones">Condiciones</a>
          <a href="#preferencias">Preferencias</a>
        </div>

      </div>
    </footer>
  );
}

export default Button;
