import React from "react";
import type { DialogProps, DisclosureState } from "ariakit";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalHeading,
} from "../Modal/index";
import { Button } from "../Button/index";
import { Box } from "../../primitives/Box";

export interface AlertDialogProps extends Omit<DialogProps, "noonce"> {
  /** The contents of the alert dialog. */
  children: NonNullable<React.ReactNode>;
  state: DisclosureState;
  heading?: string;
  buttonLabel?: string;
  buttonVariant?: "destructive" | "primary";
  onConfirm: () => void;
}

/** A dialog component that forces the user to acknowledge and make a choice */
const AlertDialog = React.forwardRef<HTMLDivElement, AlertDialogProps>(
  ({
    state,
    heading = "Are you sure?",
    buttonVariant = "primary",
    buttonLabel = "Confirm",
    onConfirm,
    children,
  }) => {
    const confirm = () => {
      onConfirm();
      state.hide();
    };

    return (
      <Modal maxWidth="25rem" state={state}>
        <ModalHeader>
          <ModalHeading>{heading}</ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Box.div
            alignItems="center"
            display="flex"
            justifyContent="center"
            textAlign="center"
          >
            {children}
          </Box.div>
        </ModalBody>
        <ModalFooter>
          <Box.div
            display="flex"
            gap="space30"
            justifyContent="center"
            minWidth="100%"
          >
            <Button onClick={state.hide} variant="secondary">
              Back
            </Button>
            <Button onClick={confirm} variant={buttonVariant}>
              {buttonLabel}
            </Button>
          </Box.div>
        </ModalFooter>
      </Modal>
    );
  }
);

AlertDialog.displayName = "AlertDialog";

export { AlertDialog };
