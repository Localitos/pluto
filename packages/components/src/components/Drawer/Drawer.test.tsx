import { act, render, screen } from "@testing-library/react";
import userEvent, {
  PointerEventsCheckLevel,
} from "@testing-library/user-event";
import React from "react";
import { Default } from "./Drawer.stories";

const OPEN_DRAWER_TEXT = "Open drawer";

describe("<Drawer />", () => {
  it("should open and close a drawer using the close drawer button", async () => {
    const user = userEvent.setup();
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_DRAWER_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await act(() => user.click(renderedOpenButton));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    const renderedCloseButton = screen.getByLabelText("Close drawer");
    expect(renderedCloseButton).toBeInTheDocument();

    await act(() => user.click(renderedCloseButton));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should open a drawer and close it using the escape key", async () => {
    const user = userEvent.setup();
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_DRAWER_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await act(() => user.click(renderedOpenButton));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    await act(() => user.keyboard("{Escape}"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should open a drawer and close it by clicking an element in the background", async () => {
    const user = userEvent.setup({
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    });
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_DRAWER_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await act(() => user.click(renderedOpenButton));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    await act(() => user.click(renderedOpenButton));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
