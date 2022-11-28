import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Default } from "./Drawer.stories";

const OPEN_DRAWER_TEXT = "Open drawer";

describe("<Drawer />", () => {
  it("should open and close a drawer using the close drawer button", async () => {
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_DRAWER_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await userEvent.click(renderedOpenButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    const renderedCloseButton = screen.getByLabelText("Close drawer");
    expect(renderedCloseButton).toBeInTheDocument();

    await userEvent.click(renderedCloseButton);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should open a drawer and close it using the escape key", async () => {
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_DRAWER_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await userEvent.click(renderedOpenButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should open a drawer and close it by clicking an element in the background", async () => {
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_DRAWER_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await userEvent.click(renderedOpenButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    await userEvent.click(renderedOpenButton, { pointerEventsCheck: 1 });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
