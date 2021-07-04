import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className="w-full">
      <div className={styles.loader}>
        Loading...
      </div>
    </div>
  );
};

export default Loader;
