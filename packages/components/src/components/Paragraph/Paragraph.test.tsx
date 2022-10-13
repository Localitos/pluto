import { render, screen } from "@testing-library/react";
import React from "react";
import { Paragraph } from "./Paragraph";

const text =
  "Lorem ipsum dolor sit, consectetur. Et imperdiet erat. Tempus ligula eros, sed leo imperdiet at. Sit imperdiet erat.";

describe("<Paragraph />", () => {
  it("should render a paragraph", () => {
    render(<Paragraph>{text}</Paragraph>);
    const renderedParagraph = screen.getByText(text);
    expect(renderedParagraph).toBeInTheDocument();
  });

  it("should allow for global html Attributes", () => {
    render(
      <Paragraph aria-label="foo" data-testid="bar">
        {text}
      </Paragraph>
    );
    expect(screen.getByTestId("bar")).toBeInTheDocument();
    expect(screen.getByLabelText("foo")).toBeInTheDocument();
  });
});
