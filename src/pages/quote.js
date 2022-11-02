import React from 'react';
import styles from './quote.module.css';

const Quote = () => (
  <>
    <main className={styles.quoteContainer}>
      <p className={styles.quote}>
        Mathematics is not about numbers, equations, computations,
        or algorithms. It is about understanding. -William Paul Thurston.
      </p>
    </main>
  </>
);

export default Quote;
