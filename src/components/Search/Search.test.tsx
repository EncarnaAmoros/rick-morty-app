import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Search } from "./Search";

describe("Search", () => {
  it("should render the search component", async () => {
    render(<Search text={"Morty"} results={0} onChangeSearch={() => {}} />);

    expect(screen.getByDisplayValue("Morty")).toBeVisible();
  });

  it("should render the search text and results", async () => {
    render(
      <Search text={"Morty clone"} results={50} onChangeSearch={() => {}} />
    );

    expect(screen.getByText("50 results have been found")).toBeVisible();
    expect(screen.getByDisplayValue("Morty clone")).toBeVisible();
  });

  it("should not call on change search whitout changes", async () => {
    const onChangeSearch = jest.fn();
    render(
      <Search text={"Morty"} results={50} onChangeSearch={onChangeSearch} />
    );

    expect(onChangeSearch).not.toHaveBeenCalled();
  });

  it("should call on change search with changes", async () => {
    const onChangeSearch = jest.fn();
    render(
      <Search text={"Morty"} results={50} onChangeSearch={onChangeSearch} />
    );

    const inputNode = screen.getByDisplayValue("Morty");
    fireEvent.change(inputNode, { target: { value: "Summer clone" } });

    expect(onChangeSearch).toHaveBeenCalledWith("Summer clone");
  });
});
