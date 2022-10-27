import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const obj = {
    total: 0,
    next: null,
    operation: null,
  };

  const [state, setState] = useState(obj);

  const buttonClick = (e) => {
    const value = e.target.id;
    const computedResults = calculate(state, value);
    setState(computedResults);
  };

  const { total, next, operation } = state;
  return (
    <table className="cal-container" role="grid">
      <tbody>
        <tr>
          <td id="display" colSpan="4">
            {(total || '') + (operation || '') + (next || '') || 0}
          </td>

        </tr>
        <tr>
          <td id="AC" onClick={buttonClick} role="gridcell">AC</td>
          <td id="+/-" onClick={buttonClick} role="gridcell">+/-</td>
          <td id="%" onClick={buttonClick} role="gridcell">%</td>
          <td id="÷" className="orange" role="gridcell" onClick={buttonClick}>÷</td>
        </tr>
        <tr>
          <td id="7" onClick={buttonClick} role="gridcell">7</td>
          <td id="8" onClick={buttonClick} role="gridcell">8</td>
          <td id="9" onClick={buttonClick} role="gridcell">9</td>
          <td id="x" className="orange" onClick={buttonClick} role="gridcell">x</td>
        </tr>
        <tr>
          <td id="4" role="gridcell" onClick={buttonClick}>4</td>
          <td id="5" role="gridcell" onClick={buttonClick}>5</td>
          <td id="6" role="gridcell" onClick={buttonClick}>6</td>
          <td id="-" className="orange" role="gridcell" onClick={buttonClick}>-</td>
        </tr>
        <tr>
          <td id="1" onClick={buttonClick} role="gridcell">1</td>
          <td id="2" onClick={buttonClick} role="gridcell">2</td>
          <td id="3" onClick={buttonClick} role="gridcell">3</td>
          <td id="+" className="orange" onClick={buttonClick} role="gridcell">+</td>
        </tr>
        <tr>
          <td id="0" colSpan="2" role="gridcell" onClick={buttonClick}>0</td>
          <td id="." role="gridcell" onClick={buttonClick}>.</td>
          <td id="=" className="orange" role="gridcell" onClick={buttonClick}>=</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Calculator;
