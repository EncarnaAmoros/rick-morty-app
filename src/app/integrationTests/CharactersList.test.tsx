import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import {
  vi,
  describe,
  it,
  expect,
  beforeAll,
  afterEach,
  afterAll,
  beforeEach,
} from "vitest";

import { CharactersList } from "app/CharactersList/CharactersList";
import { server } from "../../mocks/node";

vi.mock("react-router-dom", () => ({
  useNavigate: () => {},
}));

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Character List without", () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  const setup = async () => {
    render(<CharactersList />);

    await waitForElementToBeRemoved(screen.queryByText(/loading\.\.\./i));
  };

  it("should render a list of characters with pagination", async () => {
    await setup();

    expect(screen.getByText("Alfredo")).toBeVisible();
    expect(screen.getByText("Ana")).toBeVisible();
    expect(screen.getByText("Morty")).toBeVisible();
    expect(screen.getByText(/25 results have been found/)).toBeVisible();
    expect(screen.getByText("1")).toBeVisible();
    expect(screen.getByText(/next/i)).toBeVisible();
  });

  it("should render the second page of the characters list", async () => {
    await setup();

    fireEvent.click(screen.getByText(/next/i));
    expect(await screen.findByText("Summer")).toBeVisible();
    expect(screen.getByText("Rick")).toBeVisible();
    expect(screen.getByText("Bob Esponja")).toBeVisible();
    expect(screen.getByText("2")).toBeVisible();
  });

  it("should render the last page of the characters list", async () => {
    await setup();

    fireEvent.click(screen.getByText(/last/i));
    expect(await screen.findByText("Alien")).toBeVisible();
    expect(screen.getByText("Robocop")).toBeVisible();
    expect(screen.getByText("Patricio")).toBeVisible();
    expect(screen.getByText("5")).toBeVisible();
    expect(screen.getByText(/25 results have been found/)).toBeVisible();
  });

  it("should render the search of morty characters list without pagination", async () => {
    await setup();

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

  it("should render the last search of rick characters list with pagination", async () => {
    await setup();

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "rick" },
    });

    expect(screen.getByDisplayValue("rick")).toBeVisible();
    expect(await screen.findByText("Rick Clone")).toBeVisible();
    expect(screen.getByText("Rick")).toBeVisible();
    expect(screen.getByText("Robot Rick")).toBeVisible();
    expect(screen.getByText(/30 results have been found/)).toBeVisible();
    expect(screen.queryByText("1")).toBeVisible();

    fireEvent.click(screen.getByText(/last/i));
    expect(await screen.findByText("Final Rick")).toBeVisible();
    expect(screen.getByText(/30 results have been found/)).toBeVisible();
    expect(screen.queryByText("3")).toBeVisible();
  });
});
