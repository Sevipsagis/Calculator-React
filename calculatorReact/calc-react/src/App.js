import React, { Component } from 'react';
import Display from './Component/Display';
import Buttons from './Component/Buttons';
import Button from './Component/Button'
import math from 'mathjs';
import update from 'immutability-helper';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { operations: [] };
  }

  handleClick = e => {
    const value = e.target.getAttribute('data-value')
    switch (value) {
      case 'clear':
        this.setState({
          operations: [],
        })
        break
      case 'equal':
        this.calculateOperations()
        break
      default:
        const newOperations = update(this.state.operations, {
          $push: [value],
        })
        this.setState({
          operations: newOperations,
        })
        break;
    };
  }

  calculateOperations = () => {
    let result = this.state.operations.join('')
    if (result) {
      result = math.eval(result)
      result = math.format(result, { precision: 14 })
      result = String(result)
      this.setState({
        operations: [result],
      })
    }
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="container col-md-5 d-flex justify-content-between">
          <Button onClick={this.handleClick} label="C" value="clear" />
          <Display data={this.state.operations} />
        </div>

        <div className="container col-md-5 d-flex justify-content-between">
          <Button onClick={this.handleClick} label="7" value="7" />
          <Button onClick={this.handleClick} label="8" value="8" />
          <Button onClick={this.handleClick} label="9" value="9" />
          <Button onClick={this.handleClick} label="+" size="2" value="+" />
        </div>

        <div className="container col-md-5 d-flex justify-content-between">
          <Button onClick={this.handleClick} label="4" value="4" />
          <Button onClick={this.handleClick} label="5" value="5" />
          <Button onClick={this.handleClick} label="6" value="6" />
          <Button onClick={this.handleClick} label="-" value="-" />
        </div>

        <div className="container col-md-5 d-flex justify-content-between">
          <Button onClick={this.handleClick} label="1" value="1" />
          <Button onClick={this.handleClick} label="2" value="2" />
          <Button onClick={this.handleClick} label="3" value="3" />
          <Button onClick={this.handleClick} label="x" value="*" />
        </div>

        <div className="container col-md-5 d-flex justify-content-between">
          <Button onClick={this.handleClick} label="0" value="0" />
          <Button onClick={this.handleClick} label="." value="." />
          <Button onClick={this.handleClick} label="=" size="2" value="equal" />
          <Button onClick={this.handleClick} label="/" value="/" />
        </div>












      </div>
    );
  }
}
export default App;
