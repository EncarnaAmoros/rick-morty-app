import React, { useEffect, useState } from "react";
import { Character } from "src/app/types/CharacterDetail";

const rmurl = "https://rickandmortyapi.com/api/character";

export const useCharacterDetail = (id?: string) => {
  const [characterDetail, setCharacterDetail] = useState<Character>();
  const [fetching, setFetching] = useState<boolean>();
  const characterId = id ? +id : undefined;

  const fetchCharacter = React.useCallback(async () => {
    setFetching(true);
    if (!characterId) {
      setFetching(false);
      return;
    }
    const response = await fetch(`${rmurl}/${characterId}`);
    setCharacterDetail(await response.json());
    setFetching(false);
  }, [characterId]);

  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter]);

  return {
    characterDetail,
    fetching,
  };
};
