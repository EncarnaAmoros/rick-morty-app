import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("should render a spinner", async () => {
    render(<Spinner />);

    expect(screen.getByText("Loading...")).toBeVisible();
  });
});
