import React from "react";

import Load from "@/components/load";
import styles from "./styles.module.css";

function MoviesSectionLoading() {
  return (
    <div className={styles.moviesSection}>
      <Load width={128} height={36} />
      <div className={styles.movies}>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Load key={index} />
          ))}
      </div>
    </div>
  );
}

export { MoviesSectionLoading };
