import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ListPagination } from "./ListPagination";

describe("ListPagination", () => {
  it("should render the pagination", async () => {
    render(
      <ListPagination
        curr={1}
        lastPage={27}
        onFirstPage={() => {}}
        onLastPage={() => {}}
        onNext={() => {}}
        onPrev={() => {}}
      />
    );

    expect(screen.getByText(1)).toBeVisible();
  });

  it("should render the pagination starting in the 3 page", async () => {
    render(
      <ListPagination
        curr={3}
        lastPage={4}
        onFirstPage={() => {}}
        onLastPage={() => {}}
        onNext={() => {}}
        onPrev={() => {}}
      />
    );

    expect(screen.getByText(3)).toBeVisible();
  });

  it("should render all the links enabled", async () => {
    render(
      <ListPagination
        curr={3}
        lastPage={4}
        onFirstPage={() => {}}
        onLastPage={() => {}}
        onNext={() => {}}
        onPrev={() => {}}
      />
    );

    expect(screen.getByText(/previous/i).parentElement).not.toHaveAttribute(
      "disabled"
    );
    expect(screen.getByText(/next/i).parentElement).not.toHaveAttribute(
      "disabled"
    );
    expect(screen.getByText(/first/i).parentElement).not.toHaveAttribute(
      "disabled"
    );
    expect(screen.getByText(/last/i).parentElement).not.toHaveAttribute(
      "disabled"
    );
  });

  it("should render the pagination prev icon disabled in the first page", async () => {
    render(
      <ListPagination
        curr={3}
        lastPage={4}
        onFirstPage={() => {}}
        onLastPage={() => {}}
        onNext={() => {}}
        onPrev={undefined}
      />
    );

    expect(screen.getByText(/previous/i).parentElement).toHaveAttribute(
      "disabled"
    );
  });

  it("should render the pagination next icon disabled in the first page", async () => {
    render(
      <ListPagination
        curr={3}
        lastPage={4}
        onFirstPage={() => {}}
        onLastPage={() => {}}
        onNext={undefined}
        onPrev={() => {}}
      />
    );

    expect(screen.getByText(/next/i).parentElement).toHaveAttribute("disabled");
  });
});
