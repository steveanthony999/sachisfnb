import React from 'react';

import './Products.css';

const Products = () => {
  return (
    <section id='products'>
      <div className='container center'>
        <h2>Featured Products</h2>
        <div className='row'>
          <div className='products'>
            <div className='col s12 m6 l3'>
              <div className='card'>
                <div className='img1'></div>
              </div>
            </div>
            <div className='col s12 m6 l3'>
              <div className='card'>
                <div className='img2'></div>
              </div>
            </div>
            <div className='col s12 m6 l3'>
              <div className='card'>
                <div className='img3'></div>
              </div>
            </div>
            <div className='col s12 m6 l3'>
              <div className='card'>
                <div className='img4'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col s12 m6 l3'>
            <div className='card'>
              <div className='img5'></div>
            </div>
          </div>
          <div className='col s12 m6 l3'>
            <div className='card'>
              <div className='img6'></div>
            </div>
          </div>
          <div className='col s12 m6 l3'>
            <div className='card'>
              <div className='img7'></div>
            </div>
          </div>
          <div className='col s12 m6 l3'>
            <div className='card'>
              <div className='img8'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
