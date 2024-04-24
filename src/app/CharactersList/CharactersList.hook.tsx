import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getCharactersListUrl } from "app/CharactersList/service/urls";
import { CharacterListResponse } from "app/types/CharacterList";

export const useCharactersList = () => {
  const firstPage: number = 1;

  const [charactersList, setCharactersList] = useState<CharacterListResponse>();
  const [fetching, setFetching] = useState<boolean>();
  const [currentPage, setCurrentPage] = useState<number>(firstPage);
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();

  const fetchCharacters = async (url: string) => {
    setFetching(true);
    const response = await fetch(url);
    setCharactersList(await response.json());
    setCurrentPage(1);
    setFetching(false);
  };

  useEffect(() => {
    fetchCharacters(getCharactersListUrl(searchText));
  }, [searchText]);

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
    await fetchCharacters(getCharactersListUrl(searchText, 0));
    setCurrentPage(firstPage);
  };

  const goToLastPage = async (lastPage: number) => {
    await fetchCharacters(getCharactersListUrl(searchText, lastPage));
    setCurrentPage(lastPage);
  };

  const goToCharacterDetail = (id: number) => {
    navigate(`/character/${id}`);
  };

  return {
    charactersList,
    fetching,
    currentPage,
    searchText,
    setSearchText,
    goToPrevPage,
    goToNextPage,
    goToFirstPage,
    goToLastPage,
    goToCharacterDetail,
  };
};
