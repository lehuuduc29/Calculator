
import React from 'react';
// import ReactDOM from 'react-dom/client';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.name = 'Calculator'
    this.number1 = ''
    this.number2 = ''
    this.result = ''
  }


  handleAdd = () => {
    this.number1 = parseInt(document.getElementById('number1').value)
    this.number2 = parseInt(document.getElementById('number2').value)
    this.result = this.number1 + this.number2
    document.getElementById('result').innerHTML = this.result

  }

  handleSubtract = () => {
    this.number1 = parseInt(document.getElementById('number1').value)
    this.number2 = parseInt(document.getElementById('number2').value)
    this.result = this.number1 - this.number2
    document.getElementById('result').innerHTML = this.result

  }

  handleMultiple = () => {
    this.number1 = parseInt(document.getElementById('number1').value)
    this.number2 = parseInt(document.getElementById('number2').value)
    this.result = this.number1 * this.number2
    document.getElementById('result').innerHTML = this.result
  }

  handleDivision = () => {
    this.number1 = parseInt(document.getElementById('number1').value)
    this.number2 = parseInt(document.getElementById('number2').value)
    this.result = this.number1 / this.number2
    document.getElementById('result').innerHTML = this.result
  }



  render() {
    return (
      <div>
        <h1>{this.name}</h1>
        <div>
          <input id='number1' type='number' placeholder='0' />
        </div>
        <div>
          <input id='number2' type='number' placeholder='0' />
        </div>
        <h2>
          Result:
          <p id='result'></p>
        </h2>
        <button type='button' onClick={this.handleAdd} >+</button>
        <button type='button' onClick={this.handleSubtract}>-</button>
        <button type='button' onClick={this.handleMultiple}>x</button>
        <button type='button' onClick={this.handleDivision}>/</button>
      </div>
    )
  }
}
export default App;