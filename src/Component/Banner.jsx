import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <section>
      <div className='container-fluid px-0 top-banner'>
          <div className='container'>
              <div className='row'>
                  <div className='col-lg-5 col-md-6'>
                      <h1>UNLIMITED <br/> MEDIUM <span>PIZZA</span></h1>
                      <h2>Medium 2-topping* pizza</h2>
                      <p>*Additinal charge for premium toppings. Minimum of 2 required.</p>
                      <div className='mt-4'>
                          <button className='main-btn'>Order Now <i className='fas fa-shopping-basket ps-3'></i></button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Banner
