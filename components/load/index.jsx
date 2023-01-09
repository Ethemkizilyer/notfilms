import React from "react";
import styles from "./styles.module.css";

const Load=({ width, height }) =>{
  return <div className={styles.load} style={{ width, height }}></div>;
}

export default  Load ;
