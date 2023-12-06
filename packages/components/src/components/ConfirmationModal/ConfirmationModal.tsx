import type { DisclosureState } from "ariakit";
import React from "react";
import { Button } from "../Button";
import { Modal, ModalBody, ModalFooter } from "../Modal/index";

export interface ConfirmationModalProps {
  children: NonNullable<React.ReactNode>;
  state: DisclosureState;
  confirmLabel?: string;
  destructive?: boolean;
  onConfirm: () => void;
}

/**
 * A modal dialog component that forces the user to acknowledge and make a choice
 * @param props Object with props
 * @param props.state state to open and close the modal
 * @param props.destructive is this a confirmation for a destructive action?
 * @param props.confirmLabel label for the confirm button
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
      destructive = false,
      confirmLabel = "Confirm",
      onConfirm,
      children,
    },
    _ref,
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
          <Button
            onClick={confirm}
            variant={destructive ? "destructive" : "primary"}
          >
            {confirmLabel}
          </Button>
        </ModalFooter>
      </Modal>
    );
  },
);

ConfirmationModal.displayName = "ConfirmationModal";

export { ConfirmationModal };
