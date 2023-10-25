import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Menu } from "./Menu";

describe("<Menu />", () => {
  const items = [
    { onClick: jest.fn, label: "Item 1" },
    { onClick: jest.fn, label: "Item 2" },
  ];

  it("renders correctly", () => {
    render(<Menu items={items} />);

    const menuButton = screen.getByRole("button");
    expect(menuButton).toBeInTheDocument();

    userEvent.click(menuButton);

    expect(screen.getByRole("presentation")).toBeInTheDocument();

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("accepts a custom menu button", () => {
    render(<Menu items={items} menuButton={<button>Custom button</button>} />);

    const menuButton = screen.getByText("Custom button");
    expect(menuButton).toBeInTheDocument();

    userEvent.click(menuButton);

    expect(screen.getByRole("presentation")).toBeInTheDocument();

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("allows a disabled prop for a menu item and disables the button", () => {
    render(
      <Menu items={[{ onClick: jest.fn(), label: "Item 1", disabled: true }]} />
    );

    const menuButton = screen.getByRole("button");
    expect(menuButton).toBeInTheDocument();

    userEvent.click(menuButton);

    expect(screen.getByRole("presentation")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /item 1/i, hidden: true })
    ).toBeDisabled();
  });
});
