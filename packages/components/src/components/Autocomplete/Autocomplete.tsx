import React, { startTransition, useMemo } from "react";
import {
  Combobox,
  ComboboxGroup,
  ComboboxProvider,
  useComboboxStore,
} from "@ariakit/react/combobox";
import map from "lodash/map";
import { ComboboxInput } from "../Combobox/ComboboxInput/ComboboxInput";
import { ComboboxPopover } from "../Combobox/ComboboxPopover/ComboboxPopover";
import { ComboboxItem } from "../Combobox/ComboboxItem/ComboboxItem";

const matchSorter = (list, value) => {
  return list.filter((item) =>
    item.toLowerCase().includes(value.toLowerCase()),
  );
};
export const Autocomplete = (): React.JSX.Element => {
  const [searchValue, setSearchValue] = React.useState("");
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ];

  const matches = useMemo(() => matchSorter(items, searchValue), [searchValue]);

  const combobox = useComboboxStore();

  const handleInputChange = (event) => {
    const value = event.target.value;
    combobox.setValue(value); // Update combobox value

    // Filter items based on the input value
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredItems(filtered);
  };

  return (
    <ComboboxProvider
      setValue={(value) => {
        startTransition(() => setSearchValue(value));
      }}
    >
      <ComboboxInput placeholder="Search for a fruit" />
      <ComboboxPopover>
        <ComboboxGroup>
          {matches.length === 0 ? (
            <ComboboxItem>No results found</ComboboxItem>
          ) : (
            map(matches, (item, index) => (
              <ComboboxItem
                key={index}
                onClick={() => {
                  // combobox.setValue(item);
                  // combobox.setOpen(false);
                  console.log("Selected item:", item);
                }}
                value={item}
              >
                {item}
              </ComboboxItem>
            ))
          )}
        </ComboboxGroup>
      </ComboboxPopover>
    </ComboboxProvider>
  );
};
