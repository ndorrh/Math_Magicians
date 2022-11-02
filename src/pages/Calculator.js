import React from 'react';
import Calculator from '../components/calculator';
import styles from './Calculator.module.css';

const CalculatorPage = () => (
  <div className={styles.container}>
    <h3>Let&apos;s do some maths!</h3>
    <Calculator />
  </div>
);

export default CalculatorPage;
