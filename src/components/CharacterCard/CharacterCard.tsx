import React from "react";
import { Card } from "react-bootstrap";

import styles from "./CharacterCard.module.scss";

type CharacterBasicInfo = {
  name: string;
  image: string;
  specie?: string;
  onClick: () => void;
};

export const CharacterCard = (props: CharacterBasicInfo) => {
  const { name, image, specie, onClick } = props;
  return (
    <div className={styles.characterList} onClick={onClick}>
      <Card className={styles.characterList__card}>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>

          <Card.Text>Species: {specie ? specie : "unknown"}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
