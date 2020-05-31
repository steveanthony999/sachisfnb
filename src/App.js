import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />

      {/* <div className='hero'>
        <div className='hero-left'>
          <div className='cta'>
            <h1>Feelin' Snackish?</h1>
            <p>
              Give your guests the <span>BEST</span> in high-end candies,
              snacks, and non-alcoholic beverages
            </p>
            <a href='#' className='cta-btn'>
              Give Me Chocolate! &nbsp;&nbsp;&nbsp;
              <span className='material-icons'>double_arrow</span>
            </a>
          </div>
        </div>
        <div className='hero-right'></div>
      </div> */}
      <About />
      <Products />
    </div>
  );
}

export default App;

// feelin' snackish?  Give your guests the best in high-end candies, snacks, and non-alcoholic beverages!
