import React from "react";
import isNumber from "lodash/isNumber";
import isNaN from "lodash/isNaN";
import { Select } from "./Select";
import { SelectItemProps } from "./SelectItem";

type setValueOverload = {
  (value: string): void;
  (value: string[]): void;
  (value: number): void;
};

export const TypedSelect = ({
  items,
  setValue,
}: {
  items: SelectItemProps[];
  setValue: setValueOverload;
}): React.JSX.Element => {
  return (
    <>
      <Select
        items={items}
        setValue={(value) => {
          const toNum = Number(value);

          if (isNumber(toNum) && !isNaN(toNum)) {
            setValue(toNum);
          } else {
            setValue(value as string);
          }
        }}
      />
    </>
  );
};
