import React from "react";

import styles from "./GeneralInfo.module.scss";

type GeneralInfoProps = {
  info: string;
};

export const GeneralInfo = ({ info }: GeneralInfoProps) => {
  return (
    <div className={styles.generalInfo}>
      <div className={styles["generalInfo__text"]}>{info}</div>
    </div>
  );
};
