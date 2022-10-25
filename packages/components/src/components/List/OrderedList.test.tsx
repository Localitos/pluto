import { render, screen } from "@testing-library/react";
import React from "react";
import { OrderedList } from "./OrderedList";
import { ListItem } from "./ListItem";

describe("<OrderedList />", () => {
  it("renders correctly", () => {
    render(
      <OrderedList>
        <ListItem>An item</ListItem>
      </OrderedList>
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByText("An item")).toBeInTheDocument();
  });

  it("should allow for global html Attributes", () => {
    render(
      <OrderedList aria-label="foo" data-testid="bar">
        <ListItem>An item</ListItem>
      </OrderedList>
    );
    expect(screen.getByTestId("bar")).toBeInTheDocument();
    expect(screen.getByLabelText("foo")).toBeInTheDocument();
  });
});
