import { Character } from "./CharacterDetail";

export interface CharacterListResponse {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
  results: Character[];
}
