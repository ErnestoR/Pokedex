import React from "react";
import { render } from "@testing-library/react";
import PokemonList from "./PokemonList";
import { BrowserRouter as Router } from "react-router-dom";

describe("PokemonList", () => {
  const data = [{ name: "pikachu" }];

  it("renders empty list", () => {
    const { container } = render(<PokemonList data={[]} />);
    expect(container).toMatchSnapshot();
  });

  it("renders list", () => {
    const { container, getByText } = render(
      <Router>
        <PokemonList data={data} />
      </Router>
    );
    expect(getByText("pikachu")).toBeInTheDocument();

    const link = container.querySelector("a");
    expect(link).toHaveAttribute("href", "/pokemon/pikachu");
  });
});
