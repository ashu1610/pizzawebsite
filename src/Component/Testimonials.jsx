import React from 'react';
import './Testimonials.css';

function Testimonials() {
    return (
        <section>
            <div className='testimonials-section'>
                <div className='container text-center'>
                    <div className='text-center pb-4'>
                        <h2>Testimonials</h2>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-lg-10 offset-lg-1'>
                            <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className='carousel-caption'>
                                            <img src="./images/review/review-1.jpg" />
                                            <p>"Far far away, behind the word mountains, far from the coutnries vokalia and
                                                Consonantia, there live the blind texts."
                                            </p>
                                            <h5>Johnthan Doe - UX Designer</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='carousel-caption'>
                                            <img src="./images/review/review-2.jpg" />
                                            <p>"Far far away, behind the word mountains, far from the coutnries vokalia and
                                                Consonantia, there live the blind texts."
                                            </p>
                                            <h5>Johnthan Doe - UX Designer</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                    <div className='carousel-caption'>
                                            <img src="./images/review/review-1.jpg" />
                                            <p>"Far far away, behind the word mountains, far from the coutnries vokalia and 
                                                Consonantia, there live the blind texts."
                                            </p>
                                            <h5>Maccy Doe - Front End</h5>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
