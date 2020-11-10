
import React, { Component } from 'react';
import {Link} from "react-router-dom";

import './Common.css';
import googlelogo from '../images/google-logo.png';
import fblogo from '../images/fb-logo.png';
import twitterlogo from '../images/twitter-logo.png';
import sidelogo from '../images/logistics-bg.png';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
        origincountry: this.props.location.state.origincountry,
        destinationcountry: this.props.location.state.destinationcountry,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      error: ''
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFNameChange = this.handleFNameChange.bind(this);
    this.handleLNameChange = this.handleLNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.firstname) {
      return this.setState({ error: 'First name is required' });
    }
    
    if (!this.state.lastname) {
      return this.setState({ error: 'Last name is required' });
    }

    if (!this.state.phone) {
      return this.setState({ error: 'Phone number is required' });
    }
    
    if (!this.state.email) {
      return this.setState({ error: 'Email is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

  handleFNameChange(evt) {
   this.setState({
     firstname: evt.target.value,
   });
 };
 
 handleLNameChange(evt) {
   this.setState({
     lastname: evt.target.value,
   });
 };
 
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

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
   
   return (

  
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
          <div><span class="txt1"><a href="/" className="Home-LoginText">Home</a></span></div>

            <div class="login-header"><h1>You are just few steps away</h1></div>
           <p></p>
           <div class="login-header"><h4>Please register to get a free Quote in few seconds</h4></div>

          <br></br>
          <br></br>
          

          <div class="label-text"><label>first name</label></div>
        <div class="text-field"><input type="text" data-test="firstname" placeholder="firstname" onChange={this.handleFNameChange} /></div>
        <p></p>
        <div class="label-text"><label>last name</label></div>           
        <div class="text-field"><input type="text" data-test="lastname" placeholder="lastname" onChange={this.handleLNameChange} /></div>
        <p></p>
        <div class="label-text"><label>email</label></div>
        <div class="text-field"><input type="text" data-test="email" placeholder="email" onChange={this.handleEmailChange} /></div>
        <p></p>
        <div class="label-text"><label>password</label></div>           
        <div class="text-field"><input type="password" data-test="password" placeholder="password" onChange={this.handlePassChange} /></div>
        <p></p>
        <div class="label-text"><label>phone</label></div>
        <div class="text-field"><input type="number" data-test="phone" placeholder="phone" onChange={this.handlePhoneChange} /></div>
        <p></p>
          <br></br>
          <br></br>
          <div class="text-field"> <Link to={{ pathname: '/Quote', state: { firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email, phone: this.state.phone, origincountry: this.state.origincountry, destinationcountry: this.state.destinationcountry
        } }}><input type="button" value="Register & Get a Free Quote"></input></Link>  
      </div>        <br></br>
          <br></br>

            <div class="text-center">
              <p><span class="txt1">
              Or Sign Up with
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
             
        </form>
       </div>
      </div>
    );
  }
}
