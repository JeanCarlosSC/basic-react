import './App.css';
import React from 'react';

var lastInput = "None";
var celsius = 0;
var fahrenheit = 0;
var kelvin = 0;

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  handleOnChange = (key: string, value: string) => {
    updateData(key, value);
  }

  render() {
    return (
      <div className="App">
        <Calculadora onChange={this.handleOnChange} lastInput={lastInput}></Calculadora>
      </div>
    );
  }
}

export default App;

class Calculadora extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Last Input {this.props.lastInput}</h1>
  
        <h2>Celsius</h2>
        <input 
          type="number" 
          onChange={(event) => {this.props.onChange("celsius", event.target.value)}}
          id="celsius">
        </input>
  
        <h2>Fahrenheit</h2>
        <input
          type="number"
          onChange={(event) => {this.props.onChange("fahrenheit", event.target.value);}}
          id="fahrenheit">
        </input>
  
        <h2>Kelvin</h2>
        <input
          type="number"
          onChange={(event) => {this.props.onChange("kelvin", event.target.value);}}
          id="kelvin">
        </input>
      </div>
    );
  }
}

function updateData(key: string, value: string) {
  lastInput = key;
  switch(key) {
    case "celsius": {
      lastInput = "celsius";
      celsius = +value;
      fahrenheit = celsiusToFahrenheit(celsius);
      kelvin = celsiusToKelvin(celsius);
      break;
    }
    case "fahrenheit": {
      lastInput = "fahrenheit";
      fahrenheit = +value;
      celsius = fahrenheitToCelsius(fahrenheit);
      kelvin = fahrenheitToKelvin(fahrenheit);
      break;
    }
    case "kelvin": {
      lastInput = "kelvin";
      kelvin = +value;
      celsius = kelvinToCelsius(kelvin);
      fahrenheit = kelvinToFahrenheit(kelvin);
      break;
    }
  }
}

function celsiusToFahrenheit(celsius: number): number {
  return celsius*9/5+32;
}

function fahrenheitToCelsius(fahrenheit: number): number {
  return 5*(fahrenheit-32)/9;
}

function celsiusToKelvin(celsius: number): number {
  return celsius + 273;
}

function kelvinToCelsius(kelvin: number): number {
  return kelvin - 273;
}

function fahrenheitToKelvin(fahrenheit: number): number {
  return celsiusToKelvin(fahrenheitToCelsius(fahrenheit));
}

function kelvinToFahrenheit(kelvin: number): number {
  return celsiusToFahrenheit(kelvinToCelsius(kelvin));
}
