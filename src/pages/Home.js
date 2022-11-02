import React from 'react';
import styles from './Home.module.css';

const Home = () => (
  <>
    <main className={styles.main}>
      <p className={styles.welcome}>Welcome to our page!</p>
      <p className={styles.para}>
        {' '}
        Lorem ipsum dolor sit, amet consectetur adipisicing
        elit.Nisi accusantium est quisquam eaque ipsum
        perspiciatis veritatis repellendus?Explicabo iusto
        nihil officia fugit delectus nobis, voluptate, quis
        vero fuga veniam eum.Lorem ipsum dolor sit, amet conse
        ctetur adipisicing elit.Nisi accusantium est quisquam eaque ipsum perspiciatis veritatis.
      </p>
      <p className={styles.para}>
        {' '}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Nisi accusantium est quisquam eaque ipsum perspiciatis
        veritatis repellendus?Explicabo iusto nihil officia
        fugit delectus nobis, voluptate, quis vero fuga veniam eum.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Nisi accusantium est quisquam eaque ipsum perspiciatis veritatis.
      </p>
    </main>
  </>
);

export default Home;
