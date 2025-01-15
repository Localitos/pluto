import type { Meta, StoryFn } from "@storybook/react";
import React, { useEffect, useState } from "react";
import toLower from "lodash/toLower";
import includes from "lodash/includes";
import map from "lodash/map";
import { useComboboxStore } from "@ariakit/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import find from "lodash/find";
import { Box } from "../../primitives/Box";
import { Label } from "../Label";
import { HelpText } from "../HelpText";
import { Button } from "../Button";
import { Combobox, ComboboxItemProps, ComboboxProps } from "./Combobox";
import { ComboboxInput } from "./ComboboxInput/ComboboxInput";
import { ComboboxPopover } from "./ComboboxPopover/ComboboxPopover";
import { ComboboxItem } from "./ComboboxItem/ComboboxItem";

export default {
  component: Combobox,
  title: "Components/Combobox",
} as Meta<typeof Combobox>;

const items: ComboboxItemProps[] = [
  { value: "1", label: "Option One" },
  { value: "2", label: "Option Two" },
  { value: "Option Three", label: "Option Three" },
  { value: "Option Four", label: "Option Four" },
];

const Template: StoryFn<ComboboxProps> = ({ children, ...props }) => (
  <Combobox {...props}>{children}</Combobox>
);

export const Default = Template.bind({});
Default.args = {
  items,
  placeholder: "Select an option",
  noResultsMessage: "No results found",
  filterItem: true,
  hasError: false,
};
Default.parameters = {
  docs: {
    description: {
      story: "The combobox will filter the items based on the input value.",
    },
  },
};

export const WithOnChange = (): React.JSX.Element => (
  <Combobox
    items={items}
    onChangeInput={(event) => {
      // eslint-disable-next-line no-console
      console.log(event.target.value);
    }}
    placeholder="Select an option"
  />
);
WithOnChange.parameters = {
  docs: {
    description: {
      story:
        "The combobox will call the `onChangeInput` function when the input value changes.",
    },
  },
};

export const WithOnSelectItem = (): React.JSX.Element => (
  <Combobox
    items={items}
    onSelectItem={(value) => {
      // eslint-disable-next-line no-console
      console.log(value);
    }}
    placeholder="Select an option"
  />
);
WithOnSelectItem.parameters = {
  docs: {
    description: {
      story:
        "The combobox will call the `onSelectItem` function when an option is selected.",
    },
  },
};

export const WithLongItem = (): React.JSX.Element => {
  const longItem = {
    value:
      "Option Five which is a really long item and should overflow to the next line",
    label:
      "Option Five which is a really long item and should overflow to the next line",
  };

  return (
    <Box.div w="250px">
      <Label htmlFor="select-option">Select an option</Label>
      <Combobox id="select-option" items={[...items, longItem]} name="select" />
    </Box.div>
  );
};

type CustomItem = {
  value: string;
  label: string;
  disabled?: boolean;
};

export const WithCustomFilterItem = (): React.JSX.Element => {
  const customItems: CustomItem[] = [
    ...items,
    { value: "New option 1", label: "New option 1", disabled: true },
    { value: "New option 2", label: "New option 2", disabled: true },
  ];

  const customFilter = (inputValue: string, item: CustomItem): boolean =>
    includes(toLower(item.label), toLower(inputValue)) && !item.disabled;

  return <Combobox filterItem={customFilter} items={customItems} />;
};
WithCustomFilterItem.parameters = {
  docs: {
    description: {
      story:
        "The combobox will filter the items based on a given function " +
        "that filters the items based on the input value and the item.",
    },
  },
};

export const WithReactHookForm = (): React.JSX.Element => {
  interface FormInputs {
    item: string;
  }

  const [selectedLabel, setSelectedLabel] = useState<string | undefined>("");
  const { control, handleSubmit, clearErrors, formState } = useForm({
    defaultValues: {
      item: "",
    },
  });

  useEffect(() => {
    clearErrors();
  }, [clearErrors, formState.isDirty]);

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit: SubmitHandler<FormInputs> = (data) =>
    alert(JSON.stringify(data, null, 2));

  return (
    <Box.form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="item"
        render={({ field: { onChange, ...field }, fieldState }) => (
          <>
            <Label htmlFor="select-option" required>
              Select an option
            </Label>
            <Combobox
              {...field}
              aria-describedby="select-option-help-text"
              hasError={fieldState.invalid}
              id="select-option"
              items={items}
              onChangeInput={(event) => {
                onChange(event);
                setSelectedLabel(event.target.value);
              }}
              onSelectItem={(value) => {
                const label = find(items, ["value", value])?.label;
                setSelectedLabel(label);
                onChange(value);
              }}
              required
              value={selectedLabel}
            />
            <HelpText id="select-option-help-text">
              Please choose one of the options.
            </HelpText>
          </>
        )}
        rules={{ required: true }}
      />
      <Box.div marginTop="d6">
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Box.div>
    </Box.form>
  );
};

export const Composed = (): React.JSX.Element => {
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>("");
  const store = useComboboxStore({
    setSelectedValue: (value) => {
      const label = find(items, ["value", value])?.label;
      setSelectedLabel(label);
    },
  });

  const customItems: CustomItem[] = [
    ...items,
    { value: "Option Five", label: "Option Five", disabled: true },
    { value: "Option Six", label: "Option Six", disabled: true },
  ];

  return (
    <>
      <ComboboxInput
        aria-label="Select an option"
        leadingIcon="search"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSelectedLabel(event.target.value);
        }}
        placeholder="Select an option"
        store={store}
        value={selectedLabel}
      />
      <ComboboxPopover store={store}>
        {map(customItems, (item) => (
          <ComboboxItem
            disabled={item.disabled}
            key={item.value}
            store={store}
            value={item.value}
          >
            {item.label}
          </ComboboxItem>
        ))}
      </ComboboxPopover>
    </>
  );
};
Composed.parameters = {
  docs: {
    description: {
      story:
        "The combobox can be composed with the other Combobox components, " +
        "like `ComboboxInput`, `ComboboxItem` and `ComboboxPopover`.",
    },
  },
};
