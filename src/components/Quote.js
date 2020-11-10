import React, { Component } from 'react';

import './Common.css';
import sidelogo from '../images/logistics-bg.png';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingType: '',
      airShipping: '',
      oceanShipping: '',
      originCountry: '',
      originCity: '',
      destinationCountry: '',
      destinationCity: '',
      dutyRates: '',
      packages: '',
      weight: '',
      length: '',
      width: '',
      height: '',
      dimensionsLbsIn: '',
      dimensionsCmKg: '',
    };

    this.handleShippingTypeChange = this.handleShippingTypeChange.bind(this);
    this.handleAirShippingChange = this.handleAirShippingChange.bind(this);
    this.handleOceanShippingChange = this.handleOceanShippingChange.bind(this);
    this.handleOriginCountryChange = this.handleOriginCountryChange.bind(this);
    this.handleOriginCityChange = this.handleOriginCityChange.bind(this);
    this.handleDestinationCountryChange = this.handleDestinationCountryChange.bind(this);
    this.handleDestinationCityChange = this.handleDestinationCityChange.bind(this);
    this.handleDutyRatesChange = this.handleDutyRatesChange.bind(this);
    this.handlePackagesChange = this.handlePackagesChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleLengthChange = this.handleLengthChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleDimensionsLbsInChange = this.handleDimensionsLbsInChange.bind(this);
    this.handleDimensionsCmKgChange = this.handleDimensionsCmKgChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

//   changeTitle = () => {
//     this.setState({ title: "Ocean" });
//  };

 changeTitle = e => {
  const { name, value } = e.target;

  this.setState({
    [name]: value
  });
};

 

  handleShippingTypeChange(evt) {
    this.setState({
      shippingType: evt.target.value,
    });
  };
  
  handleAirShippingChange(evt) {
    this.setState({
      airShipping: evt.target.value,
    });
  };
  
  handleOceanShippingChange(evt) {
    this.setState({
      oceanShipping: evt.target.value,
    });
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
  
  handleDimensionsLbsInChange(evt) {
    this.setState({
      dimensionsLbsIn: evt.target.value,
    });
  };
  
  handleDimensionsCmKgChange(evt) {
    this.setState({
      dimensionsCmKg: evt.target.value,
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
          <input type="radio" id="airShipping" onClick={this.changeTitle} name="shippingradio" value="1" /><label>Air</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="oceanShipping" onClick={this.changeTitle} name="shippingradio" value="2" /><label>Ocean</label>
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
        <br></br>        <div class="quote-text"><label>Duty Rates</label></div>
        <div class="quote-text">
          <select id="dutyRates" name="dutyRates" data-test="dutyRates" placeholder="dutyRates" value={this.state.dutyRates} onChange={this.handleDutyRatesChange}>
            <option value="0">5.0</option>
            <option value="1">6.0</option>
            <option value="2">7.0</option>
            <option value="4">8.0</option>
          </select>
          </div>
          <br></br>         <div class="quote-text"><label>Package Details</label></div> 
          <p></p>
          <div class="quote-text">
          
                
               
          </div>         
          <div class="quote-text"><label>&nbsp;&nbsp;&nbsp;&nbsp;Weight: </label><input type="number" min="1" max="5" id="weight" data-test="weight" placeholder="Wt" value={this.state.weight} onChange={this.handleWeightChange} /><label>{this.state.measure}</label></div>
         <p></p><div class="quote-text"><label>&nbsp;&nbsp;&nbsp;&nbsp;Length: </label><input type="number" min="1" max="5" id="length" data-test="length" placeholder="Len" value={this.state.length} onChange={this.handleLengthChange} /><label>{this.state.dimensions}</label></div>
          <p></p><div class="quote-text"><label>&nbsp;&nbsp;&nbsp;&nbsp;Width:  </label>&nbsp;<input type="number" min="1" max="5" id="width" data-test="width" placeholder="W" value={this.state.width} onChange={this.handleWidthChange} /><label>{this.state.dimensions}</label></div>
          <p></p><div class="quote-text"><label>&nbsp;&nbsp;&nbsp;&nbsp;Height: </label><input type="number" min="1" max="5" id="height" data-test="height" placeholder="Ht" value={this.state.height} onChange={this.handleHeightChange} /><label>{this.state.dimensions}</label>
        </div>
        <p></p>
          <div class="quote-text"><label>Dimensions</label></div>
          <div class="quote-text">
          <input type="radio" id="lbs" name="measure" value="lbs" onClick={this.changeTitle}/><label>lbs&nbsp;</label><label>/</label>
          <input type="radio" id="kg" name="measure" value="kg" onClick={this.changeTitle}/><label>kg</label>&nbsp;&nbsp;&nbsp;&nbsp;
        
          <input type="radio" id="in" name="dimensions" value="in" onClick={this.changeTitle}/><label>in&nbsp;</label><label>/</label>
          <input type="radio" id="cm" name="dimensions" value="cm" onClick={this.changeTitle}/><label>cm</label>
        </div>
        <p></p>
          <br></br>
        <div class="text-center"><input type="submit" value="      GET A FREE QUOTE     " data-test="submit" /></div>
        <p></p>
        <p></p>

            
     
                           
             
        </form>
       </div>
      </div>
    );
  }
}

export default Quote;