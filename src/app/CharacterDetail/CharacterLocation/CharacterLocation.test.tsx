import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { CharacterLocation } from "./CharacterLocation";

describe("Character Location", () => {
  it("should render character origin location", async () => {
    render(<CharacterLocation isOrigin={true} name={"An Earth"} />);

    expect(screen.getByText(/origin/i)).toBeVisible();
    expect(screen.getByText(/an Earth/i)).toBeVisible();
  });

  it("should render character no origin location", async () => {
    render(<CharacterLocation isOrigin={false} name={"A planet"} />);

    expect(screen.getByText(/actual/i)).toBeVisible();
    expect(screen.getByText(/a planet/i)).toBeVisible();
  });
});
