// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable sonarjs/no-duplicate-string */
import { render, screen, waitFor } from "@testing-library/react";
import { UserEvent, userEvent } from "@testing-library/user-event";
import React from "react";
import { Default as Tabs, InitialTab, Disabled } from "./Tabs.stories";

describe("<Tabs />", () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it("renders correctly and selects different tabs", async () => {
    render(<Tabs />);
    const tabs = await screen.findAllByRole("tab");
    const tabPanels = screen.getAllByRole("tabpanel", { hidden: true });

    expect(screen.getByRole("tablist")).toBeInTheDocument();

    await waitFor(() =>
      expect(tabs[0]).toHaveAttribute("aria-selected", "true"),
    );
    expect(tabs[1]).toHaveAttribute("aria-selected", "false");
    expect(tabs[2]).toHaveAttribute("aria-selected", "false");

    expect(tabPanels[0]).toBeVisible();
    expect(tabPanels[1]).not.toBeVisible();
    expect(tabPanels[2]).not.toBeVisible();

    await user.click(tabs[1]);

    expect(tabs[0]).toHaveAttribute("aria-selected", "false");
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    expect(tabs[2]).toHaveAttribute("aria-selected", "false");

    expect(tabPanels[0]).not.toBeVisible();
    expect(tabPanels[1]).toBeVisible();
    expect(tabPanels[2]).not.toBeVisible();

    await user.click(tabs[2]);

    expect(tabs[0]).toHaveAttribute("aria-selected", "false");
    expect(tabs[1]).toHaveAttribute("aria-selected", "false");
    expect(tabs[2]).toHaveAttribute("aria-selected", "true");

    expect(tabPanels[0]).not.toBeVisible();
    expect(tabPanels[1]).not.toBeVisible();
    expect(tabPanels[2]).toBeVisible();
  });

  it("renders a preset selected tab correctly", async () => {
    render(<InitialTab />);

    expect(await screen.findByRole("tablist")).toBeInTheDocument();

    const tabs = await screen.findAllByRole("tab");

    expect(tabs[0]).toHaveAttribute("aria-selected", "false");
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    expect(tabs[2]).toHaveAttribute("aria-selected", "false");

    const tabPanels = await screen.findAllByRole("tabpanel", { hidden: true });

    expect(tabPanels[0]).not.toBeVisible();

    await waitFor(() => expect(tabPanels[1]).toBeVisible());

    expect(tabPanels[2]).not.toBeVisible();
  });

  it("renders a disabled tab correctly", () => {
    render(<Disabled />);
    const tabs = screen.getAllByRole("tab");

    expect(tabs[0]).toBeEnabled();
    expect(tabs[1]).toHaveAttribute("aria-disabled", "true");
    expect(tabs[2]).toBeEnabled();
  });
});
