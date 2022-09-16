import { render, screen } from "@testing-library/react";
import React from "react";
import { Box } from "./Box";

const childString = "This is a div";

describe("<Box />", () => {
  it("should render a Box as a div", () => {
    render(<Box>{childString}</Box>);
    const renderedBox = screen.getByText(childString);
    expect(renderedBox).toBeInTheDocument();
  });

  it("should render a Box as a button", () => {
    render(<Box as="button">This is a button</Box>);
    const renderedBox = screen.getByRole("button");
    expect(renderedBox).toBeInTheDocument();
  });

  it("should render with a background color class", () => {
    render(<Box backgroundColor="colorBackground">{childString}</Box>);
    const renderedBox = screen.getByText(childString);
    // Using toHaveAttribute here because the Stitches classNames are dynamic. We just want part of the className.
    // eslint-disable-next-line jest-dom/prefer-to-have-class
    expect(renderedBox).toHaveAttribute(
      "class",
      expect.stringContaining("backgroundColor-colorBackground")
    );
  });

  it("should render with a css class", () => {
    render(<Box css={{ display: "flex" }}>{childString}</Box>);
    const renderedBox = screen.getByText(childString);
    // Using toHaveAttribute here because the Stitches classNames are dynamic. We just want part of the className.
    // eslint-disable-next-line jest-dom/prefer-to-have-class
    expect(renderedBox).toHaveAttribute(
      "class",
      expect.stringContaining("css")
    );
  });
});
