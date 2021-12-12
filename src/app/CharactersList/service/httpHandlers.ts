import { rest } from "msw";

import {
  resultsCharactersWithPagination,
  resultsCharacters2WithPagination,
  resultsCharacters3WithPagination,
  resultsMortyCharacters,
  resultsRickCharacters,
  resultsRickCharactersLastPage,
} from "src/app/CharactersList/CharactersList.mock";
import { mortyCharacterDetail } from "src/app/CharacterDetail/CharacterDetail.mock";

export const charactersHandler = rest.get(
  "*/api/character",
  (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    const name = req.url.searchParams.get("name");

    if (name === "morty") return res(ctx.json(resultsMortyCharacters));
    if (name === "rick" && !page) return res(ctx.json(resultsRickCharacters));
    if (name === "rick" && page === "3")
      return res(ctx.json(resultsRickCharactersLastPage));
    else if (!page || page === "1")
      return res(ctx.json(resultsCharactersWithPagination));
    else if (page === "5")
      return res(ctx.json(resultsCharacters3WithPagination));
    else return res(ctx.json(resultsCharacters2WithPagination));
  }
);

export const characterDetailHandler = rest.get(
  "*/api/character/3",
  (req, res, ctx) => res(ctx.json(mortyCharacterDetail))
);
