import { useEffect, useState } from "react";
import { CharacterListResponse } from "../types/CharacterList";

export const useCharacterList = () => {
  const [charactersList, setCharactersList] = useState<CharacterListResponse>();

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    setCharactersList(await response.json());
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return [charactersList];
};
