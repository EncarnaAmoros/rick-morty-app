import { render, screen } from "@testing-library/react";
import { CharacterCard } from "./CharacterCard";

describe("Character Card", () => {
  it("should render an alien character card", async () => {
    render(
      <CharacterCard name="Juancho" image="imageTest.png" specie="Alien" />
    );

    expect(screen.getByText("Juancho")).toBeVisible();
    expect(screen.getByText(/species: Alien/i)).toBeVisible();
  });

  it("should render an unkown character card", async () => {
    render(<CharacterCard name="Marta" image="imageTest.png" />);

    expect(screen.getByText("Marta")).toBeVisible();
    expect(screen.getByText(/species: unknown/i)).toBeVisible();
  });
});
