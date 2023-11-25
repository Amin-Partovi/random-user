import React from "react";

import styles from "./container.module.css";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles["inner-container"]}>{children}</div>
    </div>
  );
};

export default Container;
