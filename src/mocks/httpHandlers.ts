import { http, HttpResponse } from "msw";

import {
  resultsCharactersWithPagination,
  resultsCharacters2WithPagination,
  resultsCharacters3WithPagination,
  resultsMortyCharacters,
  resultsRickCharacters,
  resultsRickCharactersLastPage,
} from "app/CharactersList/CharactersList.mock";
import { mortyCharacterDetail } from "app/CharacterDetail/CharacterDetail.mock";

export const handlers = [
  http.get("*/api/character", ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");
    const name = url.searchParams.get("name");

    if (name === "morty") return HttpResponse.json(resultsMortyCharacters);
    if (name === "rick" && !page)
      return HttpResponse.json(resultsRickCharacters);
    if (name === "rick" && page === "3")
      return HttpResponse.json(resultsRickCharactersLastPage);
    else if (!page || page === "1")
      return HttpResponse.json(resultsCharactersWithPagination);
    else if (page === "5")
      return HttpResponse.json(resultsCharacters3WithPagination);
    else return HttpResponse.json(resultsCharacters2WithPagination);
  }),

  http.get("*/api/character/3", () => HttpResponse.json(mortyCharacterDetail)),
];
