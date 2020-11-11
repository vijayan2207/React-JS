import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Common.css';
import sidelogo from '../images/logistics-bg.png';

export default class QuoteComplete extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location);
    
    this.state = {
      shippingType: this.props.location.state.shippingType,
      originCountry: this.props.location.state.originCountry,
      originCity: this.props.location.state.originCity,
      destinationCountry: this.props.location.state.destinationCountry,
      destinationCity: this.props.location.state.destinationCity,
      terms: this.props.location.state.terms,
      dutyRates: this.props.location.state.dutyRates,
      packages: this.props.location.state.packages,
      weight: this.props.location.state.weight,
      length: this.props.location.state.length,
      width: this.props.location.state.width,
      height: this.props.location.state.height,
      measure: this.props.location.state.measure,
      dimensions: this.props.location.state.dimensions,
      firstname: this.props.location.state.firstname,
      lastname: this.props.location.state.lastname,
      email: this.props.location.state.email,
      phone: this.props.location.state.phone
    } 
  }

  render() {
    return  (
    <>
      <form>
        <div class="login">
          <div class="split left">
            <div class="centered">
              <img src={sidelogo} alt="" name="sidelogo"></img>
            </div>
          </div>
          <div class="split right">          
            <div>
              <span class="txt1"><Link to="/" className="Home-RegisterText">Home</Link></span>
            </div>
              <br></br>
              <br></br>
              <br></br>
            <div class="quote-header">
                <h2>Your {this.state.shippingType} Freight Quote is being processed.</h2>
            </div>
            <div class="quote-header">
                <h5>Thank you for the submission. Your information is being processed and shall email your quote shortly.</h5>
            </div>        
            <div class="quote-left-align">
              <h2>Your Contact details</h2>
            </div>
              <p></p>
            <div class="quote-text">
              <label>NAME: {this.state.firstname} {this.state.lastname}</label>
            </div>
              <p></p>
            <div class="quote-text">
              <label>EMAIL: {this.state.email}</label>
            </div>
              <p></p>
            <div class="quote-text">
              <label>PHONE: {this.state.phone}</label>
            </div>
              <p></p>
            <div class="quote-left-align">
              <h2>Your Quote details</h2>
            </div>
              <p></p>
            <div class="quote-text">
              <label>TERMS: {this.state.terms}</label>
            </div>
              <p></p>
            <div class="quote-text">
              <label>ORIGIN:{this.state.originCountry},{this.state.originCity}</label>
            </div>
              <p></p>
            <div class="quote-text">
              <label>DESTINATION:{this.state.destinationCountry},{this.state.destinationCity}</label>
            </div>
              <p></p>
            <div class="quote-text">
              <label>DUTY RATE:{this.state.dutyRates}%</label>
            </div>
              <p></p>
            <div class="quote-left-align">
              <h2>Your Package details</h2>
            </div>
              <p></p>
            <div class="quote-text">
              <label>Package 1: 1 package, {this.state.length} x {this.state.width} x {this.state.height} {this.state.dimensions} with weight {this.state.weight} {this.state.measure}</label>
            </div>          
          </div>
        </div>
      </form>
    </>
    );
  }
}
