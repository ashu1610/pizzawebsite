import React from 'react';
import './About.css';

function About() {
    return (
        <section>
            <div className='about-section'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-7 col-md-12 mb-lg-0 mb-5'>
                            <div className='card border-0'>
                                <img src='./images/img/img-1.png' className='img-fluid'></img>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-12 text-sec'>
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consecteture adipiscing elit. Etim et purus a odio finibus bibendum in sit
                                amet leo. Mauris feugiat erat tellus.
                            </p>
                            <button className='main-btn mt-4'>Learn More</button>
                        </div>
                    </div>
                </div>

                <div className='container food-type'>
                    <div className='row align-items-center'>
                        <div className='col-lg-5 col-md-12 text-sec mb-lg-0 mb-5'>
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consecteture adipiscing elit. Etim et purus a odio finibus bibendum in sit
                                amet leo. Mauris feugiat erat tellus. there live the blind texts.
                            </p>
                            <ul className='list-unstyled py-3'>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                                <li>Erat volutpat aliquet imperdiet.</li>
                                <li>purus a odio finibus bibendum.</li>
                            </ul>
                            <button className='main-btn mt-4'>Learn More</button>
                        </div>
                        <div className='col-lg-7 col-md-12 '>
                            <div className='card border-0'>
                                <img src='./images/img/img-2.png' className='img-fluid'></img>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
