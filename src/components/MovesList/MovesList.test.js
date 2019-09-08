import React from "react";
import { render } from "@testing-library/react";
import MovesList from "./MovesList";

describe("MovesList", () => {
  const moves = [
    {
      move: {
        name: "tackle",
        url: "https://pokeapi.co/api/v2/move/33/"
      },
      version_group_details: [
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          }
        }
      ]
    },
    {
      move: {
        name: "splash",
        url: "https://pokeapi.co/api/v2/move/150/"
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          }
        }
      ]
    },
    {
      move: {
        name: "flail",
        url: "https://pokeapi.co/api/v2/move/175/"
      },
      version_group_details: [
        {
          level_learned_at: 30,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/"
          }
        }
      ]
    },
    {
      move: {
        name: "bounce",
        url: "https://pokeapi.co/api/v2/move/340/"
      },

      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/"
          }
        }
      ]
    }
  ];

  it("renders header text", () => {
    const { getByText } = render(<MovesList />);
    expect(getByText("Moves")).toBeInTheDocument();
  });

  it("renders list", () => {
    const { container, getByText } = render(<MovesList data={{ moves }} />);

    expect(container.querySelectorAll("ul .MuiListItem-root").length).toBe(4);
    expect(getByText("tackle")).toBeInTheDocument();
    expect(getByText("splash")).toBeInTheDocument();
    expect(getByText("flail")).toBeInTheDocument();
    expect(getByText("bounce")).toBeInTheDocument();
  });
});
