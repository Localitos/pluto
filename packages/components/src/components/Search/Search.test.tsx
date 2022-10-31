import { render, screen } from "@testing-library/react";
import React from "react";
import { Search } from "./Search";

describe("<Search />", () => {
  const initialProps = {
    id: "input",
    name: "cool",
    value: "value",
    required: true,
    disabled: true,
    readOnly: true,
    hasError: true,
    placeholder: "Search",
  };

  render(<Search {...initialProps} />);

  const SearchElement = screen.getByPlaceholderText(initialProps.placeholder);

  it("renders correctly", () => {
    expect(SearchElement).toBeInTheDocument();
  });

  it("should render a search value", () => {
    expect(SearchElement).toHaveValue("value");
  });

  it("should render a search id", () => {
    expect(SearchElement).toHaveAttribute("id", "input");
  });

  it("should render a search name", () => {
    expect(SearchElement).toHaveAttribute("name", "cool");
  });

  it("should render a search type", () => {
    expect(SearchElement).toHaveAttribute("type", "search");
  });

  it("should render a search placeholder", () => {
    expect(SearchElement).toHaveAttribute("placeholder", "Search");
  });
});
