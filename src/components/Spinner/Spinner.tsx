import React from "react";
import SpinnerComponent from "react-bootstrap/Spinner";

import styles from "./Spinner.module.scss";

export const Spinner = () => {
  const loadingText = "Loading...";

  return (
    <div className={styles.spinner}>
      <SpinnerComponent animation="border" role="status">
        <span className="visually-hidden">{loadingText}</span>
      </SpinnerComponent>
    </div>
  );
};
