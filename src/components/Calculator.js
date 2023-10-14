import React, { Component } from 'react';
import Calculator from './Calculator'; // Adjust the relative path if needed




class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      result: '',
    };
  }

  handleInput = (value) => {
    this.setState((prevState) => ({
      input: prevState.input + value,
    }));
  };

  handleClear = () => {
    this.setState({
      input: '',
      result: '',
    });
  };

  handleCalculate = () => {
    try {
      this.setState({
        result: eval(this.state.input),
      });
    } catch (error) {
      this.setState({
        result: 'Error',
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.input} readOnly />
          <div>{this.state.result}</div>
        </div>
        <div>
          <button onClick={() => this.handleInput('1')}>1</button>
          <button onClick={() => this.handleInput('2')}>2</button>
          <button onClick={() => this.handleInput('3')}>3</button>
          <button onClick={() => this.handleInput('+')}>+</button>
        </div>
        <div>
          <button onClick={() => this.handleInput('4')}>4</button>
          <button onClick={() => this.handleInput('5')}>5</button>
          <button onClick={() => this.handleInput('6')}>6</button>
          <button onClick={() => this.handleInput('-')}>-</button>
        </div>
        <div>
          <button onClick={() => this.handleInput('7')}>7</button>
          <button onClick={() => this.handleInput('8')}>8</button>
          <button onClick={() => this.handleInput('9')}>9</button>
          <button onClick={() => this.handleInput('*')}>*</button>
        </div>
        <div>
          <button onClick={this.handleClear}>C</button>
          <button onClick={() => this.handleInput('0')}>0</button>
          <button onClick={this.handleCalculate}>=</button>
          <button onClick={() => this.handleInput('/')}>/</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
