import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

    const [shome, setShome] = useState(true);
    const [sabout, setAbout] = useState(false);
    const [sexplore, setExplore] = useState(false);
    const [sreview , setSreview] = useState(false);

    const yellowHome = ()=>{
        setShome(true);
        setAbout(false);
        setExplore(false);
        setSreview(false);
    }

    const yellowAbout = ()=>{
        setShome(false);
        setAbout(true);
        setExplore(false);
        setSreview(false);
    }

    const yellowExplore = ()=>{
        setShome(false);
        setAbout(false);
        setExplore(true);
        setSreview(false);
    }
    const yellowReview = ()=>{
        setShome(false);
        setAbout(false);
        setExplore(false);
        setSreview(true);
    }

    useEffect(() => {
        let navBar = document.querySelectorAll(".nav-link");
        let navCollapse = document.querySelector(".navbar-collapse.collapse");

        navBar.forEach((a) => {
            a.addEventListener("click", () => {
                navCollapse.classList.remove("show");
            })
        })

        yellowHome();
        yellowAbout();
        yellowExplore();
        yellowReview();
    }, []);



    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark navigation-wrap">
                    <div className="container">
                        <a className="navbar-brand">
                            <Link to='/' >
                                <img src='images/logo.png' className='img-fluid' />
                            </Link>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <i className="fas fa-stream navbar-toggler-icon pt-1"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" >
                                        <Link to='/' className={shome? 'yellow':'white'} onClick={yellowHome}>Home</Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <Link to='/about' className={sabout? 'yellow':'white'} onClick={yellowAbout}>About Us</Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <Link to='/explore' className={sexplore? 'yellow':'white'} onClick={yellowExplore}>Explore Foods</Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >
                                        <Link to='/testimonials' className={sreview? 'yellow':'white'} onClick={yellowReview} >Reviews</Link>
                                    </a>
                                </li>
                                <li>
                                    <button className='main-btn' >1200 345 123</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
