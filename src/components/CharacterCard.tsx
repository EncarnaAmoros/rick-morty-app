import { Card } from "react-bootstrap";

import "./CharacterCard.css";

type CharacterBasicInfo = {
  name: string;
  image: string;
  specie?: string;
};

export const CharacterCard = (props: CharacterBasicInfo) => {
  const { name, image, specie } = props;
  return (
    <div className="characterList">
      <Card className="characterList__card">
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>

          <Card.Text>Species: {specie ? specie : "unknown"}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
