import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { GoBack } from "./GoBack";

jest.mock("react-router-dom", () => ({
  useNavigate: () => {},
}));

describe("GoBack", () => {
  it("should render a go back icon", async () => {
    render(<GoBack />);

    expect(screen.getByTestId("go-back-icon")).toBeVisible();
  });
});
