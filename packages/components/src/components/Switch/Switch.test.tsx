import { act, render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { Default as Switch } from "./Switch.stories";

describe("<Switch />", () => {
  it("renders correctly", () => {
    render(<Switch>Test switch</Switch>);
    const switcher = screen.getByRole("switch");
    const switcherLabel = screen.getByLabelText("Test switch");
    expect(switcher).toBeInTheDocument();
    expect(switcher).not.toBeChecked();
    expect(switcherLabel).toBeInTheDocument();
  });

  it("checks the switch", async () => {
    const user = userEvent.setup();
    render(<Switch>Test switch</Switch>);
    const switcher = screen.getByRole("switch");

    await act(() => user.click(switcher));

    expect(switcher).toBeChecked();
  });

  it("renders as checked by default", () => {
    render(<Switch defaultChecked>Test switch</Switch>);
    const switcher = screen.getByRole("switch");
    expect(switcher).toBeChecked();
  });

  it("renders as disabled", () => {
    render(<Switch disabled>Test switch</Switch>);
    const switcher = screen.getByRole("switch");
    expect(switcher).toBeDisabled();
  });

  it("renders as disabled and checked", () => {
    render(
      <Switch defaultChecked disabled>
        Test switch
      </Switch>
    );
    const switcher = screen.getByRole("switch");
    expect(switcher).toBeDisabled();
    expect(switcher).toBeChecked();
  });
});
