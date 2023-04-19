import React from "react";
import { Button } from "../..";
import { Confirm } from "./Confirm";

export default {
  component: Confirm,
  title: "Components/Confirm",
};

export const Default = (): JSX.Element => {
  return (
    <Button
      onClick={async () => {
        try {
          await Confirm({
            title: "Are you sure?",
            description: `If you leave this card without hitting "Save Changes," all of your changes will be lost.`,
            confirmLabel: "Confirm",
            cancelLabel: "Cancel",
          });

          alert("User clicked confirm!");
        } catch {
          alert("User clicked cancel!");
        }
      }}
      variant="primary"
    >
      Test
    </Button>
  );
};
