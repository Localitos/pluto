import React from "react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Combobox } from "./Combobox";

const SELECT_AN_OPTION_LABEL = "Select an option";

describe("<Combobox />", () => {
  const items = [
    { label: "Item 1", value: "item-1" },
    { label: "Item 2", value: "item-2" },
    { label: "Item 3", value: "item-3" },
  ];

  it("renders list of items", async () => {
    const user = userEvent.setup();
    render(<Combobox items={items} />);

    const combobox = screen.getByRole("combobox", {
      name: SELECT_AN_OPTION_LABEL,
    });

    await user.click(combobox);
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);

    expect(options[0]).toHaveTextContent("Item 1");
    expect(options[1]).toHaveTextContent("Item 2");
    expect(options[2]).toHaveTextContent("Item 3");
  });

  it("filters items", async () => {
    const user = userEvent.setup();
    render(<Combobox items={items} />);

    const combobox = screen.getByRole("combobox", {
      name: SELECT_AN_OPTION_LABEL,
    });

    await user.click(combobox);
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);

    await user.type(combobox, "Item 1");

    const filteredOptions = screen.getAllByRole("option");
    expect(filteredOptions).toHaveLength(1);
    expect(filteredOptions[0]).toHaveTextContent("Item 1");
  });

  it("shows no results message", async () => {
    const user = userEvent.setup();
    render(<Combobox items={items} />);

    const combobox = screen.getByRole("combobox", {
      name: SELECT_AN_OPTION_LABEL,
    });

    await user.click(combobox);
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);

    await user.type(combobox, "Item 4");

    const noResults = screen.getByRole("option", { name: "No results found" });
    expect(noResults).toBeInTheDocument();
  });

  it("calls onChangeInput when typing", async () => {
    const user = userEvent.setup();
    const onChangeInput = jest.fn();
    render(<Combobox items={items} onChangeInput={onChangeInput} />);

    const combobox = screen.getByRole("combobox", {
      name: SELECT_AN_OPTION_LABEL,
    });

    await user.type(combobox, "Item 1");

    expect(onChangeInput).toHaveBeenCalled();
  });

  it("calls onSelectItem when selecting an item", async () => {
    const user = userEvent.setup();
    const onSelectItem = jest.fn();
    render(<Combobox items={items} onSelectItem={onSelectItem} />);

    const combobox = screen.getByRole("combobox", {
      name: SELECT_AN_OPTION_LABEL,
    });

    await user.click(combobox);
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);

    await user.click(options[0]);

    expect(onSelectItem).toHaveBeenCalledTimes(1);
    expect(combobox).toHaveValue("Item 1");
  });

  it("renders placeholder", () => {
    render(<Combobox items={items} placeholder="Placeholder" />);

    const combobox = screen.getByPlaceholderText("Placeholder");

    expect(combobox).toBeInTheDocument();
  });
});
