import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { storeCart } from '../../redux/action/action';
class SubComponent_product extends Component {
    constructor(props) {
        super(props)
        this.state = { data: [] ,itmeCart:''}
    }
    


    componentDidMount = () => {
        fetch('http://localhost:8000/data/getproduct', {
            method: "POST",
            body: JSON.stringify(this.props),
            headers: {  
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then(res => {
                this.setState({ data: res });
            })
    }

    render() {
        return (
            this.state.data.map((val, index) =>
                (   <li key={index}>
                        <figure>
                            <a className="aa-product-img" href={`product-detail?pid=${val._id}`} target="_blank"><img style={{ height: "300px", width: "251px" }} src={`http://localhost:8000/${val.img}`} alt="polo shirt img" /></a>
                            <Link to="" className="aa-add-card-btn" href="#" onClick={() => this.props.addToCart({pid:val._id})}>
                                <span className="fa fa-shopping-cart"></span>Add To Cart</Link>
                                <a className="aa-product-img" href={`product-detail?pid=${val._id}`} target="_blank" style={{background:"none"}}>
                                <figcaption>
                                <h4 className="aa-product-title">{val.product_name}</h4>
                                <span className="aa-product-price">₹{val.price}</span>
                            </figcaption>
                                </a>
                            
                        </figure>
                        <div className="aa-product-hvr-content">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                        </div>
                        <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                    </li>
                )
            )
        );
    }
}

const mapStateToProps = (state) => {
    return{
        data:state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : (item) => {dispatch(storeCart(item))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SubComponent_product)