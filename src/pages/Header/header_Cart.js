import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

var cartData = [];
class header_Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {data:""}
    }
    
    
    render() {
    	let allCartData = JSON.parse(localStorage.getItem('cart'));
      
    	if(allCartData){
        
        cartData = Object.keys(allCartData).map(function(key,i) {
            return  <li key={i}>
                          <a className="aa-cartbox-img" href="#"><img src={`http://localhost:8000/${allCartData[key].img}`} alt="img" /></a>
                          <div className="aa-cartbox-info">
                            <h4><a href="#">{allCartData[key].pname}</a></h4>
                            <p>{allCartData[key].qty} x ₹{allCartData[key].price}</p>
                          </div>
                          <a className="aa-remove-product" href="#"><span className="fa fa-times"></span></a>
                      </li>
        });
    	}
    	

        return (
           <div className="aa-cartbox">
                      <Link className="aa-cart-link" to="cart">
                        <span className="fa fa-shopping-basket"></span>
                        <span className="aa-cart-title">SHOPPING CART</span>
                    <span className="aa-cart-notify">{cartData.length}</span>
                      </Link>
                      <div className="aa-cartbox-summary">
                        <ul>
                        {cartData}

                      <li>
                            <span className="aa-cartbox-total-title">
                              Total
                      </span>
                            <span className="aa-cartbox-total-price">
                              $500
                      </span>
                          </li>
                        </ul>
                <a className="aa-cartbox-checkout aa-primary-btn" href="checkout.html">Checkout</a>
                      </div>
                    </div>
        );
    }
}


const mapStateToProps = state => {

  return {
    cart:state.cart
  }
}


export default connect(mapStateToProps)(header_Cart);