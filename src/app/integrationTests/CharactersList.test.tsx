import React from "react";
import { setupServer } from "msw/node";
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "whatwg-fetch";

import { CharactersList } from "src/app/CharactersList/CharactersList";
import { charactersHandler } from "../CharactersList/service/mocks";

jest.mock("react-router-dom", () => ({
  useNavigate: () => {},
}));

const server = setupServer(charactersHandler);

describe("Character List without", () => {
  beforeAll(() => {
    server.listen({
      onUnhandledRequest: "error",
    });
  });

  afterAll(() => {
    server.close();
  });

  beforeEach(async () => {
    render(<CharactersList />);
    await waitForElementToBeRemoved(screen.getByText(/loading\.\.\./i));
  });

  it("should render a list of characters with pagination", async () => {
    expect(screen.getByText("Alfredo")).toBeVisible();
    expect(screen.getByText("Ana")).toBeVisible();
    expect(screen.getByText("Morty")).toBeVisible();
    expect(screen.getByText(/25 results have been found/)).toBeVisible();
    expect(screen.getByText("1")).toBeVisible();
    expect(screen.getByText(/next/i)).toBeVisible();
  });

  it("should render the second page of the characters list", async () => {
    fireEvent.click(screen.getByText(/next/i));
    expect(await screen.findByText("Summer")).toBeVisible();
    expect(screen.getByText("Rick")).toBeVisible();
    expect(screen.getByText("Bob Esponja")).toBeVisible();
    expect(screen.getByText("2")).toBeVisible();
  });

  it("should render the search of morty characters list without pagination", async () => {
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "morty" },
    });

    expect(screen.getByDisplayValue("morty")).toBeVisible();
    expect(await screen.findByText("Morty Clone")).toBeVisible();
    expect(screen.getByText("Morty")).toBeVisible();
    expect(screen.getByText("Robot Morty")).toBeVisible();
    expect(screen.getByText(/3 results have been found/)).toBeVisible();
    expect(screen.queryByText("0")).not.toBeInTheDocument();
    expect(screen.queryByText(/next/i)).not.toBeInTheDocument();
  });
});
