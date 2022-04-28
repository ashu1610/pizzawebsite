import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
        <div className='footer pt-5'>
            <div  className='container'>
                <div className='row'>
                    <div className='col-md-6 text-center'>
                        <div className='footer-social pb-4 text-center'>
                            <a><i className='fab fa-facebook-f'></i></a>
                            <a><i className='fab fa-twitter'></i></a>
                            <a><i className='fab fa-youtube'></i></a>
                            <a><i className='fab fa-dribbble'></i></a>
                            <a><i className='fab fa-linkedin'></i></a>
                            <a><i className='fab fa-instagram'></i></a>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <form className='newsletter'>
                            <div className='d-flex'>
                                <input className='form-control' placeholder='Email Address Here' type='email'/>
                                <button className='main-btn' type='submit'>Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-sm-12'>
                        <div className='footer-copy'>
                            <div className='copy-right text-center pt-5'>
                                <p className='text-right'>© 2022. Ashish Yadav . All right reserverd</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
