import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renders", () => {
    const { container } = render(<SearchBar />);
    expect(container).toMatchSnapshot();
  });

  it("corectly passes input props", () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar
        inputProps={{
          placeholder: "Search PokeApi",
          onChange: onChangeMock
        }}
      />
    );

    const input = getByPlaceholderText("Search PokeApi");

    fireEvent.change(input, { target: { value: "aaa" } });

    expect(input).toBeInTheDocument();
    expect(onChangeMock).toBeCalled();
    expect(input).toHaveValue("aaa");
  });
});
