import { render, screen } from "@testing-library/react";
import React from "react";
import { UnorderedList } from "./UnorderedList";
import { ListItem } from "./ListItem";

describe("<UnorderedList />", () => {
  it("renders correctly", () => {
    render(
      <UnorderedList>
        <ListItem>An item</ListItem>
      </UnorderedList>
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByText("An item")).toBeInTheDocument();
  });

  it("should allow for global html Attributes", () => {
    render(
      <UnorderedList aria-label="foo" data-testid="bar">
        <ListItem>An item</ListItem>
      </UnorderedList>
    );
    expect(screen.getByTestId("bar")).toBeInTheDocument();
    expect(screen.getByLabelText("foo")).toBeInTheDocument();
  });
});
