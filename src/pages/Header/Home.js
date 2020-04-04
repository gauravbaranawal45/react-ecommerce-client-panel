import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header_Cart from './header_Cart';
import { storeCart } from '../../redux/action/action';
let token = JSON.parse(localStorage.getItem('_token'));
// alert(token)
class Home extends Component {
  constructor(props) {
        super(props)
        this.state = { data: [] ,Cart:''}
  }
  
logout = () => {
  localStorage.removeItem('_token');
  window.location="/";
}

  render() {
    
    return (
      <>
        <div id="wpf-loader-two">
          <div className="wpf-loader-two-inner">
            <span>Loading</span>
          </div>
        </div>
        <a className="scrollToTop" href="#"><i className="fa fa-chevron-up"></i></a>
        <header id="aa-header">
          <div className="aa-header-top">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="aa-header-top-area">
                    <div className="aa-header-top-left">
                      <div className="aa-language">
                        <div className="dropdown">
                          <a className="btn dropdown-toggle" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <img src={process.env.PUBLIC_URL + '/assets/img/flag/english.jpg'} alt="english flag" />ENGLISH
                      <span className="caret"></span>
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a href="#"><img src={process.env.PUBLIC_URL + '/assets/img/flag/french.jpg'} alt="" />FRENCH</a></li>
                            <li><a href="#"><img src={process.env.PUBLIC_URL + '/assets/img/flag/english.jpg'} alt="" />ENGLISH</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="aa-currency">
                        <div className="dropdown">
                          <a className="btn dropdown-toggle" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <i className="fa fa-usd"></i>USD
                      <span className="caret"></span>
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a href="#"><i className="fa fa-euro"></i>EURO</a></li>
                            <li><a href="#"><i className="fa fa-jpy"></i>YEN</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="cellphone hidden-xs">
                        <p><span className="fa fa-phone"></span>00-62-658-658</p>
                      </div>
                    </div>
                    <div className="aa-header-top-right">
                      <ul className="aa-head-top-nav-right">
                        <li><Link to="account">My Account</Link></li>
                        <li className="hidden-xs"><Link to="wishlist">Wishlist</Link></li>
                        <li className="hidden-xs"><Link to="cart">My Cart</Link></li>
                        <li className="hidden-xs"><Link to="checkout">Checkout</Link></li>
                        {
                          (token==null) ?
                          
                          <li>
                          <Link to="account" data-toggle="modal" data-target="#login-modal">Login
                          </Link>
                        </li>
                        : 
                        <>
                        <li>
                          <Link  data-toggle="modal" data-target="#login-modal">{token.name}<span class="caret"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" onClick={this.logout} data-toggle="modal" data-target="#login-modal">Logout
                          </Link>
                        </li>
                        </>
                        }
                       </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aa-header-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="aa-header-bottom-area">
                    <div className="aa-logo">
                      <Link to="/">
                        <span className="fa fa-shopping-cart"></span>
                        <p>daily<strong>Shop</strong> <span>Your Shopping Partner</span></p>
                      </Link>

                      {/*<a href="index.html"><img src="img/logo.jpg" alt="logo img"></a>*/}
                    </div>

                    <Header_Cart cart={this.props.cart}/>



                    <div className="aa-search-box">
                      <form action="">
                        <input type="text" name="" id="" placeholder="Search here ex. 'man' " />
                        <button type="submit"><span className="fa fa-search"></span></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section id="menu">
          <div className="container">
            <div className="menu-area">
              <div className="navbar navbar-default" role="navigation">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Men <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="#">Casual</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Formal</a></li>
                        <li><a href="#">Standard</a></li>
                        <li><a href="#">T-Shirts</a></li>
                        <li><a href="#">Shirts</a></li>
                        <li><a href="#">Jeans</a></li>
                        <li><a href="#">Trousers</a></li>
                        <li><a href="#">And more.. <span className="caret"></span></a>
                          <ul className="dropdown-menu">
                            <li><a href="#">Sleep Wear</a></li>
                            <li><a href="#">Sandals</a></li>
                            <li><a href="#">Loafers</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="#">Women <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="#">Kurta & Kurti</a></li>
                        <li><a href="#">Trousers</a></li>
                        <li><a href="#">Casual</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Formal</a></li>
                        <li><a href="#">Sarees</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">And more.. <span className="caret"></span></a>
                          <ul className="dropdown-menu">
                            <li><a href="#">Sleep Wear</a></li>
                            <li><a href="#">Sandals</a></li>
                            <li><a href="#">Loafers</a></li>
                            <li><a href="#">And more.. <span className="caret"></span></a>
                              <ul className="dropdown-menu">
                                <li><a href="#">Rings</a></li>
                                <li><a href="#">Earrings</a></li>
                                <li><a href="#">Jewellery Sets</a></li>
                                <li><a href="#">Lockets</a></li>
                                <li className="disabled"><a className="disabled" href="#">Disabled item</a></li>
                                <li><a href="#">Jeans</a></li>
                                <li><a href="#">Polo T-Shirts</a></li>
                                <li><a href="#">SKirts</a></li>
                                <li><a href="#">Jackets</a></li>
                                <li><a href="#">Tops</a></li>
                                <li><a href="#">Make Up</a></li>
                                <li><a href="#">Hair Care</a></li>
                                <li><a href="#">Perfumes</a></li>
                                <li><a href="#">Skin Care</a></li>
                                <li><a href="#">Hand Bags</a></li>
                                <li><a href="#">Single Bags</a></li>
                                <li><a href="#">Travel Bags</a></li>
                                <li><a href="#">Wallets & Belts</a></li>
                                <li><a href="#">Sunglases</a></li>
                                <li><a href="#">Nail</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="#">Kids <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="#">Casual</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Formal</a></li>
                        <li><a href="#">Standard</a></li>
                        <li><a href="#">T-Shirts</a></li>
                        <li><a href="#">Shirts</a></li>
                        <li><a href="#">Jeans</a></li>
                        <li><a href="#">Trousers</a></li>
                        <li><a href="#">And more.. <span className="caret"></span></a>
                          <ul className="dropdown-menu">
                            <li><a href="#">Sleep Wear</a></li>
                            <li><a href="#">Sandals</a></li>
                            <li><a href="#">Loafers</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Digital <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="#">Camera</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Tablet</a></li>
                        <li><a href="#">Laptop</a></li>
                        <li><a href="#">Accesories</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Furniture</a></li>
                    <li><a href="blog-archive.html">Blog <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="blog-archive.html">Blog Style 1</a></li>
                        <li><a href="blog-archive-2.html">Blog Style 2</a></li>
                        <li><a href="blog-single.html">Blog Single</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="#">Pages <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="product.html">Shop Page</a></li>
                        <li><a href="product-detail.html">Shop Single</a></li>
                        <li><a href="404.html">404 Page</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = state => {

  return {
    cart:state.cart
  }
}


export default connect(mapStateToProps)(Home);