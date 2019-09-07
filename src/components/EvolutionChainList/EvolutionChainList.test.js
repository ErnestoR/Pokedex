import React from "react";
import { render, getByText } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import EvolutionChainList from "./EvolutionChainList";

describe("EvolutionChainList", () => {
  // Using kirlia since it evovles from one and can evolve into many
  const kirlia = {
    evolutionChain: {
      baby_trigger_item: null,
      chain: {
        evolution_details: [],
        evolves_to: [
          {
            evolves_to: [
              {
                evolves_to: [],
                is_baby: false,
                species: {
                  name: "gardevoir",
                  url: "https://pokeapi.co/api/v2/pokemon-species/282/"
                }
              },
              {
                evolves_to: [],
                is_baby: false,
                species: {
                  name: "gallade",
                  url: "https://pokeapi.co/api/v2/pokemon-species/475/"
                }
              }
            ],
            is_baby: false,
            species: {
              name: "kirlia",
              url: "https://pokeapi.co/api/v2/pokemon-species/281/"
            }
          }
        ],
        is_baby: false,
        species: {
          name: "ralts",
          url: "https://pokeapi.co/api/v2/pokemon-species/280/"
        }
      },
      id: 140
    },
    species: {
      base_happiness: 35,
      capture_rate: 120,
      color: {
        name: "white",
        url: "https://pokeapi.co/api/v2/pokemon-color/9/"
      },
      egg_groups: [
        {
          name: "indeterminate",
          url: "https://pokeapi.co/api/v2/egg-group/11/"
        }
      ],
      evolution_chain: {
        url: "https://pokeapi.co/api/v2/evolution-chain/140/"
      },
      evolves_from_species: {
        name: "ralts",
        url: "https://pokeapi.co/api/v2/pokemon-species/280/"
      },
      has_gender_differences: false,
      hatch_counter: 20,
      id: 281,
      is_baby: false,
      name: "kirlia"
    }
  };

  const eevee = {
    species: {
      name: "eevee",
      base_happiness: 70,
      capture_rate: 45,
      evolution_chain: {
        url: "https://pokeapi.co/api/v2/evolution-chain/67/"
      },
      evolves_from_species: null
    },
    evolutionChain: {
      baby_trigger_item: null,
      chain: {
        evolution_details: [],
        evolves_to: [
          {
            evolves_to: [],
            is_baby: false,
            species: {
              name: "vaporeon",
              url: "https://pokeapi.co/api/v2/pokemon-species/134/"
            }
          }
        ],
        is_baby: false,
        species: {
          name: "eevee",
          url: "https://pokeapi.co/api/v2/pokemon-species/133/"
        }
      },
      id: 67
    }
  };

  const vaporeon = {
    species: {
      evolution_chain: {
        url: "https://pokeapi.co/api/v2/evolution-chain/67/"
      },
      evolves_from_species: {
        name: "eevee",
        url: "https://pokeapi.co/api/v2/pokemon-species/133/"
      },
      id: 134,
      is_baby: false,
      name: "vaporeon"
    },
    evolutionChain: {
      baby_trigger_item: null,
      chain: {
        evolution_details: [],
        evolves_to: [
          {
            evolves_to: [],
            is_baby: false,
            species: {
              name: "vaporeon",
              url: "https://pokeapi.co/api/v2/pokemon-species/134/"
            }
          }
        ],
        is_baby: false,
        species: {
          name: "eevee",
          url: "https://pokeapi.co/api/v2/pokemon-species/133/"
        }
      },
      id: 67
    }
  };

  const RouterWrapper = props => (
    <Router>
      <EvolutionChainList {...props} />
    </Router>
  );

  it("renders empty when no data is provided", () => {
    const { container } = render(<EvolutionChainList />);

    expect(container).toMatchSnapshot();
  });
  it("renders title", () => {
    const { getByText } = render(<RouterWrapper {...kirlia} />);

    expect(getByText("Evolutions")).toBeInTheDocument();
  });
  it("renders Evolves from - title", () => {
    const { getByTestId } = render(<RouterWrapper {...kirlia} />);
    const evolutionChain = getByTestId("evolution-chain-from");

    expect(getByText(evolutionChain, "Evolves from")).toBeInTheDocument();
  });
  it("renders Evolves from - previous evolution tree", () => {
    const { getByTestId } = render(<RouterWrapper {...kirlia} />);
    const evolutionChain = getByTestId("evolution-chain-from");

    expect(getByText(evolutionChain, "Ralts")).toBeInTheDocument();
    expect(evolutionChain.querySelectorAll("a").length).toBe(1);
  });
  it("renders Evolves from - title", () => {
    const { getByTestId } = render(<RouterWrapper {...kirlia} />);
    const evolutionChain = getByTestId("evolution-chain-to");

    expect(getByText(evolutionChain, "Evolves to")).toBeInTheDocument();
  });
  it("renders Evolves from - next evolution tree", () => {
    const { getByTestId } = render(<RouterWrapper {...kirlia} />);
    const evolutionChain = getByTestId("evolution-chain-to");

    expect(getByText(evolutionChain, "Gardevoir")).toBeInTheDocument();
    expect(getByText(evolutionChain, "Gallade")).toBeInTheDocument();
    expect(evolutionChain.querySelectorAll("a").length).toBe(2);
  });

  it("renders links correctly", () => {
    const { container } = render(<RouterWrapper {...kirlia} />);
    // const evolutionChain = getByTestId("evolution-chain-to");

    [...container.querySelectorAll("a")].forEach(element => {
      expect(element).toHaveAttribute("href");
    });
  });

  it("does not render previous evolution if not available", () => {
    const { container } = render(<RouterWrapper {...eevee} />);
    const evolutionChain = container.querySelectorAll(
      '[data-testid="evolution-chain-from"]'
    );

    expect(evolutionChain.length).toBe(0);
  });

  it("does not render next evolution if not available", () => {
    const { container } = render(<RouterWrapper {...vaporeon} />);
    const evolutionChain = container.querySelectorAll(
      '[data-testid="evolution-chain-to"]'
    );

    expect(evolutionChain.length).toBe(0);
  });
});
