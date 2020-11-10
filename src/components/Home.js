import React, {Component} from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";
import './Common.css';
import banner from '../images/logistics-bg.png';

export default class Home extends Component {
  render() {
    return (
        <>
        <div class="Header">
          <img src={banner} alt="banner" width="80%"/>
        </div>

        <div class="Banner-Text1">Ship Air & Ocean Freight</div>
        <div class="Banner-Text2">Get a Free & Instant Freight Shipping Quote, in just few steps..</div>

        <div class="Home-Field">
          <input type="text" name="origin" data-test="Origin Country" placeholder="Origin Country" />&nbsp;&nbsp;
          <input type="text" data-test="Destination Country" placeholder="Destination Country" />&nbsp;&nbsp;&nbsp;
            <Link to="/Quote" class="Register-link"><input type="submit" value="Get Quote"/></Link>
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
