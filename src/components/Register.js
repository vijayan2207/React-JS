import React, { Component } from 'react';

import './Common.css';
import googlelogo from '../images/google-logo.png';
import fblogo from '../images/fb-logo.png';
import twitterlogo from '../images/twitter-logo.png';
import sidelogo from '../images/logistics-bg.png';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFNameChange = this.handleFNameChange.bind(this);
    this.handleLNameChange = this.handleLNameChange.bind(this);

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

            <div class="login-header"><h1>Register New User</h1></div>
           <p></p>
      
          <br></br>
          <br></br>
          

          <div class="label-text"><label>first name</label></div>
        <div class="text-field"><input type="text" data-test="firstname" placeholder="firstname" value={this.state.firstname} onChange={this.handleFNameChange} /></div>
        <p></p>
        <div class="label-text"><label>last name</label></div>           
        <div class="text-field"><input type="text" data-test="lastname" placeholder="lastname" value={this.state.lastname} onChange={this.handleLNameChange} /></div>
        <p></p>
        <div class="label-text"><label>email</label></div>
        <div class="text-field"><input type="text" data-test="email" placeholder="email" value={this.state.email} onChange={this.handleEmailChange} /></div>
        <p></p>
        <div class="label-text"><label>password</label></div>           
        <div class="text-field"><input type="password" data-test="password" placeholder="password" value={this.state.password} onChange={this.handlePassChange} /></div>
          <br></br>
          <br></br>
        <div class="text-center"><input type="submit" value="      REGISTER     " data-test="submit" /></div>
          <br></br>
          <br></br>

            <div class="text-center">
              <p><span class="txt1">
              Or Sign Up with
              </span>
              </p>
            </div>
     
            <div class="text-center">
            <p>
            <a href="/Login"><img src={googlelogo} alt="" name="google"></img>&nbsp;</a>
              <a href="/Login"><img src={fblogo} alt="" name="fb"></img>&nbsp;</a>
              <a href="/Login"><img src={twitterlogo} alt="" name="twitter"></img></a>
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

export default Register;