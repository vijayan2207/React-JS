import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";

import './Common.css';
import sidelogo from '../images/logistics-bg.png';

class Quote extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location);

    this.state = {
      shippingType: '',
      originCountry: this.props.location.state.origincountry,
      originCity: '',
      destinationCountry: this.props.location.state.destinationcountry,
      destinationCity: '',
      dutyRates: '',
      packages: '',
      weight: '',
      length: '',
      width: '',
      height: '',
      measure: '',
      dimensions: '',
      firstname: this.props.location.state.firstname,
      lastname: this.props.location.state.lastname,
      email: this.props.location.state.email,
      phone: this.props.location.state.phone
    };

    this.handleShippingTypeChange = this.handleShippingTypeChange.bind(this);
    this.handleOriginCountryChange = this.handleOriginCountryChange.bind(this);
    this.handleOriginCityChange = this.handleOriginCityChange.bind(this);
    this.handleDestinationCountryChange = this.handleDestinationCountryChange.bind(this);
    this.handleDestinationCityChange = this.handleDestinationCityChange.bind(this);
    this.handleDutyRatesChange = this.handleDutyRatesChange.bind(this);
    this.handleTermsChange = this.handleTermsChange.bind(this);
    this.handlePackagesChange = this.handlePackagesChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleLengthChange = this.handleLengthChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleDimensions = this.handleDimensions.bind(this);
    this.handleMeasure = this.handleMeasure.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleShippingTypeChange(evt) {
    this.setState({
      shippingType: evt.target.value,
    });
    console.log(evt.target.value);

  };
        
  handleOriginCountryChange(evt) {
    this.setState({
      originCountry: evt.target.value,
    });
  };
  
  handleOriginCityChange(evt) {
    this.setState({
      originCity: evt.target.value,
    });
  };
  
  handleDestinationCountryChange(evt) {
    this.setState({
      destinationCountry: evt.target.value,
    });
  };
  
  handleDestinationCityChange(evt) {
    this.setState({
      destinationCity: evt.target.value,
    });
  };
  
  handleTermsChange(evt) {
    this.setState({
      terms: evt.target.value,
    });
  };

  handleDutyRatesChange(evt) {
    this.setState({
      dutyRates: evt.target.value,
    });
  };
  
  handlePackagesChange(evt) {
    this.setState({
      packages: evt.target.value,
    });
  };
  
  handleWeightChange(evt) {
    this.setState({
      weight: evt.target.value,
    });
  };
  
  handleLengthChange(evt) {
    this.setState({
      length: evt.target.value,
    });
  };
  
  handleWidthChange(evt) {
    this.setState({
      width: evt.target.value,
    });
  };
  
  handleHeightChange(evt) {
    this.setState({
      height: evt.target.value,
    });
  };
  
  handleDimensions(evt) {
    this.setState({
      dimensions: evt.target.value,
    });
  };
  
  handleMeasure(evt) {
    this.setState({
      measure: evt.target.value,
    });
  };
  
  changeTitle = e => {
    const { name, value } = e.target;
  
    this.setState({
      [name]: value
    });
  };

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.originCity) {
      return this.setState({ error: 'Origin City is required' });
    }
    
    if (!this.state.destinationCity) {
      return this.setState({ error: 'Destination City is required' });
    }
        
    return this.setState({ error: '' });
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
      <form>
          {/* {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          } */}
          <br></br>
          <div><span class="txt1"><a href="/" className="Home-LoginText">Home</a></span></div>

            <div class="login-header"><h1>Get an Instant Shipping Quote</h1></div>
           <p></p>
          
                 <div class="quote-text"><label>Shippig Type</label></div>
        <div class="quote-text">
          <input type="radio" id="airShipping" onChange={this.handleShippingTypeChange} name="airshipping" value="Air" /><label>Air</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="oceanShipping" onChange={this.handleShippingTypeChange} name="oceanshipping" value="Ocean" /><label>Ocean</label>
        </div>
        <p></p>
        
        <div class="quote-text"><label>From</label></div>           
        <div class="quote-text">
          <input type="text" border="none" id="originCountry" data-test="originCountry" placeholder="origin country" value={this.state.originCountry} onChange={this.handleOriginCountryChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" id="originCity" data-test="originCity" placeholder="origin city" value={this.state.originCity} onChange={this.handleOriginCityChange} />
        </div>
        <p></p>
        <div class="quote-text"><label>To</label></div>           
        <div class="quote-text">
          <input type="text" id="destinationCountry" data-test="destinationCountry" placeholder="destination country" value={this.state.destinationCountry} onChange={this.handleDestinationCountryChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" id="destinationCity" data-test="destinationCity" placeholder="destination city" value={this.state.destinationCity} onChange={this.handleDestinationCityChange} />
        </div>
        <p></p>
        <br></br>  
        <div class="quote-text"><label>Terms</label>
        <label class="quote-text2">Duty Rates(%)</label></div>
        <div class="quote-text">
          <select style={{width: '180px'}} id="terms" name="terms" placeholder="terms" onChange={this.handleTermsChange}>
            <option value="None" selected>-None-</option>
            <option value="Door to Door" >Door to Door</option>
            <option value="Port to Door">Port to Door</option>
            <option value="Port to Port">Port to Door</option>
          </select>
            <select class="quote-text3" id="dutyRates" name="dutyRates" placeholder="dutyRates" onChange={this.handleDutyRatesChange}>
            <option value="Not Selected" selected>Duty Rate %</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          </div>
         
          <br></br>         <div class="quote-text"><label>Package Details</label></div> 
          <p></p>
          <div class="quote-text">
                     
               
          </div>         
          <div class="quote-text"><label>&nbsp;&nbsp;&nbsp;&nbsp;Weight: </label><input type="number" min="1" max="99" id="weight" data-test="weight" placeholder="Wt" value={this.state.weight} onChange={this.handleWeightChange} /><label>{this.state.measure}</label></div>
         <p></p><div class="quote-text"><label>&nbsp;&nbsp;&nbsp;&nbsp;Length: </label><input type="number" min="1" max="99" id="length" data-test="length" placeholder="Len" value={this.state.length} onChange={this.handleLengthChange} /><label>{this.state.dimensions}</label></div>
          <p></p><div class="quote-text"><label>&nbsp;&nbsp;&nbsp;&nbsp;Width:  </label>&nbsp;<input type="number" min="1" max="99" id="width" data-test="width" placeholder="W" value={this.state.width} onChange={this.handleWidthChange} /><label>{this.state.dimensions}</label></div>
          <p></p><div class="quote-text"><label>&nbsp;&nbsp;&nbsp;&nbsp;Height: </label><input type="number" min="1" max="99" id="height" data-test="height" placeholder="Ht" value={this.state.height} onChange={this.handleHeightChange} /><label>{this.state.dimensions}</label>
        </div>
        <p></p>
          <div class="quote-text"><label>Dimensions</label></div>
          <div class="quote-text">
          <input type="radio" id="lbs" name="measure" value="lbs" onClick={this.changeTitle}/><label>lbs&nbsp;</label><label>/</label>
          <input type="radio" id="kg" name="measure" value="kg" onClick={this.changeTitle}/><label>kg</label>&nbsp;&nbsp;&nbsp;&nbsp;
        
          <input type="radio" id="inches" name="dimensions" value="inches" onClick={this.changeTitle}/><label>in&nbsp;</label><label>/</label>
          <input type="radio" id="cm" name="dimensions" value="cm" onClick={this.changeTitle}/><label>cm</label>
        </div>
        <p></p>
          <br></br>
        <div class="text-center">
          <Link to={{ pathname: '/QuoteComplete', state: { shippingType: this.state.shippingType,
      originCountry: this.state.originCountry,
      originCity: this.state.originCity,
      destinationCountry: this.state.destinationCountry,
      destinationCity: this.state.destinationCity,
      terms: this.state.terms,
      dutyRates: this.state.dutyRates,
      packages: this.state.packages,
      weight: this.state.weight,
      length: this.state.length,
      width: this.state.width,
      height: this.state.height,
      measure: this.state.measure,
      dimensions: this.state.dimensions, 
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone  } }}><input type="button" value="Get a Quote"></input></Link>
        </div>
        <p></p>
        <p></p>
 
                           
             
        </form>
       </div>
      </div>
    );
  }
}

export default Quote;