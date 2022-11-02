import './App.css';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import CalculatorPage from './pages/Calculator';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<CalculatorPage />} />
          <Route path="about" element={<About />} />
        </Routes>
      </>
    );
  }
}

export default App;
