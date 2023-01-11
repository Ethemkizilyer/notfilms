import React from "react";
import {Loading} from "@/components/load";

import styles from "./style.module.css";

function FeatureMovieLoading() {
  return (
    <div style={{ height: 278 }} className={styles.movieWrapper}>
      <Loading />
    </div>
  );
}

export { FeatureMovieLoading };
