import { render, screen } from "@testing-library/react";
import React from "react";
import { Heading } from "./Heading";

const text = "This is a heading.";

describe("<Heading />", () => {
  it("should render an h2 heading", () => {
    render(<Heading>{text}</Heading>);
    const renderedHeading = screen.getByRole("heading", { level: 2 });
    expect(renderedHeading).toBeInTheDocument();
  });

  it("should render an h1 heading", () => {
    render(<Heading as="h1">{text}</Heading>);
    const renderedHeading = screen.getByRole("heading", { level: 1 });
    expect(renderedHeading).toBeInTheDocument();
  });

  it("should render an h3 heading", () => {
    render(<Heading as="h3">{text}</Heading>);
    const renderedHeading = screen.getByRole("heading", { level: 3 });
    expect(renderedHeading).toBeInTheDocument();
  });

  it("should render an h4 heading", () => {
    render(<Heading as="h4">{text}</Heading>);
    const renderedHeading = screen.getByRole("heading", { level: 4 });
    expect(renderedHeading).toBeInTheDocument();
  });

  it("should render an h5 heading", () => {
    render(<Heading as="h5">{text}</Heading>);
    const renderedHeading = screen.getByRole("heading", { level: 5 });
    expect(renderedHeading).toBeInTheDocument();
  });

  it("should render an h6 heading", () => {
    render(<Heading as="h6">{text}</Heading>);
    const renderedHeading = screen.getByRole("heading", { level: 6 });
    expect(renderedHeading).toBeInTheDocument();
  });

  it("should allow for global html Attributes", () => {
    render(
      <Heading aria-label="foo" data-testid="bar">
        {text}
      </Heading>
    );
    expect(screen.getByTestId("bar")).toBeInTheDocument();
    expect(screen.getByLabelText("foo")).toBeInTheDocument();
  });
});
