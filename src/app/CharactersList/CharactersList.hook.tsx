import { useEffect, useState } from "react";
import { CharacterListResponse } from "../types/CharacterList";

const rmurl = "https://rickandmortyapi.com/api/character";

export const useCharacterList = () => {
  const [charactersList, setCharactersList] = useState<CharacterListResponse>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchCharacters = async (url?: string) => {
    const response = await fetch(url ? url : rmurl);
    setCharactersList(await response.json());
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const goToPrevPage = async () => {
    if (charactersList?.info?.prev)
      await fetchCharacters(charactersList.info?.prev);
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = async () => {
    if (charactersList?.info?.next)
      await fetchCharacters(charactersList.info?.next);
    setCurrentPage(currentPage + 1);
  };

  const goToFirstPage = async () => {
    await fetchCharacters(`${rmurl}?page=0`);
    setCurrentPage(0);
  };

  const goToLastPage = async (lastPage: number) => {
    await fetchCharacters(`${rmurl}?page=${lastPage}`);
    setCurrentPage(lastPage);
  };

  return {
    charactersList,
    currentPage,
    goToPrevPage,
    goToNextPage,
    goToFirstPage,
    goToLastPage,
  };
};
