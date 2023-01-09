import React from 'react'
import Load from '../load'
import styles from "./styles.module.css";

const CategoryLoading = () => {
  return (
    <div className={styles.categories}>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Load key={index} height={72} />
        ))}
    </div>
  );
}

export default CategoryLoading