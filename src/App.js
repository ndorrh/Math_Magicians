import './App.css';
import React, { Component } from 'react';
import Calculator from './components/calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Calculator />
    );
  }
}

export default App;