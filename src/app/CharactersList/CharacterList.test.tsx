import { render, screen } from "@testing-library/react";
import { CharacterListResponse } from "../types/CharacterList";
import { CharactersList } from "./CharactersList";

const mockResultsList: CharacterListResponse = {
  count: 1,
  pages: 1,
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

jest.mock("./CharactersList.hook", () => ({
  useCharacterList: () => [mockResultsList],
}));

describe("Character List", () => {
  it("should render a list of characters", async () => {
    render(<CharactersList />);

    expect(screen.getByText("Alfredo")).toBeVisible();
    expect(screen.getByText("Ana")).toBeVisible();
    expect(screen.getByText("Morty")).toBeVisible();
  });
});
