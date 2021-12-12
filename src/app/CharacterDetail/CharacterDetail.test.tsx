import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { mockCharacterData, mockCharacterNoData } from "./CharacterDetail.mock";
import { CharacterDetail } from "./CharactersDetail";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => {},
  useParams: () => ({
    id: "5",
  }),
}));

jest.mock("./CharacterDetail.hook", () => ({
  useCharacterDetail: jest
    .fn()
    .mockReturnValueOnce(mockCharacterData)
    .mockReturnValueOnce(mockCharacterNoData),
}));

describe("Character detail", () => {
  it("should render the detailf of a character", async () => {
    render(<CharacterDetail />);

    expect(screen.getByText("Species:")).toBeVisible();
    expect(screen.getByText("Human")).toBeVisible();
    expect(screen.getByText("Gender:")).toBeVisible();
    expect(screen.getByText("Male")).toBeVisible();
    expect(screen.getByText("Status:")).toBeVisible();
    expect(screen.getByText("Alive")).toBeVisible();
    expect(screen.getByText("Type:")).toBeVisible();
    expect(screen.getAllByText("unknown").length).toBe(2);
    expect(screen.getByText("Episodes:")).toBeVisible();
    expect(screen.getByText("51")).toBeVisible();
    expect(screen.getByText("(origin)")).toBeVisible();
    expect(screen.getByText("(actual)")).toBeVisible();
    expect(screen.getByText("Citadel of Ricks")).toBeVisible();
  });

  it("should render a empty character details data", async () => {
    render(<CharacterDetail />);

    expect(
      screen.getByText("There is no data for this character")
    ).toBeVisible();
  });
});
