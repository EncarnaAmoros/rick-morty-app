import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";

import styles from "./GoBack.module.scss";

export const GoBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.backIcon} data-testid={"go-back-icon"}>
      <BsArrow90DegLeft onClick={goBack} />
    </div>
  );
};
