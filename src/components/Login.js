import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Common.css';

import sidelogo from '../images/logistics-bg.png';
import googlelogo from '../images/google-logo.png';
import fblogo from '../images/fb-logo.png';
import twitterlogo from '../images/twitter-logo.png';

export default class Login extends Component {
  constructor(props){
    super(props);
    console.log(this.props.location);

    this.state = {
      input: {},
      errors: {},
      email: '',
      password: ''    
    } 

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
    console.log(event.target.value);
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
    console.log(evt.target.value);
  }
 
  handleChange(evt) {
    let input = this.state.input;
    input[evt.target.name] = evt.target.value;
  
    this.setState({
      input
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    alert('Login Form ');

    if (!this.state.email) {
      return this.setState({ error: 'Email is required' });
    }
  
    if(this.validate()){
      console.log(this.state);

      let input = {};
      input["email"] = "";
      input["password"] = "";
      this.setState({input:input});

      alert('Login Form is submitted');
    }
  }
  
  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;
  
    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }
    
    if (typeof input["password"] !== "undefined") {
      if(input["password"].length < 6){
        isValid = false;
        errors["password"] = "Please add at least 6 charachter.";
      }
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }

  render() {
    return (
    <>
      <form onSubmit={ this.handleSubmit }>
        <div class="login">
          <div class="split left">
            <div class="centered">
              <img src={sidelogo} alt="" name="sidelogo"></img>
            </div>
          </div>      
          <div class="split right">
            <br></br>
            <div>
              <span class="txt1"><a href="/" className="Home-RegisterText">Home</a></span>
            </div>
            <div class="login-header">
              <h1>Sign In</h1>
            </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            <div class="label-text">
              <label>email</label>
            </div>
            <div class="text-field">
              <input type="text" id="email" name="email" value={this.state.input.email} placeholder="email" onChange={this.handleChange} />
              <div className="text-field">{this.state.errors.email}</div>
            </div>
              <p></p>
              <p></p>
            <div class="label-text">
              <label>password</label>
            </div>           
            <div class="text-field">
                <input type="password" data-test="password" placeholder="password" onChange={this.handlePassChange} />
            </div>
              <br></br>
              <br></br>
              <br></br>
            <div class="text-center">
              <Link to={{ pathname: '/Quote', state: { email: this.state.email } }}>
                <input type="submit" value="  SIGN IN  "/>
              </Link>
            </div>
              <br></br>
              <br></br>
              <br></br>
            <div class="text-center">
              <p><span class="txt1">Or Sign In with</span></p>
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
              <p>
                <span class="txt1">New User?&nbsp;<Link to="/Register" className="Register-link">Register</Link>  </span>
              </p>
            </div>              
          </div>
        </div>  
      </form>
    </>
    );
  }
}

