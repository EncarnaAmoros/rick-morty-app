import { http } from "msw";

import {
  resultsCharactersWithPagination,
  resultsCharacters2WithPagination,
  resultsCharacters3WithPagination,
  resultsMortyCharacters,
  resultsRickCharacters,
  resultsRickCharactersLastPage,
} from "src/app/CharactersList/CharactersList.mock";
import { mortyCharacterDetail } from "src/app/CharacterDetail/CharacterDetail.mock";

export const charactersHandler = http.get("*/api/character", ({ request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
  const name = url.searchParams.get("name");

  if (name === "morty") new Response(JSON.stringify(resultsMortyCharacters));
  if (name === "rick" && !page)
    new Response(JSON.stringify(resultsRickCharacters));
  if (name === "rick" && page === "3")
    new Response(JSON.stringify(resultsRickCharactersLastPage));
  else if (!page || page === "1")
    new Response(JSON.stringify(resultsCharactersWithPagination));
  else if (page === "5")
    new Response(JSON.stringify(resultsCharacters3WithPagination));
  else new Response(JSON.stringify(resultsCharacters2WithPagination));
});

export const characterDetailHandler = http.get(
  "*/api/character/3",
  () => new Response(JSON.stringify(mortyCharacterDetail))
);
