import React, { useState,useEffect } from 'react';

function Review() {
        return (
            <div className="aa-product-review-area">
                   <h4>2 Reviews for T-Shirt</h4> 
                   <ul className="aa-review-nav">
                     <li>
                        <div className="media">
                          <div className="media-left">
                            <a href="#">
                              <img className="media-object" src="img/testimonial-img-3.jpg" alt="girl image"/>
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading"><strong>Marla Jobs</strong> - <span>March 26, 2016</span></h4>
                            <div className="aa-product-rating">
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star-o"></span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="media-left">
                            <a href="#">
                              <img className="media-object" src="img/testimonial-img-3.jpg" alt="girl image"/>
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading"><strong>Marla Jobs</strong> - <span>March 26, 2016</span></h4>
                            <div className="aa-product-rating">
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star-o"></span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          </div>
                        </div>
                      </li>
                   </ul>
                   <h4>Add a review</h4>
                   <div className="aa-your-rating">
                     <p>Your Rating</p>
                     <a href="#"><span className="fa fa-star-o"></span></a>
                     <a href="#"><span className="fa fa-star-o"></span></a>
                     <a href="#"><span className="fa fa-star-o"></span></a>
                     <a href="#"><span className="fa fa-star-o"></span></a>
                     <a href="#"><span className="fa fa-star-o"></span></a>
                   </div>
                   
                   <form action="" className="aa-review-form">
                      <div className="form-group">
                        <label for="message">Your Review</label>
                        <textarea className="form-control" rows="3" id="message"></textarea>
                      </div>
                      <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name"/>
                      </div>  
                      <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="example@gmail.com"/>
                      </div>
                      <button type="submit" className="btn btn-default aa-review-submit">Submit</button>
                   </form>
                 </div>
        );
}

export default Review;