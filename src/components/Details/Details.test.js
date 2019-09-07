import React from "react";
import { render, getByText } from "@testing-library/react";

import Details from "./Details";

describe("Details", () => {
  const data = {
    id: 133,
    name: "eevee",
    order: 198,
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/133.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/133.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/133.png",
      front_shiny_female: null
    },
    stats: [
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      }
    ],
    weight: 65
  };

  const species = {
    flavor_text_entries: [
      {
        flavor_text:
          "The question of why only Eevee has such\nunstable genes has still not been solved.",
        language: {
          name: "en",
          url: "https://pokeapi.co/api/v2/language/9/"
        },
        version: {
          name: "ultra-sun",
          url: "https://pokeapi.co/api/v2/version/29/"
        }
      }
    ]
  };

  it("renders pokemon name", () => {
    const { getByText } = render(<Details data={data} species={species} />);
    const title = getByText("Eevee");

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("MuiTypography-h5");
  });
  it("renders image", () => {
    const { getByTestId } = render(<Details data={data} species={species} />);
    const image = getByTestId("pokemon-details-image");

    expect(image).toHaveStyle(`
      background-image: url(${data.sprites.front_default})
    `);
  });
  it("renders flavor text", () => {
    const { getByText } = render(<Details data={data} species={species} />);
    const flavorText = getByText(
      "The question of why only Eevee has such unstable genes has still not been solved."
    );

    expect(flavorText).toBeInTheDocument();
    expect(flavorText).toHaveClass("MuiTypography-body1");
  });
  it("renders attack stats", () => {
    const { getByTestId } = render(<Details data={data} species={species} />);
    const stats = getByTestId("pokemon-details-attack");

    expect(getByText(stats, "Attack")).toBeInTheDocument();
    expect(getByText(stats, "55")).toBeInTheDocument();
  });
  it("renders defence stats", () => {
    const { getByTestId } = render(<Details data={data} species={species} />);
    const stats = getByTestId("pokemon-details-defence");

    expect(getByText(stats, "Defence")).toBeInTheDocument();
    expect(getByText(stats, "50")).toBeInTheDocument();
  });
  it("renders HP stats", () => {
    const { getByTestId } = render(<Details data={data} species={species} />);
    const stats = getByTestId("pokemon-details-hp");

    expect(getByText(stats, "HP")).toBeInTheDocument();
    expect(getByText(stats, "55")).toBeInTheDocument();
  });
  it("renders speed stats", () => {
    const { getByTestId } = render(<Details data={data} species={species} />);
    const stats = getByTestId("pokemon-details-speed");

    expect(getByText(stats, "Speed")).toBeInTheDocument();
    expect(getByText(stats, "55")).toBeInTheDocument();
  });
  it("renders special attack stats", () => {
    const { getByTestId } = render(<Details data={data} species={species} />);
    const stats = getByTestId("pokemon-details-special-attack");

    expect(getByText(stats, "Special Attack")).toBeInTheDocument();
    expect(getByText(stats, "45")).toBeInTheDocument();
  });
  it("renders special defence stats", () => {
    const { getByTestId } = render(<Details data={data} species={species} />);
    const stats = getByTestId("pokemon-details-special-defence");

    expect(getByText(stats, "Special Defence")).toBeInTheDocument();
    expect(getByText(stats, "65")).toBeInTheDocument();
  });
  it("renders weight stats", () => {
    const { getByTestId } = render(<Details data={data} species={species} />);
    const stats = getByTestId("pokemon-details-weight");

    expect(getByText(stats, "Weight")).toBeInTheDocument();
    expect(getByText(stats, "65")).toBeInTheDocument();
  });
});
