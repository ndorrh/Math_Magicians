import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.but = this.but.bind(this);
  }

  but = (e) => {
    const value = e.target.id;
    const result = calculate(this.state, value);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <table className="cal-container" role="grid">
        <tbody>
          <tr>
            <td id="display" colSpan="4">
              {(total || '') + (operation || '') + (next || '') || 0}
            </td>

          </tr>
          <tr>
            <td id="AC" onClick={this.but} role="gridcell">AC</td>
            <td id="+/-" onClick={this.but} role="gridcell">+/-</td>
            <td id="%" onClick={this.but} role="gridcell">%</td>
            <td id="÷" className="orange" role="gridcell" onClick={this.but}>÷</td>
          </tr>
          <tr>
            <td id="7" onClick={this.but} role="gridcell">7</td>
            <td id="8" onClick={this.but} role="gridcell">8</td>
            <td id="9" onClick={this.but} role="gridcell">9</td>
            <td id="x" className="orange" onClick={this.but} role="gridcell">x</td>
          </tr>
          <tr>
            <td id="4" role="gridcell" onClick={this.but}>4</td>
            <td id="5" role="gridcell" onClick={this.but}>5</td>
            <td id="6" role="gridcell" onClick={this.but}>6</td>
            <td id="-" className="orange" role="gridcell" onClick={this.but}>-</td>
          </tr>
          <tr>
            <td id="1" onClick={this.but} role="gridcell">1</td>
            <td id="2" onClick={this.but} role="gridcell">2</td>
            <td id="3" onClick={this.but} role="gridcell">3</td>
            <td id="+" className="orange" onClick={this.but} role="gridcell">+</td>
          </tr>
          <tr>
            <td id="0" colSpan="2" role="gridcell" onClick={this.but}>0</td>
            <td id="." role="gridcell" onClick={this.but}>.</td>
            <td id="=" className="orange" role="gridcell" onClick={this.but}>=</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Calculator;
