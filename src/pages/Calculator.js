import React from 'react';
import Calculator from '../components/calculator';
import styles from './Calculator.module.css';

const CalculatorPage = () => (
  <div className={styles.container}>
    <p className={styles.heading}>Let&apos;s do some maths!</p>
    <Calculator />
  </div>
);

export default CalculatorPage;
