import React, { Component } from "react";
import Home from "./pages/Header/Home";
import Footer from "./pages/Footer";
import Main from "./pages/Homepage/Main";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import MainProductDetail from "./pages/productDetail/MainProductDetail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './assets/css/bootstrap.css';
import './assets/css/jquery.smartmenus.bootstrap.css';
import './assets/css/jquery.simpleLens.css';
import './assets/css/slick.css';
import './assets/css/nouislider.css';
import './assets/css/theme-color/default-theme.css';
import './assets/css/sequence-theme.modern-slide-in.css';
import './assets/css/style.css';


class App extends Component {

    render() {
        return (
            <Router >
                <Home />
                <Route path="/" exact component={Main} />
                <Route path="/cart" component={Cart} />
                <Route path="/account" component={Account} />
                <Route path="/product-detail" component={MainProductDetail} />
                <Footer />
            </Router>


        );
    }
}

export default App;