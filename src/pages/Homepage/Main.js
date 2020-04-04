import React, { Component } from 'react';
import Product from './Products';
import Latestblog from './Latestblog';
import Popular from './Popular';
import Clintbrand from './Clintbrand';

class Main extends Component {
  render() {

    return (
      <>
        {/*<section id="aa-slider">
          <div className="aa-slider-area">
            <div id="sequence" className="seq">
              <div className="seq-screen">
                <ul className="seq-canvas">
                  <li>
                    <div className="seq-model">
                      <img data-seq src={process.env.PUBLIC_URL + 'assets/img/slider/1.jpg'} alt="Men slide img" />
                    </div>
                    <div className="seq-title">
                      <span data-seq>Save Up to 75% Off</span>
                      <h2 data-seq>Men Collection</h2>
                      <p data-seq>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illum.</p>
                      <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</a>
                    </div>
                  </li>
                  <li>
                    <div className="seq-model">
                      <img data-seq src={process.env.PUBLIC_URL + 'assets/img/slider/2.jpg'} alt="Wristwatch slide img" />
                    </div>
                    <div className="seq-title">
                      <span data-seq>Save Up to 40% Off</span>
                      <h2 data-seq>Wristwatch Collection</h2>
                      <p data-seq>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illum.</p>
                      <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</a>
                    </div>
                  </li>
                  <li>
                    <div className="seq-model">
                      <img data-seq src={process.env.PUBLIC_URL + 'assets/img/slider/3.jpg'} alt="Women Jeans slide img" />
                    </div>
                    <div className="seq-title">
                      <span data-seq>Save Up to 75% Off</span>
                      <h2 data-seq>Jeans Collection</h2>
                      <p data-seq>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illum.</p>
                      <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</a>
                    </div>
                  </li>

                  <li>
                    <div className="seq-model">
                      <img data-seq src={process.env.PUBLIC_URL + 'assets/img/slider/4.jpg'} alt="Shoes slide img" />
                    </div>
                    <div className="seq-title">
                      <span data-seq>Save Up to 75% Off</span>
                      <h2 data-seq>Exclusive Shoes</h2>
                      <p data-seq>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illum.</p>
                      <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</a>
                    </div>
                  </li>

                  <li>
                    <div className="seq-model">
                      <img data-seq src={process.env.PUBLIC_URL + 'assets/img/slider/5.jpg'} alt="Male Female slide img" />
                    </div>
                    <div className="seq-title">
                      <span data-seq>Save Up to 50% Off</span>
                      <h2 data-seq>Best Collection</h2>
                      <p data-seq>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illum.</p>
                      <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn">SHOP NOW</a>
                    </div>
                  </li>
                </ul>
              </div>

              <fieldset className="seq-nav" aria-controls="sequence" aria-label="Slider buttons">
                <a type="button" className="seq-prev" aria-label="Previous"><span className="fa fa-angle-left"></span></a>
                <a type="button" className="seq-next" aria-label="Next"><span className="fa fa-angle-right"></span></a>
              </fieldset>
            </div>
          </div>
        </section>*/}


        {/*<section id="aa-promo">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-promo-area">
                  <div className="row">

                    <div className="col-md-5 no-padding">
                      <div className="aa-promo-left">
                        <div className="aa-promo-banner">
                          <img src={process.env.PUBLIC_URL + 'assets/img/promo-banner-1.jpg'} alt="img" />
                          <div className="aa-prom-content">
                            <span>75% Off</span>
                            <h4><a href="#">For Women</a></h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-7 no-padding">
                      <div className="aa-promo-right">
                        <div className="aa-single-promo-right">
                          <div className="aa-promo-banner">
                            <img src={process.env.PUBLIC_URL + 'assets/img/promo-banner-3.jpg'} alt="img" />
                            <div className="aa-prom-content">
                              <span>Exclusive Item</span>
                              <h4><a href="#">For Men</a></h4>
                            </div>
                          </div>
                        </div>
                        <div className="aa-single-promo-right">
                          <div className="aa-promo-banner">
                            <img src={process.env.PUBLIC_URL + 'assets/img/promo-banner-2.jpg'} alt="img" />
                            <div className="aa-prom-content">
                              <span>Sale Off</span>
                              <h4><a href="#">On Shoes</a></h4>
                            </div>
                          </div>
                        </div>
                        <div className="aa-single-promo-right">
                          <div className="aa-promo-banner">
                            <img src={process.env.PUBLIC_URL + 'assets/img/promo-banner-4.jpg'} alt="img" />
                            <div className="aa-prom-content">
                              <span>New Arrivals</span>
                              <h4><a href="#">For Kids</a></h4>
                            </div>
                          </div>
                        </div>
                        <div className="aa-single-promo-right">
                          <div className="aa-promo-banner">
                            <img src={process.env.PUBLIC_URL + 'assets/img/promo-banner-5.jpg'} alt="img" />
                            <div className="aa-prom-content">
                              <span>25% Off</span>
                              <h4><a href="#">For Bags</a></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>*/}



        <Product />



        <section id="aa-banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="aa-banner-area">
                    <a href="#"><img src={process.env.PUBLIC_URL + 'assets/img/fashion-banner.jpg'} alt="fashion banner img" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Popular />

        <section id="aa-support">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-support-area">

                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="aa-support-single">
                      <span className="fa fa-truck"></span>
                      <h4>FREE SHIPPING</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis.</p>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="aa-support-single">
                      <span className="fa fa-clock-o"></span>
                      <h4>30 DAYS MONEY BACK</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis.</p>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="aa-support-single">
                      <span className="fa fa-phone"></span>
                      <h4>SUPPORT 24/7</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="aa-testimonial">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-testimonial-area">
                  <ul className="aa-testimonial-slider">

                    <li>
                      <div className="aa-testimonial-single">
                        <img className="aa-testimonial-img" src={process.env.PUBLIC_URL + 'assets/img/testimonial-img-2.jpg'} alt="testimonial img" />
                        <span className="fa fa-quote-left aa-testimonial-quote"></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui!consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui.</p>
                        <div className="aa-testimonial-info">
                          <p>Allison</p>
                          <span>Designer</span>
                          <a href="#">Dribble.com</a>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="aa-testimonial-single">
                        <img className="aa-testimonial-img" src={process.env.PUBLIC_URL + 'assets/img/testimonial-img-1.jpg'} alt="testimonial img" />
                        <span className="fa fa-quote-left aa-testimonial-quote"></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui!consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui.</p>
                        <div className="aa-testimonial-info">
                          <p>KEVIN MEYER</p>
                          <span>CEO</span>
                          <a href="#">Alphabet</a>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="aa-testimonial-single">
                        <img className="aa-testimonial-img" src={process.env.PUBLIC_URL + 'assets/img/testimonial-img-3.jpg'} alt="testimonial img" />
                        <span className="fa fa-quote-left aa-testimonial-quote"></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui!consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui.</p>
                        <div className="aa-testimonial-info">
                          <p>Luner</p>
                          <span>COO</span>
                          <a href="#">Kinatic Solution</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Latestblog />
        <Clintbrand />




      </>
    );
  }
}

export default Main;