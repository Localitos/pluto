import { render, screen } from "@testing-library/react";
import React from "react";
import colorTokens from "../../../design-tokens/src/tokens/color.tokens.json";
import { ColorTokensTable } from "./ColorTokensTable";

const numberOfTokens = Object.entries(colorTokens.color).length;

describe("<ColorTokensTable />", () => {
  it("renders correctly", () => {
    render(<ColorTokensTable />);
    const renderIconSizeTokens = screen.getAllByRole("row");

    expect(renderIconSizeTokens).toHaveLength(numberOfTokens + 1); // adding a row here for the column headers
  });

  it("renders token name in the corrent format", () => {
    render(<ColorTokensTable />);

    expect(
      screen.getByRole("cell", { name: /coloravatarbackgroundblue/i })
    ).toBeInTheDocument();
  });
});
