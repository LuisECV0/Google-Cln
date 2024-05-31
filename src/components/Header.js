import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <a href="https://mail.google.com" className="header-link">Gmail</a>
        <a href="https://www.google.com/imghp" className="header-link">Images</a>
        <div className="header-icons">
          <i className="fa fa-th header-icon"></i>
        </div>
        <a className='Btn-login'>Iniciar sesión</a>
      </nav>
    </header>
  );
}

export default Header;
