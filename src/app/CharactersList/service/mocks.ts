import { rest } from "msw";

import {
  resultsCharactersWithPagination,
  resultsCharacters2WithPagination,
  resultsMortyCharacters,
} from "src/app/CharactersList/CharactersList.mock";
import { mortyCharacterDetail } from "src/app/CharacterDetail/CharacterDetail.mock";

export const charactersHandler = rest.get(
  "*/api/character",
  (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    const name = req.url.searchParams.get("name");

    if (name === "morty") return res(ctx.json(resultsMortyCharacters));
    else if (!page || page === "1")
      return res(ctx.json(resultsCharactersWithPagination));
    else return res(ctx.json(resultsCharacters2WithPagination));
  }
);

export const characterDetailHandler = rest.get(
  "*/api/character/3",
  (req, res, ctx) => res(ctx.json(mortyCharacterDetail))
);
