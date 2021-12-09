import { Character } from "src/app/types/CharacterDetail";

const characterData: Character = {
  name: "Alfredo",
  species: "Human",
  image: "characterImage1.png",
  id: 1,
  status: "alive",
  type: "some",
  gender: "male",
  origin: { name: "earth", url: "earth.com" },
  location: { name: "venus", url: "earth.com" },
  episode: [],
  url: "someurl.com",
  created: new Date().toString(),
};

export const mockCharacterData = {
  characterDetail: characterData,
  fetching: false,
};
