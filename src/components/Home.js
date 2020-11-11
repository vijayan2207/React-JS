import React, { Component } from 'react';
import { Link} from "react-router-dom";
import './Common.css';
import banner from '../images/logistics-bg.png';

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      origincountry: '',
      destinationcountry: ''
    } 
    this.handleOriginCountryChange = this.handleOriginCountryChange.bind(this);
    this.handleDestCountryChange = this.handleDestCountryChange.bind(this);
  }

  handleOriginCountryChange(evt) {
    this.setState({
      origincountry: evt.target.value,
    });
  };

  handleDestCountryChange(evt) {
    this.setState({
        destinationcountry: evt.target.value,
    });
    console.log(evt.target.value);
  };
  
  render() {
    return (
      <>
        <div class="Header">
          <img src={banner} alt="banner" width="87%"/>
        </div>

        <div class="Banner-Text1">Ship Air & Ocean Freight</div>
        <div class="Banner-Text2">Get a Free & Instant Freight Shipping Quote, in just few steps..</div>

        <div class="Home-Field">
          <input type="text" name="origin" data-test="Origin Country" placeholder="Origin Country" onChange = {this.handleOriginCountryChange}/>&nbsp;&nbsp;
          <input type="text" data-test="Destination Country" placeholder="Destination Country" onChange = {this.handleDestCountryChange}/>&nbsp;&nbsp;&nbsp;

          <Link to={{ pathname: '/Welcome', state: { origincountry: this.state.origincountry, destinationcountry:this.state.destinationcountry   } }}><input type="button" value="Get a Quote"></input></Link>

        </div>

        <div class="Home-LoginText">
          <Link to="/Login" class="Login-link">Login</Link>
        </div>

        <div class="Home-RegisterText">                    
          <Link to="/Register" class="Register-link"><input type="submit" value="Register"/></Link>
        </div>
      </>
    );
  }
} 
