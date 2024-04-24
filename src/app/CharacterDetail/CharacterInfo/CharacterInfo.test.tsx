import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { CharacterInfo } from "./CharacterInfo";

describe("Character Info", () => {
  it("should render character info", async () => {
    render(<CharacterInfo type={"some type"} value={"something here"} />);

    expect(screen.getByText(/some type:/i)).toBeVisible();
    expect(screen.getByText(/something here/i)).toBeVisible();
  });

  it("should render character info with unknown value", async () => {
    render(<CharacterInfo type={"some type"} />);

    expect(screen.getByText(/some type:/i)).toBeVisible();
    expect(screen.getByText(/unknown/i)).toBeVisible();
  });
});
