import './App.css';
import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';

var lastInput = "None";
var celsius = 0;
var fahrenheit = 0;
var kelvin = 0;

class App extends React.Component {
  render() {
    const updateElements = () => {
      calculadora = <Calculadora celsius={celsius} fahrenheit={fahrenheit} kelvin={kelvin} funcion={updateElements}></Calculadora>
      this.forceUpdate();
    }

    var calculadora = <Calculadora celsius={""} fahrenheit={""} kelvin={""} funcion={updateElements}></Calculadora>

    return (
      <div className="App">
        {calculadora}
      </div>
    );
  }
}

export default App;

const Calculadora = (props: any) => {
  return (
    <div>
      <h1>Last Input {lastInput}</h1>
      <h2>Celsius</h2>
      <input 
        type="number" 
        onChange={(event) => {
          updateFrom("celsius", event.target.value);
          props.funcion();
        }}
        id="celsius">
        </input>

      <h2>Fahrenheit</h2>
      <input type="number"
        onChange={(event) => {
          updateFrom("fahrenheit", event.target.value);
          props.funcion();
        }} id="fahrenheit"></input>
      <h2>Kelvin</h2>
      <input type="number"
        onChange={(event) => {
          updateFrom("kelvin", event.target.value);
          props.funcion();
        }} id="kelvin"></input>
    </div>
  );
}

function updateFrom(key: string, value: string) {
  lastInput = key;
  switch(key) {
    case "celsius": {
      celsius = +value;
      fahrenheit = celsiusToFahrenheit(celsius);
      kelvin = celsiusToKelvin(celsius);
      break;
    }
    case "fahrenheit": {
      fahrenheit = +value;
      celsius = fahrenheitToCelsius(fahrenheit);
      kelvin = fahrenheitToKelvin(fahrenheit);
      break;
    }
    case "kelvin": {
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