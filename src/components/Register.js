import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Common.css';

import googlelogo from '../images/google-logo.png';
import fblogo from '../images/fb-logo.png';
import twitterlogo from '../images/twitter-logo.png';
import sidelogo from '../images/logistics-bg.png';

export default class Register extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      input: {},
      errors: {},
      firstname: '',
      lastname: '',
      password: '',
      confirmpassword: '',
      email: '',
      phone: '',
      error: ''
    };
    
    this.handleFNameChange = this.handleFNameChange.bind(this);
    this.handleLNameChange = this.handleLNameChange.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
    this.handleConfirmPwdChange = this.handleConfirmPwdChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFNameChange(evt) {
    this.setState({
      firstname: evt.target.value,
    });
   }
  
  handleLNameChange(evt) {
    this.setState({
      lastname: evt.target.value,
    });
  }

  handlePwdChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  handleConfirmPwdChange(evt) {
    this.setState({
      confirmpassword: evt.target.value,
    });
  }
  
  handleEmailChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  };
 
  handlePhoneChange(evt) {
    this.setState({
      phone: evt.target.value,
    });
  };
  
  handleChange(evt) {
    let input = this.state.input;
    input[evt.target.name] = evt.target.value;

    this.setState({
      input
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    alert('Register Form ');

    if (!this.state.firstname) {
      return this.setState({ error: 'First name is required' });
    }

    if (!this.state.lastname) {
      return this.setState({ error: 'Last name is required' });
    }
    
    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    if (!this.state.confirmpassword) {
      return this.setState({ error: 'Re-type Confirm password' });
    }
    
    if (!this.state.email) {
      return this.setState({ error: 'Email is required' });
    }

    if (!this.state.phone) {
      return this.setState({ error: 'Phone is required' });
    }

    if(this.validate()){
      console.log(this.state);

      let input = {};
      input["firstname"] = "";
      input["lastname"] = "";
      input["password"] = "";
      input["confirmpassword"] = "";
      input["email"] = "";
      input["phone"] = "";

      this.setState({input:input});
      alert('Register Form is submitted');
    }
  }
  
  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;
  
    if (!input["firstname"]) {
      isValid = false;
      errors["firstname"] = "Please enter your first name.";
    }
    
    if (!input["lastname"]) {
      isValid = false;
      errors["lastname"] = "Please enter your last name.";
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

    if (!input["phone"]) {
      isValid = false;
      errors["phone"] = "Please enter your phone.";
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }

  render() {
    return (
    <>
      <form onSubmit={this.handleSubmit}>
        <div class="login">
          <div class="split left">
            <div class="centered">
              <img src={sidelogo} alt="" name="sidelogo"></img>
            </div>
          </div>         
          <div class="split right">  
            <br></br>
            <div>
              <span class="txt1">
              <Link to="/" className="Home-LoginText">Home</Link>
              </span>
            </div>
            <div class="login-header">
              <h1>Sign Up</h1>
            </div>
              <p></p>
              <br></br>
              <br></br>
            <div class="label-text">
              <label>first name</label>
            </div>
            <div class="text-field">
              <input type="text" id="firstname" name="firstname" placeholder="first name" onChange={this.handleFNameChange} />
            </div>
              <p></p>
            <div class="label-text">
              <label>last name</label>
            </div>           
            <div class="text-field">
              <input type="text" id="lastname" name="lastname" placeholder="last name" onChange={this.handleLNameChange} />
            </div>
              <p></p>
            <div class="label-text">
              <label>password</label>
            </div>           
            <div class="text-field">
              <input type="password" id="password" name="password" placeholder="password" onChange={this.handlePwdChange} />
            </div>
              <p></p>
            <div class="label-text">
              <label>confirm password</label>
            </div>
            <div class="text-field">
              <input type="password" id="confirmpassword" name="confirmpassword" placeholder="re-type password" onChange={this.handleConfirmPwdChange} />
            </div>
              <p></p>
            <div class="label-text">
              <label>email</label>
            </div>
            <div class="text-field">
              <input type="text" id="email" name="email" placeholder="email" onChange={this.handleEmailChange} />
            </div>
              <p></p>
            <div class="label-text">
              <label>phone</label>
            </div>
            <div class="text-field">
              <input type="number" id="phone" id="phone" placeholder="phone" onChange={this.handlePhoneChange} />
            </div>
              <p></p>
              <br></br>
              <br></br>
            <div class="text-field">
              <Link to={{ pathname: '/Quote', 
                state: { firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email, 
                phone: this.state.phone
                } }}>
                <input type="submit" value="Register"></input>
              </Link>  
            </div>        
              <p></p>
              <br></br>  
            <div class="text-center">
              <p>
                <span class="txt1">Or Sign Up with</span>
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
          </div>
        </div>
      </form>
    </>
    );
  }
}