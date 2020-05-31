import React from 'react';

import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <div className='cta'>
          <h1>Feelin' Snackish?</h1>
          <p>
            Give your guests the <span>BEST</span> in high-end candies, snacks,
            and non-alcoholic beverages
          </p>
          <a href='#' className='cta-btn'>
            Give Me Chocolate! &nbsp;&nbsp;&nbsp;
            <span className='material-icons'>double_arrow</span>
          </a>
        </div>
      </div>
      <div className='hero-right'></div>
    </div>
  );
};

export default Hero;
