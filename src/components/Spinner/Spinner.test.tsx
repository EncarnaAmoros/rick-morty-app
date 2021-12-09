import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("should render a spinner", async () => {
    render(<Spinner />);

    expect(screen.getByText("Loading...")).toBeVisible();
  });
});
