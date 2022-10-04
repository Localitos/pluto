import { render, screen } from "@testing-library/react";
import React from "react";
import { Text } from "./Text";

const childString = "This is a span";

describe("<Text />", () => {
  it("should render a Text as a div", () => {
    render(<Text.span>{childString}</Text.span>);
    const renderedText = screen.getByText(childString);
    expect(renderedText).toBeInTheDocument();
  });

  it("should render a Text as a heading", () => {
    render(<Text.h2>This is a heading</Text.h2>);
    const renderedText = screen.getByRole("heading", { level: 2 });
    expect(renderedText).toBeInTheDocument();
  });

  it("should render with a display none prop", () => {
    render(<Text.span display="none">{childString}</Text.span>);
    const renderedText = screen.getByText(childString);
    expect(renderedText).not.toBeVisible();
  });

  it("should render as an anchor with an href", () => {
    render(
      <Text.a
        href="https://localyzeapp.com"
        rel="noreferrer noopener"
        target="_blank"
      >
        This is an anchor
      </Text.a>
    );
    const renderedText = screen.getByRole("link");
    expect(renderedText).toBeInTheDocument();
    expect(renderedText).toHaveAttribute(
      "href",
      expect.stringContaining("https://localyzeapp.com")
    );
    expect(renderedText).toHaveAttribute(
      "rel",
      expect.stringContaining("noreferrer noopener")
    );
    expect(renderedText).toHaveAttribute(
      "target",
      expect.stringContaining("_blank")
    );
  });
});
