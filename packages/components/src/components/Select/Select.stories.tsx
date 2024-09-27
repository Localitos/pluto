import type { Meta } from "@storybook/react";
import React from "react";
import { useFormik } from "formik";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useUID } from "react-uid";
import { HelpText } from "../HelpText";
import { Label } from "../Label";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";
import { Select } from "./Select";
import type { SelectProps } from "./Select";

export default {
  component: Select,
  title: "Components/Select",
} as Meta<typeof Select>;

const selectItems: SelectProps["items"] = [
  { value: "option-one", label: "Option One" },
  { value: "option-two", label: "Option Two" },
  { value: "option-three", label: "Option Three", disabled: true },
  { value: "option-four", label: "Option Four" },
  {
    value: "option-five",
    label:
      "Option Five which is a really long item and should overflow to the next line",
  },
];

const longSelectItems: SelectProps["items"] = Array.from(
  { length: 750 },
  (_, i) => ({
    value: `option-${i}`,
    label: `Option ${i}`,
  }),
);

const multiSelectItems: SelectProps["items"] = [
  { value: "option-one", label: "Option One" },
  { value: "option-two", label: "Option Two" },
  { value: "option-three", label: "Option Three" },
  { value: "option-four", label: "Option Four" },
];

const flavorItems: SelectProps["items"] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const Default = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form>
      <Label htmlFor={selectID}>Choose One</Label>
      <Select
        aria-describedby={helpTextID}
        id={selectID}
        items={selectItems}
        name="select"
      />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
    </Box.form>
  );
};

export const SameWidthAsFalse = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form w="250px">
      <Label htmlFor={selectID}>Choose One</Label>
      <Select
        aria-describedby={helpTextID}
        id={selectID}
        items={selectItems}
        name="select"
        popoverWidth="150px"
        sameWidth={false}
      />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
    </Box.form>
  );
};

export const CustomWidth = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form w="250px">
      <Label htmlFor={selectID}>Choose One</Label>
      <Select
        aria-describedby={helpTextID}
        id={selectID}
        items={selectItems}
        name="select"
        popoverWidth="300px"
      />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
    </Box.form>
  );
};

export const WithMaxWidth = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form w="250px">
      <Label htmlFor={selectID}>Choose One</Label>
      <Select
        aria-describedby={helpTextID}
        id={selectID}
        items={selectItems}
        name="select"
        popoverMaxWidth="400px"
        popoverWidth="500px"
      />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
    </Box.form>
  );
};

export const Large = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form>
      <Label htmlFor={selectID}>Choose One</Label>
      <Select
        aria-describedby={helpTextID}
        id={selectID}
        items={selectItems}
        name="select"
        size="large"
      />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
    </Box.form>
  );
};

export const Required = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form>
      <Label htmlFor={selectID} required>
        Choose One
      </Label>
      <Select
        aria-describedby={helpTextID}
        id={selectID}
        items={selectItems}
        name="select"
        required
      />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
    </Box.form>
  );
};

export const Disabled = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form>
      <Label htmlFor={selectID}>Choose One</Label>
      <Select
        aria-describedby={helpTextID}
        disabled
        id={selectID}
        items={selectItems}
        name="select"
      />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
    </Box.form>
  );
};

export const Error = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form>
      <Label htmlFor={selectID}>Choose One</Label>
      <Select
        aria-describedby={helpTextID}
        hasError
        id={selectID}
        items={selectItems}
        name="select"
      />
      <HelpText hasError id={helpTextID}>
        This is an error message.
      </HelpText>
    </Box.form>
  );
};

export const LongItem = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form w="250px">
      <Label htmlFor={selectID}>Choose One</Label>
      <Select
        aria-describedby={helpTextID}
        defaultValue={selectItems[4].value}
        id={selectID}
        items={selectItems}
        name="select"
      />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
    </Box.form>
  );
};

LongItem.parameters = {
  chromatic: { viewports: [320, 1200] },
};

export const Placeholder = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form>
      <Label htmlFor={selectID}>Choose One</Label>
      <Select
        aria-describedby={helpTextID}
        defaultValue=""
        id={selectID}
        items={selectItems}
        name="select"
        placeholder="This is a custom placeholder"
      />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
    </Box.form>
  );
};

export const MultiSelect = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form>
      <Label htmlFor={selectID}>Choose One</Label>
      <Select
        aria-describedby={helpTextID}
        defaultValue={[selectItems[0].value, selectItems[1].value]}
        id={selectID}
        items={selectItems}
        name="select"
      />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
    </Box.form>
  );
};

export const WithLongList = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form>
      <Label htmlFor={selectID}>Choose One</Label>
      <Select
        aria-describedby={helpTextID}
        id={selectID}
        items={longSelectItems}
        name="select"
      />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
    </Box.form>
  );
};
WithLongList.parameters = {
  docs: {
    description: {
      story: "Example where the select has 750 options",
    },
  },
};

export const WithFormik = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      select: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form onSubmit={formik.handleSubmit}>
      <Label htmlFor={selectID}>Choose One</Label>
      <Select
        aria-describedby={helpTextID}
        id={selectID}
        items={selectItems}
        name="select"
        setValue={(value) => formik.setFieldValue("select", value)}
        value={formik.values.select}
      />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
      <Box.div marginTop="space70">
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Box.div>
    </Box.form>
  );
};

export const MultiSelectWithFormik = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      select: [],
      selectTwo: [multiSelectItems[1].value],
      selectThree: [multiSelectItems[1].value, multiSelectItems[2].value],
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const selectID = useUID();
  const selectIDTwo = useUID();
  const selectIDThree = useUID();
  const helpTextID = useUID();
  const helpTextIDTwo = useUID();
  const helpTextIDThree = useUID();
  return (
    <Box.form onSubmit={formik.handleSubmit}>
      <Box.div marginBottom="space70">
        <Label htmlFor={selectID}>Choose One</Label>
        <Select
          aria-describedby={helpTextID}
          id={selectID}
          items={multiSelectItems}
          name="select"
          setValue={(value) => formik.setFieldValue("select", value)}
          value={formik.values.select}
        />
        <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
      </Box.div>
      <Box.div marginBottom="space70">
        <Label htmlFor={selectIDTwo}>Choose One</Label>
        <Select
          aria-describedby={helpTextIDTwo}
          id={selectIDTwo}
          items={multiSelectItems}
          name="selectTwo"
          setValue={(value) => formik.setFieldValue("selectTwo", value)}
          value={formik.values.selectTwo}
        />
        <HelpText id={helpTextIDTwo}>Please choose one of the values.</HelpText>
      </Box.div>
      <Box.div marginBottom="space70">
        <Label htmlFor={selectIDThree}>Choose One</Label>
        <Select
          aria-describedby={helpTextIDThree}
          id={selectIDThree}
          items={multiSelectItems}
          name="selectThree"
          setValue={(value) => formik.setFieldValue("selectThree", value)}
          value={formik.values.selectThree}
        />
        <HelpText id={helpTextIDThree}>
          Please choose one of the values.
        </HelpText>
      </Box.div>
      <Box.div marginTop="space70">
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Box.div>
    </Box.form>
  );
};

export const WithReactHookForm = (): JSX.Element => {
  interface FormInputs {
    flavor: string;
  }

  const { control, handleSubmit } = useForm({
    defaultValues: {
      flavor: "",
    },
  });

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit: SubmitHandler<FormInputs> = (data) =>
    alert(JSON.stringify(data, null, 2));

  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor={selectID}>Choose a flavor</Label>
      <Controller
        control={control}
        name="flavor"
        render={({ field }) => (
          <Select
            {...field}
            aria-describedby={helpTextID}
            id={selectID}
            items={flavorItems}
            setValue={field.onChange}
          />
        )}
      />
      <HelpText id={helpTextID}>Please choose one of the flavors.</HelpText>
      <Box.div marginTop="space70">
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Box.div>
    </Box.form>
  );
};

export const MultiSelectWithReactHookForm = (): JSX.Element => {
  interface FormInputs {
    flavor: string[];
    flavorTwo: string[];
    flavorThree: string[];
  }

  const { control, handleSubmit } = useForm({
    defaultValues: {
      flavor: [],
      flavorTwo: [flavorItems[0].value],
      flavorThree: [flavorItems[0].value, flavorItems[2].value],
    },
  });

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit: SubmitHandler<FormInputs> = (data) =>
    alert(JSON.stringify(data, null, 2));

  const selectID = useUID();
  const selectIDTwo = useUID();
  const selectIDThree = useUID();
  const helpTextID = useUID();
  const helpTextIDTwo = useUID();
  const helpTextIDThree = useUID();
  return (
    <Box.form onSubmit={handleSubmit(onSubmit)}>
      <Box.div marginBottom="space70">
        <Label htmlFor={selectID}>Choose a flavor</Label>
        <Controller
          control={control}
          name="flavor"
          render={({ field }) => (
            <Select
              {...field}
              aria-describedby={helpTextID}
              id={selectID}
              items={flavorItems}
              setValue={field.onChange}
            />
          )}
        />
        <HelpText id={helpTextID}>Please choose one of the flavors.</HelpText>
      </Box.div>
      <Box.div marginBottom="space70">
        <Label htmlFor={selectIDTwo}>Choose a flavor</Label>
        <Controller
          control={control}
          name="flavorTwo"
          render={({ field }) => (
            <Select
              {...field}
              aria-describedby={helpTextIDTwo}
              id={selectIDTwo}
              items={flavorItems}
              setValue={field.onChange}
            />
          )}
        />
        <HelpText id={helpTextIDTwo}>
          Please choose one of the flavors.
        </HelpText>
      </Box.div>
      <Box.div marginBottom="space70">
        <Label htmlFor={selectIDThree}>Choose a flavor</Label>
        <Controller
          control={control}
          name="flavorThree"
          render={({ field }) => (
            <Select
              {...field}
              aria-describedby={helpTextIDThree}
              id={selectIDThree}
              items={flavorItems}
              setValue={field.onChange}
            />
          )}
        />
        <HelpText id={helpTextIDThree}>
          Please choose one of the flavors.
        </HelpText>
      </Box.div>
      <Box.div marginTop="space70">
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Box.div>
    </Box.form>
  );
};
