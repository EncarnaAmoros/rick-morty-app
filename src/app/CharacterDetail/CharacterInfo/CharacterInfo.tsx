import React from "react";

import styles from "./CharacterInfo.module.scss";

type CharacterInfoProps = {
  type: string;
  value?: string;
};

export const CharacterInfo = ({ type, value }: CharacterInfoProps) => {
  const valueToDisplay = value ? value : "unknown";

  return (
    <>
      <div className={styles["info"]}>
        <span className={styles["info__type"]}>{`${type}: `}</span>
        <p className={styles["info__value"]}>{valueToDisplay}</p>
      </div>
    </>
  );
};
