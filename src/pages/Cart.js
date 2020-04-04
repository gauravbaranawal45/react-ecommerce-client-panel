import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateQty } from '../redux/action/action';
import { removeCart } from '../redux/action/action';
import { getCart } from '../redux/action/action';
import axios from 'axios';
var cartData = ''
class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = { qty: 1, cartState: '', data: '' }
  }

  componentDidMount() {
    this.props.getCart()
  }

  componentWillUpdate = async (prevProps) => {
    if (prevProps.getcartData !== this.props.getcartData) {
      let query = ''
      let a = []
      let data = prevProps.getcartData.cartData;
      if (localStorage.getItem('_token')) {
        let token = JSON.parse(localStorage.getItem('_token'));
        query = await axios.post(`http://localhost:8000/data/getcartProduct`, { data }, { headers: { "authorization": `Bearer ${token.token}` } });
        query.data.map(val => {
          val.products.map(value => {
            value.qty = val.qty
            a.push(value)
          })
        })
        if (query.status === 200) {
          this.setState({ data: a })
        }
      } else {
        query = await axios.post(`http://localhost:8000/data/getcartProductWT`, { data });
        if (query.status === 200) {
          let cartState = JSON.parse(localStorage.getItem('cart'));
          Object.keys(cartState).map((key, i) => {
            query.data[i].qty = cartState[key].qty
          })
          this.setState({ data: query.data })
        }
      }
    }
  }


  render() {
    // console.log(this.state.data)
    if (this.state.data) {
      var cartData = this.state.data.map((val, i) => {
        return <tr key={i}>
          <td><a className="remove" onClick={() => this.props.removecart(val._id)} href="javascript:void(0);"><fa className="fa fa-close"></fa></a></td>
          <td><a href="#"><img src={`http://localhost:8000/${val.img}`} alt="img" /></a></td>
          <td><a className="aa-cart-title" href="#">{val.product_name}</a></td>
          <td>₹{val.price}</td>
          <td><input className="aa-cart-quantity" name={`qty_${i}`} type="number" value={val.qty} onChange={(e) => this.props.handleqty({id:val._id,e})} /></td>
          <td>₹{val.price}</td>
        </tr >
      });
    }
    // if (this.state.data) {
    //   var cartData = Object.keys(this.state.data).map((key, i) => {
    //     return <tr key={i}>
    //   <td><a className="remove" onClick={() => this.props.removecart(key)} href="javascript:void(0);"><fa className="fa fa-close"></fa></a></td>
    //   <td><a href="#"><img src={`http://localhost:8000/${this.state.data[key].img}`} alt="img" /></a></td>
    //   <td><a className="aa-cart-title" href="#">{this.state.data[key].product_name}</a></td>
    //   <td>₹{this.state.data[key].price}</td>
    //   <td><input className="aa-cart-quantity" name={`qty_${key}`} type="number" value={this.state.data[key].qty} onChange={(event) => this.props.handleqty(event)} /></td>
    //   <td>₹{this.state.data[key].price}</td>
    // </tr>
    //   });
    // }

    return (
      <>
        <section id="aa-catg-head-banner">
          <img src={process.env.PUBLIC_URL + '/assets/img/fashion/fashion-header-bg-8.jpg'} alt="fashion img" />
          <div className="aa-catg-head-banner-area">
            <div className="container">
              <div className="aa-catg-head-banner-content">
                <h2>Cart Page</h2>
                <ol className="breadcrumb">
                  <li><a href="index.html">Home</a></li>
                  <li className="active">Cart</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section id="cart-view">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="cart-view-area">
                  <div className="cart-view-table">
                    <form action="">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th></th>
                              <th></th>
                              <th>Product</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cartData}
                            <tr>
                              <td colSpan="6" className="aa-cart-view-bottom">
                                <div className="aa-cart-coupon">
                                  <input className="aa-coupon-code" type="text" placeholder="Coupon" />
                                  <input className="aa-cart-view-btn" type="submit" value="Apply Coupon" />
                                </div>
                                <input className="aa-cart-view-btn" type="submit" value="Update Cart" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </form>
                    <div className="cart-view-total">
                      <h4>Cart Totals</h4>
                      <table className="aa-totals-table">
                        <tbody>
                          <tr>
                            <th>Subtotal</th>
                            <td>$450</td>
                          </tr>
                          <tr>
                            <th>Total</th>
                            <td>$450</td>
                          </tr>
                        </tbody>
                      </table>
                      <a href="#" className="aa-cart-view-btn">Proced to Checkout</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('state',state)
  return {
    data: state,
    getcartData: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCart: () => { dispatch(getCart()) },
    handleqty: (item) => { dispatch(updateQty(item)) },
    removecart: (id) => { dispatch(removeCart(id)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);