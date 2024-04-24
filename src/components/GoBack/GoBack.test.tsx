import React from "react";
import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { GoBack } from "./GoBack";

vi.mock("react-router-dom", () => ({
  useNavigate: () => {},
}));

describe("GoBack", () => {
  it("should render a go back icon", async () => {
    render(<GoBack />);

    expect(screen.getByTestId("go-back-icon")).toBeVisible();
  });
});
