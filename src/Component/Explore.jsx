import React from 'react';
import './Explore.css';

function Explore() {
    return (
        <section>
            <div className='explore-food'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='text-content text-center'>
                                <h2>Explore Our Foods</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                    pariatur.</p>
                            </div>
                        </div>
                    </div>

                    <div className='row pt-5'>
                        <div className='col-lg-4 col-md-6 mb-lg-0 mb-5'>
                            <div className='card border'>
                                <img src='./images/img/img-3.jpg' className='img-fluid'/>
                                <div className='p-3'>
                                    <h5>10 Reasons To Do A Digital Detox Challenge</h5>
                                    <p>Ac haca ullamcorper donec ante habi tasse donec imperdiet eturips varius per a 
                                        augue magne hac. Nac hac...
                                    </p>
                                    <button className='mt-2 main-btn '>Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 mb-lg-0 mb-5'>
                            <div className='card border'>
                                <img src='./images/img/img-4.jpg' className='img-fluid'/>
                                <div className='p-3'>
                                    <h5>The Utimate Hangover Burger: Egg in a Hole Burger Grilled Cheese</h5>
                                    <p>Ac haca ullamcorper donec ante habi tasse donec imperdiet eturips varius per a 
                                        augue magne hac. Nac hac...
                                    </p>
                                    <button className='mt-2 main-btn '>Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 mb-lg-0 mb-5'>
                            <div className='card border'>
                                <img src='./images/img/img-5.jpg' className='img-fluid'/>
                                <div className='p-3'>
                                    <h5>Traditional Soft Pretzels with Sweet Beer Cheese</h5>
                                    <p>Ac haca ullamcorper donec ante habi tasse donec imperdiet eturips varius per a 
                                        augue magne hac. Nac hac...
                                    </p>
                                    <button className='mt-2 main-btn '>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Explore
