import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Home";

describe("HomePage", () => {
  let list = [{ name: "pikachu" }, { name: "raichu" }];
  it("renders progress bar when loading", () => {
    const { getByTestId } = render(<HomePage loading />);

    expect(getByTestId("loading-progress")).toBeInTheDocument();
  });

  it("renders list when data is provided", () => {
    const { queryByTestId, getByText } = render(
      <Router>
        <HomePage list={list} />
      </Router>
    );

    expect(queryByTestId("loading-progress")).toBeNull();
    expect(getByText("pikachu")).toBeInTheDocument();
    expect(getByText("raichu")).toBeInTheDocument();
  });

  it("is a virtualized list", () => {
    const biglist = new Array(100).fill({ name: "pikachu" });
    const { getByTestId } = render(
      <Router>
        <HomePage list={biglist} />
      </Router>
    );
    const listContainer = getByTestId("pokemon-list-container");

    expect(listContainer.querySelectorAll("a").length).toBe(11);
  });

  describe("searching", () => {
    let queryByText;
    let getByText;
    let getByPlaceholderText;
    let input;

    beforeEach(() => {
      const Wrapper = render(
        <Router>
          <HomePage list={list} />
        </Router>
      );

      queryByText = Wrapper.queryByText;
      getByText = Wrapper.getByText;
      getByPlaceholderText = Wrapper.getByPlaceholderText;
      input = getByPlaceholderText("Search PokeApi");

      expect(getByText("pikachu")).toBeInTheDocument();
      expect(getByText("raichu")).toBeInTheDocument();
    });

    test("fitlering - returning 'none'", () => {
      fireEvent.change(input, { target: { value: "none" } });

      expect(queryByText("pikachu")).toBeNull();
      expect(queryByText("raichu")).toBeNull();
    });
    test("fitlering - returning 'pika'", () => {
      fireEvent.change(input, { target: { value: "pika" } });

      expect(getByText("pikachu")).toBeInTheDocument();
      expect(queryByText("raichu")).toBeNull();
    });
    test("fitlering - returning 'chu'", () => {
      fireEvent.change(input, { target: { value: "chu" } });

      expect(getByText("pikachu")).toBeInTheDocument();
      expect(getByText("raichu")).toBeInTheDocument();
    });
  });
});
