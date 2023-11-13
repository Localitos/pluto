import type { DisclosureState } from "ariakit";
import React from "react";
import { Button } from "../Button";
import { Modal, ModalBody, ModalFooter } from "../Modal/index";

export interface ConfirmationModalProps {
  children: NonNullable<React.ReactNode>;
  state: DisclosureState;
  buttonLabel?: string;
  buttonVariant?: "destructive" | "primary";
  onConfirm: () => void;
}

/**
 * A modal dialog component that forces the user to acknowledge and make a choice
 * @param props Object with props
 * @param props.state state to open and close the modal
 * @param props.buttonVariant variant of the confirm button
 * @param props.buttonLabel label for the confirm button
 * @param props.onConfirm function to call when clicking the confirm button
 * @param props.children React children for the modal body
 * @returns React.JSX.Element
 */

const ConfirmationModal = React.forwardRef<
  HTMLDivElement,
  ConfirmationModalProps
>(
  (
    {
      state,
      buttonVariant = "primary",
      buttonLabel = "Confirm",
      onConfirm,
      children,
    },
    _ref
  ): JSX.Element => {
    const confirm = () => {
      onConfirm();
      state.hide();
    };

    return (
      <Modal maxWidth="25rem" state={state}>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={state.hide} variant="secondary">
            Cancel
          </Button>
          <Button onClick={confirm} variant={buttonVariant}>
            {buttonLabel}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
);

ConfirmationModal.displayName = "ConfirmationModal";

export { ConfirmationModal };
