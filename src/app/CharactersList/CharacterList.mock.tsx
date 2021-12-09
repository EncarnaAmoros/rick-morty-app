import { CharacterListResponse } from "src/app/types/CharacterList";

const resultsCharacters: CharacterListResponse = {
  info: {
    count: 1,
    pages: 1,
  },
  results: [
    {
      name: "Alfredo",
      species: "Human",
      image: "characterImage1.png",
      id: 1,
      status: "alive",
      type: "some",
      gender: "male",
      origin: { name: "earth", url: "earth.com" },
      location: { name: "earth", url: "earth.com" },
      episode: [],
      url: "someurl.com",
      created: new Date().toString(),
    },
    {
      name: "Ana",
      species: "Human",
      image: "characterImage1.png",
      id: 2,
      status: "alive",
      type: "some",
      gender: "male",
      origin: { name: "earth", url: "earth.com" },
      location: { name: "earth", url: "earth.com" },
      episode: [],
      url: "someurl.com",
      created: new Date().toString(),
    },
    {
      name: "Morty",
      species: "Human",
      image: "characterImage1.png",
      id: 3,
      status: "alive",
      type: "some",
      gender: "male",
      origin: { name: "earth", url: "earth.com" },
      location: { name: "earth", url: "earth.com" },
      episode: [],
      url: "someurl.com",
      created: new Date().toString(),
    },
  ],
};

const resultsCharactersWithPagination: CharacterListResponse = {
  ...resultsCharacters,
  info: {
    count: 25,
    pages: 5,
    next: "url/characters?page=2",
  },
};

export const mockResultsCharacters = {
  charactersList: resultsCharacters,
  currentPage: 3,
  goToPrevPage: () => {},
  goToNextPage: () => {},
  goToFirstPage: () => {},
  goToLastPage: () => {},
};

export const mockResultsCharactersWithPagination = {
  charactersList: resultsCharactersWithPagination,
  currentPage: 3,
  goToPrevPage: () => {},
  goToNextPage: () => {},
  goToFirstPage: () => {},
  goToLastPage: () => {},
};