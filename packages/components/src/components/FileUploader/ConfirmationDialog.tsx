import React from "react";
import { DisclosureState } from "ariakit";
import {
  AlertDialog,
  AlertDialogIconWrapper,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "../AlertDialog";
import { Button } from "../Button";
import { Paragraph } from "../Paragraph";
import { Icon } from "../Icon";

export const ConfirmationDialog = ({
  state,
  onConfirm,
  onCancel,
}: {
  state: DisclosureState;
  onConfirm: () => void;
  onCancel: () => void;
}): JSX.Element => {
  return (
    <AlertDialog centered state={state}>
      <AlertDialogIconWrapper>
        <Icon
          color="colorIconError"
          decorative
          icon="XCircleIcon"
          size="sizeIcon40"
        />
      </AlertDialogIconWrapper>
      <AlertDialogHeader>Delete document</AlertDialogHeader>
      <AlertDialogBody>
        <Paragraph marginBottom="space0" size="large">
          Are you sure you want to delete this document? This action cannot be
          undone.
        </Paragraph>
      </AlertDialogBody>
      <AlertDialogFooter>
        <Button onClick={onCancel} variant="secondary">
          Cancel
        </Button>
        <Button onClick={onConfirm} variant="destructive">
          Delete
        </Button>
      </AlertDialogFooter>
    </AlertDialog>
  );
};
