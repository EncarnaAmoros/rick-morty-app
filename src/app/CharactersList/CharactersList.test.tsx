import React from "react";
import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import {
  mockResultsCharacters,
  mockResultsCharactersWithPagination,
  mockResultsNoCharactersData,
} from "./CharactersList.mock";
import { CharactersList } from "./CharactersList";

vi.mock("./CharactersList.hook", () => ({
  useCharactersList: vi
    .fn()
    .mockReturnValueOnce(mockResultsCharacters)
    .mockReturnValueOnce(mockResultsCharacters)
    .mockReturnValueOnce(mockResultsCharactersWithPagination)
    .mockReturnValueOnce(mockResultsNoCharactersData)
    .mockReturnValueOnce(mockResultsCharacters),
}));

describe("Character List without", () => {
  it("should render a list of characters", async () => {
    render(<CharactersList />);

    expect(screen.getByText("Alfredo")).toBeVisible();
    expect(screen.getByText("Ana")).toBeVisible();
    expect(screen.getByText("Morty")).toBeVisible();
  });

  it("should render a list of characters without pagination", async () => {
    render(<CharactersList />);

    expect(screen.getByText("Alfredo")).toBeVisible();
    expect(screen.getByText("Ana")).toBeVisible();
    expect(screen.getByText("Morty")).toBeVisible();

    expect(screen.queryByText(3)).not.toBeInTheDocument();
    expect(screen.queryByText(/previous/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/next/i)).not.toBeInTheDocument();
  });

  it("should render a list of characters with pagination", async () => {
    render(<CharactersList />);

    expect(screen.getByText("Alfredo")).toBeVisible();
    expect(screen.getByText("Ana")).toBeVisible();
    expect(screen.getByText("Morty")).toBeVisible();

    expect(screen.getByText(3)).toBeVisible();
    expect(screen.getByText(/previous/i)).toBeVisible();
    expect(screen.getByText(/next/i)).toBeVisible();
  });

  it("should render a empty list of characters", async () => {
    render(<CharactersList />);

    expect(screen.getByText("There is no characters data")).toBeVisible();
  });
});
