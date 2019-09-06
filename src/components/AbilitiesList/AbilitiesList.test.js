import React from "react";
import { render } from "@testing-library/react";
import AbilitiesList from "./AbilitiesList";

describe("AbilitiesList", () => {
  it("renders header text", () => {
    const { getByText } = render(<AbilitiesList />);
    expect(getByText("Abilities")).toBeInTheDocument();
  });

  it("renders list", () => {
    const data = {
      abilities: [
        { ability: { name: "ability1" } },
        { ability: { name: "ability2" } },
        { ability: { name: "ability3" } }
      ]
    };

    const { container, getByText } = render(<AbilitiesList data={data} />);

    expect(container.querySelectorAll("ul .MuiListItem-root").length).toBe(3);
    expect(getByText("ability1")).toBeInTheDocument();
    expect(getByText("ability2")).toBeInTheDocument();
    expect(getByText("ability3")).toBeInTheDocument();
  });
});
