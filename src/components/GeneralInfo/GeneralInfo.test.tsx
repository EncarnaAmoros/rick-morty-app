import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { GeneralInfo } from "./GeneralInfo";

describe("GeneralInfo", () => {
  it("should render a GeneralInfo", async () => {
    render(<GeneralInfo info={"No data found"} />);

    expect(screen.getByText("No data found")).toBeVisible();
  });
});
