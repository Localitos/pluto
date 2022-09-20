import { render, screen } from "@testing-library/react";
import React from "react";
import { Text } from "./Text";

const childString = "This is a span";

describe("<Text />", () => {
  it("should render a Text as a div", () => {
    render(<Text>{childString}</Text>);
    const renderedText = screen.getByText(childString);
    expect(renderedText).toBeInTheDocument();
  });

  it("should render a Text as a heading", () => {
    render(<Text as="h2">This is a heading</Text>);
    const renderedText = screen.getByRole("heading", { level: 2 });
    expect(renderedText).toBeInTheDocument();
  });

  it("should render with a background color class", () => {
    render(<Text color="colorTextLink">{childString}</Text>);
    const renderedText = screen.getByText(childString);
    // Using toHaveAttribute here because the Stitches classNames are dynamic. We just want part of the className.
    // eslint-disable-next-line jest-dom/prefer-to-have-class
    expect(renderedText).toHaveAttribute(
      "class",
      expect.stringContaining("color-colorTextLink")
    );
  });

  it("should render as an anchor with an href", () => {
    render(
      <Text as="a" href="https://localyzeapp.com">
        This is an anchor
      </Text>
    );
    const renderedText = screen.getByRole("link");
    expect(renderedText).toHaveAttribute(
      "href",
      expect.stringContaining("https://localyzeapp.com")
    );
  });
});
