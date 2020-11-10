import React, { Component } from 'react';
import {Link} from "react-router-dom";

import './Common.css';
import googlelogo from '../images/google-logo.png';
import fblogo from '../images/fb-logo.png';
import twitterlogo from '../images/twitter-logo.png';
import sidelogo from '../images/logistics-bg.png';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.email) {
      return this.setState({ error: 'Email is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

  handleEmailChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
   return (
  <>
    <div class="login">

      <div class="split left">
        <div class="centered">
        <img src={sidelogo} alt="" name="sidelogo"></img>
        </div>
      </div>     
       
      <div class="split right">  
      <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <br></br>
          <div><span class="txt1"><a href="/" className="Home-RegisterText">Home</a></span></div>
          <div class="login-header"><h1>Sign In</h1></div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <div class="label-text"><label>email</label></div>
        <div class="text-field"><input type="text" data-test="email" placeholder="email" value={this.state.email} onChange={this.handleEmailChange} /></div>
        <p></p>
        <p></p>
        <div class="label-text"><label>password</label></div>           
        <div class="text-field"><input type="password" data-test="password" placeholder="password" value={this.state.password} onChange={this.handlePassChange} /></div>
          <br></br>
          <br></br>
          <br></br>
        <div class="text-center"><input type="submit" value="      SIGN IN     " data-test="submit" /></div>
          <br></br>
          <br></br>
          <br></br>

            <div class="text-center">
              <p><span class="txt1">
              Or Sign In with
              </span>
              </p>
            </div>
     
            <div class="text-center">
            <p>
              <Link to="/Login"><img src={googlelogo} alt="" name="google"></img>&nbsp;</Link>
              <Link to="/Login"><img src={fblogo} alt="" name="fb"></img>&nbsp;</Link>
              <Link to="/Login"><img src={twitterlogo} alt="" name="twitter"></img></Link>
            </p>
            </div>
            <br></br>
            <br></br>
            
            <div class="text-center">
              <p><span class="txt1">New User?&nbsp;<a href="/Register" className="Register-link">Register</a>  </span>
              </p>
             
            </div>
                      
             
        </form>
       </div>
      </div>
      </>
    );
  }
}

export default Login;