import React, { Component } from 'react';
import axios from 'axios';
import Input from './Account/Input'


class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { loginemail: 'gaurav@gmail.com', loginpass: '123456', name: '', email_number: '', password: '' };
  }

  saveCart = () => {
    let cart = localStorage.getItem('cart')
    let token = JSON.parse(localStorage.getItem('_token'))
    axios.post('http://localhost:8000/data/saveCart', { cart }, { headers: { "authorization": `Bearer ${token.token}` } })
      .then((res) => {
        if (res.status === 200) {
          localStorage.removeItem('cart');
          window.location.href = "/";
        }
      })
      .catch((err) => { window.location.href = "/" })

  }

  handlesubmitlogin = (event) => {
    event.preventDefault();
    const { loginemail, loginpass } = this.state;
    axios.post('http://localhost:8000/data/signin', { loginemail, loginpass })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('_token', JSON.stringify({ token: res.data.token, name: res.data.name }))
          this.saveCart()
        }
      })
  }


  ///for signup

  handlechange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handlesubmit = (event) => {
    event.preventDefault();
    let data = {
      name: this.state.name,
      email_number: this.state.email_number,
      password: this.state.password
    }
    axios.post('http://localhost:8001/posts/inseruser', data)
      .then((response) => {
        if (response.status == 200) {
          console.log('res', response.data);
          localStorage.setItem('userData', JSON.stringify(response.data));
          //alert("Successfully user created.");
          window.location = "/";
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })

  }

  render() {

    return (
      <>

        <section id="aa-catg-head-banner">
          <img src={process.env.PUBLIC_URL + '/assets/img/fashion/fashion-header-bg-8.jpg'} alt="fashion img" />
          <div className="aa-catg-head-banner-area">
            <div className="container">
              <div className="aa-catg-head-banner-content">
                <h2>Account Page</h2>
                <ol className="breadcrumb">
                  <li><a href="index.html">Home</a></li>
                  <li className="active">Account</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section id="aa-myaccount">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-myaccount-area">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="aa-myaccount-login">
                        <h4>Login</h4>
                        <form onSubmit={this.handlesubmitlogin} className="aa-login-form">
                          <label htmlFor="">Username or Email address<span>*</span></label>
                          <Input type="text" onChange={this.handlechange} value={this.state.loginemail} name="loginemail" placeholder="Username or email" />
                          <label htmlFor="">Password<span>*</span></label>
                          <Input type="password" onChange={this.handlechange} value={this.state.loginpass} name="loginpass" placeholder="Password" />
                          <button type="submit" className="aa-browse-btn">Login</button>
                          <label className="rememberme" htmlFor="rememberme"><input type="checkbox" id="rememberme" /> Remember me </label>
                          <p className="aa-lost-password"><a href="#">Lost your password?</a></p>
                        </form>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="aa-myaccount-register">
                        <h4>Register</h4>
                        <form className="aa-login-form" onSubmit={this.handlesubmit}>
                          <label htmlFor="">Name<span>*</span></label>
                          <Input type="text" name="name" value={this.state.name} onChange={this.handlechange} placeholder="Name" />
                          <label htmlFor="">Email address or Mobile<span>*</span></label>
                          <Input type="text" name="email_number" value={this.state.email_number} onChange={this.handlechange} placeholder="Email address or Mobile" />
                          <label htmlFor="">Password<span>*</span></label>
                          <Input type="password" name="password" value={this.state.password} onChange={this.handlechange} placeholder="Password" />
                          <button type="submit" className="aa-browse-btn">Register</button>
                        </form>
                      </div>
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

export default Account;