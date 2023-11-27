// src/App.js

import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <Header />

      <Home />

      <AboutUs />

      <Footer />
      
    </div>

    
  );
}

export default App;

