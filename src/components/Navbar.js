import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar-fixed'>
      <nav>
        <div className='nav-wrapper container'>
          <a href='#' className='brand-logo'>
            Sachi's
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='#about'>ABOUT</a>
            </li>
            <li>
              <a href='#products'>PRODUCTS</a>
            </li>
            <li>
              <a href='#'>BLOG</a>
            </li>
            <li>
              <a href='#'>CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
