import React, { useState, forwardRef, ForwardedRef } from "react";
import map from "lodash/map";
import filter from "lodash/filter";
import includes from "lodash/includes";
import toLower from "lodash/toLower";
import isBoolean from "lodash/isBoolean";
import isFunction from "lodash/isFunction";
import {
  ComboboxProps as AriakitComboboxProps,
  useComboboxStore,
} from "@ariakit/react";
import find from "lodash/find";
import { BoxProps } from "../../primitives/Box";
import { ComboboxInput } from "./ComboboxInput/ComboboxInput";
import { ComboboxPopover } from "./ComboboxPopover/ComboboxPopover";
import { ComboboxItem } from "./ComboboxItem/ComboboxItem";
import { ComboboxProvider } from "./ComboboxProvider/ComboboxProvider";

export type ComboboxItemProps = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type ComboboxProps<T extends ComboboxItemProps = ComboboxItemProps> =
  BoxProps &
    Omit<AriakitComboboxProps, "store"> & {
      /** The options for the combobox. */
      items: T[];
      /** The function that will be called when the input value changes. */
      onChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
      /** The function that will be called when an option is selected. */
      onSelectItem?: (value: string[] | string) => void;
      /** The placeholder text for the input. */
      placeholder?: string;
      /** The message to display when there are no results. */
      noResultsMessage?: string;
      /**
       * The function to filter the items based on the input value.
       * If it is true, it will filter the items based on the input value.
       * If it is a function, it will filter the items based on the input value and the item.
       */
      filterItem?: boolean | ((inputValue: string, item: T) => boolean);
      /** Indicates if the combobox has an error. */
      hasError?: boolean;
      /** A custom store to be used instead of the default one. */
      customStore?: AriakitComboboxProps["store"];
    };

type FilterFunction<T> = (inputValue: string, item: T) => boolean;

/**
 *
 * @param filter
 */
function isFilterFunction<T>(
  filter: FilterFunction<T> | boolean | undefined,
): filter is FilterFunction<T> {
  return isFunction(filter);
}

const matchSorter = (
  list: ComboboxItemProps[],
  value: string,
): ComboboxItemProps[] => {
  return filter(list, (item: ComboboxItemProps) =>
    includes(toLower(item.label), toLower(value)),
  );
};

const getFilteredItems = <T extends ComboboxItemProps>(
  items: T[],
  searchValue: string,
  filterItem?: FilterFunction<T> | boolean,
): T[] => {
  if (isBoolean(filterItem)) {
    return filterItem
      ? (matchSorter(items as ComboboxItemProps[], searchValue) as T[])
      : items;
  }
  if (isFilterFunction(filterItem)) {
    return filter(items, (item: T) => filterItem(searchValue, item));
  }
  return items;
};

/**
 * Combobox combines a text input and a popover to allow users to filter from long lists of options.
 * @param {ComboboxProps} props - The props of the Combobox including the items, callbacks and other settings
 * @param props.items - The options for the combobox
 * @param props.onChangeInput - The function that will be called when the input value changes
 * @param props.onSelectItem - The function that will be called when an option is selected
 * @param props.placeholder - The placeholder text for the input
 * @param props.noResultsMessage - The message to display when there are no results
 * @param props.filterItem - The function to filter the items based on the input value.
 * @param props.hasError - Indicates if the combobox has an error
 * @param props.customStore - A custom store to be used instead of the default one
 * @param {React.ForwardedRef<HTMLInputElement>} ref - A ref to the input element of the Combobox
 * @returns {React.JSX.Element} - The actual Combobox component
 */
const ComboboxInner = <T extends ComboboxItemProps>(
  {
    items,
    onChangeInput,
    onSelectItem,
    placeholder = "Select an option",
    noResultsMessage = "No results found",
    filterItem = true,
    hasError,
    customStore,
    ...props
  }: ComboboxProps<T>,
  ref: React.ForwardedRef<HTMLInputElement>,
): React.JSX.Element => {
  const store = useComboboxStore({
    store: customStore,
  });
  const selectedValue = store.getState().selectedValue;
  const [searchValue, setSearchValue] = useState("");
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>("");

  const filteredItems = getFilteredItems(items, searchValue, filterItem);

  return (
    <ComboboxProvider
      setSelectedValue={(value) => onSelectItem?.(value)}
      setValue={(value) => {
        const label = find(items, ["value", value])?.label;
        setSearchValue(value);
        setSelectedLabel(label);
      }}
      store={store}
      value={selectedLabel}
    >
      <ComboboxInput
        aria-label="Select an option"
        hasError={hasError}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChangeInput?.(event);
          setSelectedLabel(event.target.value);
        }}
        placeholder={placeholder}
        ref={ref}
        store={store}
        textOverflow="ellipsis"
        {...props}
      />
      <ComboboxPopover sameWidth>
        {filteredItems.length === 0 ? (
          <ComboboxItem>{noResultsMessage}</ComboboxItem>
        ) : (
          map(filteredItems, (item: ComboboxItemProps) => (
            <ComboboxItem
              aria-selected={selectedValue === item.value}
              data-value={item.value}
              disabled={item.disabled}
              key={item.value}
              value={item.value}
            >
              {item.label}
            </ComboboxItem>
          ))
        )}
      </ComboboxPopover>
    </ComboboxProvider>
  );
};

const Combobox = forwardRef(ComboboxInner) as <T extends ComboboxItemProps>(
  // eslint-disable-next-line no-use-before-define
  props: ComboboxProps<T> & { ref?: ForwardedRef<HTMLInputElement> },
) => ReturnType<typeof ComboboxInner>;

export { Combobox };
