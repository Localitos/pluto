import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  Button,
  Paragraph,
  useAlertDialogState,
} from "../../..";

type ConfirmDialogProps = {
  title: string;
  description: string;
  confirmLabel: string;
  cancelLabel: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export const ConfirmDialog = ({
  title,
  description,
  confirmLabel,
  cancelLabel,
  onCancel,
  onConfirm,
}: ConfirmDialogProps): JSX.Element => {
  const alertDialog = useAlertDialogState({
    defaultOpen: true,
  });

  return (
    <AlertDialog state={alertDialog}>
      <AlertDialogHeader>{title}</AlertDialogHeader>
      <AlertDialogBody>
        <Paragraph marginBottom="space0" size="large">
          {description}
        </Paragraph>
      </AlertDialogBody>
      <AlertDialogFooter>
        <Button onClick={onCancel} variant="secondary">
          {cancelLabel}
        </Button>
        <Button onClick={onConfirm} variant="primary">
          {confirmLabel}
        </Button>
      </AlertDialogFooter>
    </AlertDialog>
  );
};
