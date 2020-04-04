import React, { Component } from 'react'

export default class Popular extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <section id="aa-popular-category">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="aa-popular-category-area">

                                    <ul className="nav nav-tabs aa-products-tab">
                                        <li className="active"><a href="#popular" data-toggle="tab">Popular</a></li>
                                        <li><a href="#featured" data-toggle="tab">Featured</a></li>
                                        <li><a href="#latest" data-toggle="tab">Latest</a></li>
                                    </ul>

                                    <div className="tab-content">

                                        <div className="tab-pane fade in active" id="popular">
                                            <ul className="aa-product-catg aa-popular-slider">

                                                <li>
                                                    <figure>
                                                        <a className="aa-product-img" href="#"><img src={process.env.PUBLIC_URL + 'assets/img/women/girl-1.png'} alt="polo shirt img" /></a>
                                                        <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                                        <figcaption>
                                                            <h4 className="aa-product-title"><a href="#">This is Title</a></h4>
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
                                            <a className="aa-browse-btn" href="#">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                                        </div>



                                        <div className="tab-pane fade" id="featured">
                                            <ul className="aa-product-catg aa-featured-slider">

                                                <li>
                                                    <figure>
                                                        <a className="aa-product-img" href="#"><img src={process.env.PUBLIC_URL + 'assets/img/women/girl-1.png'} alt="polo shirt img" /></a>
                                                        <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                                        <figcaption>
                                                            <h4 className="aa-product-title"><a href="#">This is Title</a></h4>
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
                                            <a className="aa-browse-btn" href="#">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                                        </div>



                                        <div className="tab-pane fade" id="latest">
                                            <ul className="aa-product-catg aa-latest-slider">

                                                <li>
                                                    <figure>
                                                        <a className="aa-product-img" href="#"><img src={process.env.PUBLIC_URL + 'assets/img/women/girl-1.png'} alt="polo shirt img" /></a>
                                                        <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                                        <figcaption>
                                                            <h4 className="aa-product-title"><a href="#">This is Title</a></h4>
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
                                            <a className="aa-browse-btn" href="#">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        )
    }
}