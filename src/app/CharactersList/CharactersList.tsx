import { CharacterCard } from "../../components/CharacterCard";
import { Character } from "../types/CharacterDetail";
import { useCharacterList } from "./CharactersList.hook";

export const CharactersList = () => {
  const [charactersList] = useCharacterList();

  return (
    <>
      <section>
        {charactersList?.results.map((character: Character) => {
          return (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
              specie={character.species}
            />
          );
        })}
      </section>
    </>
  );
};
