import React, { Component } from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <table className="cal-container">
        <tbody>
          <tr><td id="display" colSpan="4">0</td></tr>
          <tr>
            <td id="AC">AC</td>
            <td id="plus-minus">+/-</td>
            <td id="percentage">%</td>
            <td id="division" className="orange">÷</td>
          </tr>
          <tr>
            <td id="7">7</td>
            <td id="8">8</td>
            <td id="9">9</td>
            <td id="multiplication" className="orange">0</td>
          </tr>
          <tr>
            <td id="4">4</td>
            <td id="5">5</td>
            <td id="6">6</td>
            <td id="subtraction" className="orange">-</td>
          </tr>
          <tr>
            <td id="1">1</td>
            <td id="2">2</td>
            <td id="3">3</td>
            <td id="plus" className="orange">+</td>
          </tr>
          <tr>
            <td id="0" colSpan="2">0</td>
            <td id="fullStop">.</td>
            <td id="equalTo" className="orange">=</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Calculator;
