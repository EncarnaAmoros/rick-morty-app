import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { mockCharacterData } from "./CharacterDetail.mock";
import { CharacterDetail } from "./CharactersDetail";

jest.mock("react-router-dom", () => ({
  useNavigate: () => {},
  useParams: jest.fn().mockReturnValue({ id: 5 }),
}));

jest.mock("./CharacterDetail.hook", () => ({
  useCharacterDetail: jest.fn().mockReturnValue(mockCharacterData),
}));

describe("Character detail", () => {
  it("should render a list of characters", async () => {
    render(<CharacterDetail />);

    expect(screen.getByText("Alfredo")).toBeVisible();
    expect(screen.getByText(/human/i)).toBeVisible();
    expect(screen.getByText(/alive/i)).toBeVisible();
    expect(screen.getByText(/some/i)).toBeVisible();
    expect(screen.getByText(/male/i)).toBeVisible();
    expect(screen.getByText(/earth/i)).toBeVisible();
    expect(screen.getByText(/venus/i)).toBeVisible();
  });
});
