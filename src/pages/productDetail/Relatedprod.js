import React, { Component } from 'react';

function Relatedprod() {
        return (
            <div className="aa-product-related-item">
              <h3>Related Products</h3>
              <ul className="aa-product-catg aa-related-item-slider">
                
                <li>
                  <figure>
                    <a className="aa-product-img" href="#"><img src="img/man/polo-shirt-2.png" alt="polo shirt img"/></a>
                    <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                     <figcaption>
                      <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                      <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                    </figcaption>
                  </figure>                     
                  <div className="aa-product-hvr-content">
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                    <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                            
                  </div>
                  <span className="aa-badge aa-sale" href="#">SALE!</span>
                </li>                                                                            
              </ul>
              
              <div className="modal fade" id="quick-view-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">                      
                    <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      <div className="row">
                        
                        <div className="col-md-6 col-sm-6 col-xs-12">                              
                          <div className="aa-product-view-slider">                                
                            <div className="simpleLens-gallery-container" id="demo-1">
                              <div className="simpleLens-container">
                                  <div className="simpleLens-big-image-container">
                                      <a className="simpleLens-lens-image" data-lens-image="img/view-slider/large/polo-shirt-1.png">
                                          <img src="img/view-slider/medium/polo-shirt-1.png" className="simpleLens-big-image"/>
                                      </a>
                                  </div>
                              </div>
                              <div className="simpleLens-thumbnails-container">
                                  <a href="#" className="simpleLens-thumbnail-wrapper"
                                     data-lens-image="img/view-slider/large/polo-shirt-1.png"
                                     data-big-image="img/view-slider/medium/polo-shirt-1.png">
                                      <img src="img/view-slider/thumbnail/polo-shirt-1.png"/>
                                  </a>                                    
                                  <a href="#" className="simpleLens-thumbnail-wrapper"
                                     data-lens-image="img/view-slider/large/polo-shirt-3.png"
                                     data-big-image="img/view-slider/medium/polo-shirt-3.png">
                                      <img src="img/view-slider/thumbnail/polo-shirt-3.png"/>
                                  </a>

                                  <a href="#" className="simpleLens-thumbnail-wrapper"
                                     data-lens-image="img/view-slider/large/polo-shirt-4.png"
                                     data-big-image="img/view-slider/medium/polo-shirt-4.png">
                                      <img src="img/view-slider/thumbnail/polo-shirt-4.png"/>
                                  </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <div className="aa-product-view-content">
                            <h3>T-Shirt</h3>
                            <div className="aa-price-block">
                              <span className="aa-product-view-price">$34.99</span>
                              <p className="aa-product-avilability">Avilability: <span>In stock</span></p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis animi, veritatis quae repudiandae quod nulla porro quidem, itaque quis quaerat!</p>
                            <h4>Size</h4>
                            <div className="aa-prod-view-size">
                              <a href="#">S</a>
                              <a href="#">M</a>
                              <a href="#">L</a>
                              <a href="#">XL</a>
                            </div>
                            <div className="aa-prod-quantity">
                              <form action="">
                                <select name="" id="">
                                  <option value="0" selected="1">1</option>
                                  <option value="1">2</option>
                                  <option value="2">3</option>
                                  <option value="3">4</option>
                                  <option value="4">5</option>
                                  <option value="5">6</option>
                                </select>
                              </form>
                              <p className="aa-prod-category">
                                Category: <a href="#">Polo T-Shirt</a>
                              </p>
                            </div>
                            <div className="aa-prod-view-bottom">
                              <a href="#" className="aa-add-to-cart-btn"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <a href="#" className="aa-add-to-cart-btn">View Details</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>                        
                  </div>
                </div>
              </div>
            </div>
        );
}

export default Relatedprod;