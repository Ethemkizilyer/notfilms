import React from "react";
import { Skeleton } from "@/components/skeleton";

import styles from "./style.module.css";

function FeatureMovieLoading() {
  return (
    <div style={{ height: 278 }} className={styles.movieWrapper}>
      <Skeleton />
    </div>
  );
}

export { FeatureMovieLoading };
