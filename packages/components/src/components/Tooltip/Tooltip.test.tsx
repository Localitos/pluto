import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Default as TooltipComponent } from "./Tooltip.stories";

const OPEN_TOOLTIP_TEXT = "Hover or focus on me";

describe("<Tooltip />", () => {
  it("should open and close a tooltip on hover", async () => {
    const user = userEvent.setup();
    render(<TooltipComponent />);
    const renderedOpenButton = screen.getByText(OPEN_TOOLTIP_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await act(() => user.hover(renderedOpenButton));
    expect(screen.getByRole("tooltip")).toBeInTheDocument();

    await act(() => user.unhover(renderedOpenButton));
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("should open and close a tooltip on focus", async () => {
    const user = userEvent.setup();
    render(<TooltipComponent />);
    const renderedOpenButton = screen.getByText(OPEN_TOOLTIP_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    expect(document.body).toHaveFocus();

    await act(() => user.tab());
    expect(renderedOpenButton).toHaveFocus();
    expect(screen.getByRole("tooltip")).toBeInTheDocument();

    await act(() => user.tab());
    expect(renderedOpenButton).not.toHaveFocus();
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
});
