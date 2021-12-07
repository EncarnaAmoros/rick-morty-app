import { Character } from "./CharacterDetail";

interface Info {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
}

export interface CharacterListResponse {
  info: Info;
  results: Character[];
}
