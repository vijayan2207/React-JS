import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Common.css';
import sidelogo from '../images/logistics-bg.png';

export default class Quote extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location);

    this.state = {
      input: {},
      errors: {},
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

    this.handleChange = this.handleChange.bind(this);
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
  
  handleChange(evt) {
    let input = this.state.input;
    input[evt.target.name] = evt.target.value;
  
    this.setState({
      input
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    alert('Quote Form ');

    if (!this.state.shippingType) {
      return this.setState({ error: 'Please select shipping type (Air / Ocean)' });
    }

    if (!this.state.originCountry) {
      return this.setState({ error: 'Please choose origin country' });
    }

    if (!this.state.originCity) {
      return this.setState({ error: 'Please enter origin city' });
    }

    if (!this.state.destinationCountry) {
      return this.setState({ error: 'Please choose destination country' });
    }

    if (!this.state.destinationCity) {
      return this.setState({ error: 'Please enter destination city' });
    }

    if (!this.state.terms) {
      return this.setState({ error: 'Please select terms' });
    }

    if (!this.state.dutyRates) {
      return this.setState({ error: 'Please select duty rates' });
    }

    if (!this.state.weight) {
      return this.setState({ error: 'Please select weight' });
    }

    if (!this.state.height) {
      return this.setState({ error: 'Please select height' });
    }

    if (!this.state.length) {
      return this.setState({ error: 'Please select length' });
    }

    if (!this.state.breadth) {
      return this.setState({ error: 'Please select breadth' });
    }

    if (!this.state.dimensions) {
      return this.setState({ error: 'Please select size dimensions' });
    }

    if (!this.state.measures) {
      return this.setState({ error: 'Please select weight' });
    }
  
    if(this.validate()){
      console.log(this.state);

      let input = {};
      input["shippingType"] = "";
      input["originCountry"] = "";
      input["originCity"] = "";
      input["destinationCountry"] = "";
      input["destinationCity"] = "";
      input["terms"] = "";
      input["dutyRates"] = "";
      input["weight"] = "";
      input["length"] = "";
      input["breadth"] = "";
      input["height"] = "";
      input["measures"] = "";
      input["dimensions"] = "";
      this.setState({input:input});

      alert('Quote Form is submitted');
    }
  }
  
  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;
  
    if (!input["shippingType"]) {
      isValid = false;
      errors["shippingType"] = "Please choose shipping type.";
    }

    if (!input["originCountry"]) {
      isValid = false;
      errors["originCountry"] = "Please enter origin country.";
    }

    if (!input["originCity"]) {
      isValid = false;
      errors["originCity"] = "Please enter origin city.";
    }

    if (!input["destinationCountry"]) {
      isValid = false;
      errors["destinationCountry"] = "Please enter destination country.";
    }

    if (!input["destinationCity"]) {
      isValid = false;
      errors["destinationCity"] = "Please enter destination city.";
    }

    if (!input["terms"]) {
      isValid = false;
      errors["terms"] = "Please select terms.";
    }

    if (!input["dutyRates"]) {
      isValid = false;
      errors["dutyRates"] = "Please select duty rates.";
    }

    if (!input["weight"]) {
      isValid = false;
      errors["weight"] = "Please enter the weight.";
    }

    if (!input["length"]) {
      isValid = false;
      errors["length"] = "Please enter the length.";
    }

    if (!input["width"]) {
      isValid = false;
      errors["width"] = "Please enter the width.";
    }

    if (!input["height"]) {
      isValid = false;
      errors["height"] = "Please enter the height.";
    }

    if (!input["dimensions"]) {
      isValid = false;
      errors["dimensions"] = "Please enter the size dimensions.";
    }

    if (!input["measure"]) {
      isValid = false;
      errors["measure"] = "Please enter the weight.";
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
              <span class="txt1"><Link to="/" className="Home-LoginText">Home</Link></span>
            </div>
            <div class="login-header">
              <h1>Get an Instant Shipping Quote</h1>
            </div>
              <p></p>
            <div class="quote-text">
              <label>Shippig Type</label>
            </div>
            <div class="quote-text">
              <input type="radio" id="shippingtype" onChange={this.handleShippingTypeChange} name="shippingtype" value="Air" />
                <label>Air</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" id="shippingtype" onChange={this.handleShippingTypeChange} name="shippingtype" value="Ocean" />
                <label>Ocean</label>
            </div>
              <p></p>
            <div class="quote-text">
              <label>From</label>
            </div>           
            <div class="quote-text">
              <input type="text" border="none" id="originCountry" name="originCountry" data-test="originCountry" placeholder="origin country" value={this.state.originCountry} onChange={this.handleOriginCountryChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" id="originCity" name="originCity" data-test="originCity" placeholder="origin city" value={this.state.originCity} onChange={this.handleOriginCityChange} />
            </div>
              <p></p>
            <div class="quote-text">
              <label>To</label>
            </div>           
            <div class="quote-text">
              <input type="text" id="destinationCountry" name="destinationCountry" data-test="destinationCountry" placeholder="destination country" value={this.state.destinationCountry} onChange={this.handleDestinationCountryChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" id="destinationCity" name="destinationCity" data-test="destinationCity" placeholder="destination city" value={this.state.destinationCity} onChange={this.handleDestinationCityChange} />
            </div>
              <p></p>
              <br></br>  
            <div class="quote-text">
              <label>Terms</label>
              <label class="quote-text2">Duty Rates(%)</label>
            </div>
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
              <br></br>         
            <div class="quote-text">
              <label>Package Details</label>
            </div> 
              <p></p>     
            <div class="quote-text">
              <label>&nbsp;&nbsp;&nbsp;&nbsp;Weight: </label>
                <input type="number" min="1" max="99" id="weight" name="weight" data-test="weight" placeholder="Wt" value={this.state.weight} onChange={this.handleWeightChange} />
              <label>{this.state.measure}</label>
            </div>
              <p></p>
            <div class="quote-text">
              <label>&nbsp;&nbsp;&nbsp;&nbsp;Length: </label>
                <input type="number" min="1" max="99" id="length" name="length" data-test="length" placeholder="Len" value={this.state.length} onChange={this.handleLengthChange} />
              <label>{this.state.dimensions}</label>
            </div>
              <p></p>
            <div class="quote-text">
              <label>&nbsp;&nbsp;&nbsp;&nbsp;Width:  </label>&nbsp;
                <input type="number" min="1" max="99" id="width" name="width" data-test="width" placeholder="W" value={this.state.width} onChange={this.handleWidthChange} />
              <label>{this.state.dimensions}</label>
            </div>
              <p></p>
            <div class="quote-text">
              <label>&nbsp;&nbsp;&nbsp;&nbsp;Height: </label>
                <input type="number" min="1" max="99" id="height" name="height" data-test="height" placeholder="Ht" value={this.state.height} onChange={this.handleHeightChange} />
              <label>{this.state.dimensions}</label>
            </div>
              <p></p>
            <div class="quote-text">
              <label>Dimensions</label>
            </div>
            <div class="quote-text">
              <input type="radio" id="lbs" name="measure" value="lbs" onClick={this.changeTitle}/>
                <label>lbs&nbsp;</label>
                <label>/</label>
              <input type="radio" id="kg" name="measure" value="kg" onClick={this.changeTitle}/>
                <label>kg</label>&nbsp;&nbsp;&nbsp;&nbsp;
          
              <input type="radio" id="inches" name="dimensions" value="inches" onClick={this.changeTitle}/>
                <label>in&nbsp;</label>
                <label>/</label>
              <input type="radio" id="cm" name="dimensions" value="cm" onClick={this.changeTitle}/>
                <label>cm</label>
            </div>
              <p></p>
              <br></br>
            <div class="text-center">
              <Link to={{ pathname: '/QuoteComplete', 
                state: { shippingType: this.state.shippingType,
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
                phone: this.state.phone  } }}>
                  <input type="button" value="Get a Quote"></input>
              </Link>  
            </div>
              <p></p>
              <p></p>
          </div>
        </div>
      </form>
    </>
    );
  }
}
