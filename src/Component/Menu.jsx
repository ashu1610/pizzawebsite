import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <section className='our-menu p-5'>
        <div className='container text-center'>
            <h2 className='pb-4'>Our Menu</h2>
            <div className='row'>
                <div className='col-6 col-sm-2 mb-4 mb-lg-0'>
                    <div className='card'>
                        <div className='cat-image'>
                            <a className='link_category_product'>
                                <img src='./images/img/category1.png' className='img-fluid'></img>
                            </a>
                        </div>
                        <div className='cat-title'>
                            <a>Pizza</a>
                        </div>
                    </div>
                </div>

                <div className='col-6 col-sm-2 mb-4 mb-lg-0'>
                    <div className='card'>
                        <div className='cat-image'>
                            <a className='link_category_product'>
                                <img src='./images/img/category2.png' className='img-fluid'></img>
                            </a>
                        </div>
                        <div className='cat-title'>
                            <a>Sauces</a>
                        </div>
                    </div>
                </div>

                <div className='col-6 col-sm-2 mb-4 mb-lg-0'>
                    <div className='card'>
                        <div className='cat-image'>
                            <a className='link_category_product'>
                                <img src='./images/img/category3.png' className='img-fluid'></img>
                            </a>
                        </div>
                        <div className='cat-title'>
                            <a>Combo</a>
                        </div>
                    </div>
                </div>

                <div className='col-6 col-sm-2 mb-4 mb-lg-0'>
                    <div className='card'>
                        <div className='cat-image'>
                            <a className='link_category_product'>
                                <img src='./images/img/category4.png' className='img-fluid'></img>
                            </a>
                        </div>
                        <div className='cat-title'>
                            <a>Kids menus</a>
                        </div>
                    </div>
                </div>

                <div className='col-6 col-sm-2 mb-4 mb-lg-0'>
                    <div className='card'>
                        <div className='cat-image'>
                            <a className='link_category_product'>
                                <img src='./images/img/category5.png' className='img-fluid'></img>
                            </a>
                        </div>
                        <div className='cat-title'>
                            <a>Chicken</a>
                        </div>
                    </div>
                </div>

                <div className='col-6 col-sm-2 mb-4 mb-lg-0'>
                    <div className='card'>
                        <div className='cat-image'>
                            <a className='link_category_product'>
                                <img src='./images/img/category6.png' className='img-fluid'></img>
                            </a>
                        </div>
                        <div className='cat-title'>
                            <a>Box meals</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Menu
