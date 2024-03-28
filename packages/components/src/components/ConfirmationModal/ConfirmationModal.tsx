import type { DisclosureStore } from "@ariakit/react";
import React from "react";
import { Button } from "../Button";
import { Modal, ModalBody, ModalFooter } from "../Modal/index";

export interface ConfirmationModalProps {
  children: NonNullable<React.ReactNode>;
  store: DisclosureStore;
  confirmLabel?: string;
  destructive?: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
}

/**
 * A modal dialog component that forces the user to acknowledge and make a choice
 * @param props Object with props
 * @param props.state state to open and close the modal
 * @param props.destructive is this a confirmation for a destructive action?
 * @param props.confirmLabel label for the confirm button
 * @param props.onConfirm function to call when clicking the confirm button
 * @param props.onCancel function to call when clicking the cancel button
 * @param props.children React children for the modal body
 * @returns React.JSX.Element
 */

const ConfirmationModal = React.forwardRef<
  HTMLDivElement,
  ConfirmationModalProps
>(
  (
    {
      store,
      destructive = false,
      confirmLabel = "Confirm",
      onConfirm,
      onCancel,
      children,
    },
    _ref,
  ): JSX.Element => {
    const confirm = () => {
      onConfirm();
      store.hide();
    };

    return (
      <Modal maxWidth="25rem" store={store}>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              onCancel?.();
              store.hide();
            }}
            variant="secondary"
          >
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
