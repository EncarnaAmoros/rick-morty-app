import React from "react";
import { BsFillHouseFill, BsFillGeoAltFill } from "react-icons/bs";

import styles from "./CharacterLocation.module.scss";

type CharacterLocationProps = {
  isOrigin: boolean;
  name: string;
};

export const CharacterLocation = ({
  isOrigin,
  name,
}: CharacterLocationProps) => {
  const originText = "(origin)";
  const actualText = "(actual)";

  return (
    <>
      <div className={styles["location"]}>
        <span className={styles["location__icon"]}>
          {isOrigin ? <BsFillHouseFill /> : <BsFillGeoAltFill />}
        </span>
        <span className={styles["location__text"]}>
          {` ${isOrigin ? originText : actualText}`}
        </span>
        <p className={styles["location__name"]}>{name}</p>
      </div>
    </>
  );
};
