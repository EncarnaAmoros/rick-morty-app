import { CharacterListResponse } from "app/types/CharacterList";

const resutlsPage1 = [
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
];

const resutlsPage2 = [
  {
    name: "Summer",
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
    name: "Rick",
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
    name: "Bob Esponja",
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
];

const resutlsPage5 = [
  {
    name: "Alien",
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
    name: "Robocop",
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
    name: "Patricio",
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
];

const resutlsMortySearch = [
  {
    name: "Morty",
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
    name: "Morty Clone",
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
    name: "Robot Morty",
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
];

const resutlsRickSearch = [
  {
    name: "Rick",
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
    name: "Rick Clone",
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
    name: "Robot Rick",
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
];

const resutlsRickSearchLastPage = [
  {
    name: "Final Rick",
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
];

const resultsCharacters: CharacterListResponse = {
  info: {
    count: 1,
    pages: 1,
  },
  results: resutlsPage1,
};

export const resultsMortyCharacters: CharacterListResponse = {
  info: {
    count: 3,
    pages: 1,
  },
  results: resutlsMortySearch,
};

export const resultsRickCharacters: CharacterListResponse = {
  info: {
    count: 30,
    pages: 3,
    next: "url/api/character?page=2",
  },
  results: resutlsRickSearch,
};

export const resultsRickCharactersLastPage: CharacterListResponse = {
  info: {
    count: 30,
    pages: 3,
    prev: "url/api/character?page=2",
  },
  results: resutlsRickSearchLastPage,
};

export const resultsCharactersWithPagination: CharacterListResponse = {
  ...resultsCharacters,
  info: {
    count: 25,
    pages: 5,
    next: "url/api/character?page=2",
  },
};

export const results2CharactersWithPagination: CharacterListResponse = {
  ...resultsCharacters,
  info: {
    count: 25,
    pages: 5,
    next: "url/api/character?page=2",
  },
};

export const resultsCharacters2WithPagination: CharacterListResponse = {
  results: resutlsPage2,
  info: {
    count: 25,
    pages: 5,
    next: "url/api/character?page=2",
  },
};

export const resultsCharacters3WithPagination: CharacterListResponse = {
  results: resutlsPage5,
  info: {
    count: 25,
    pages: 5,
    next: "url/api/character?page=2",
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

export const mockResultsNoCharactersData = {
  charactersList: [],
  currentPage: 0,
  goToPrevPage: () => {},
  goToNextPage: () => {},
  goToFirstPage: () => {},
  goToLastPage: () => {},
};
