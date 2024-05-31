import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import Button from './components/Button';
import Barra from './components/Barra';

function App() {
  return (
    <div className="App">
      <Header />
      <Barra />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
