import React, { Component } from 'react';

import './Common.css';

import sidelogo from '../images/logistics-bg.png';

class QuoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      
    };

    this.handleFNameChange = this.handleFNameChange.bind(this);
    this.handleLNameChange = this.handleLNameChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleSubmit(evt) {
    evt.preventDefault();

    
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
          
          <br></br>
          <div><span class="txt1"><a href="/" className="Home-LoginText">Home</a></span></div>

            <div class="login-header"><h1>Get a Free Quote. Fill In the Details</h1></div>
           <p></p>
      
          <br></br>
          <br></br>
          <div class="label-text"><label>Origin Country: </label></div>
          <div class="label-text"><label>Destination Country: </label></div>

             
        </form>
       </div>
      </div>
    );
  }
}

export default QuoteForm;