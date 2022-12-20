import type { ComponentMeta } from "@storybook/react";
import React from "react";
import isChromatic from "chromatic/isChromatic";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";
import { Paragraph } from "../Paragraph";
import { Icon } from "../Icon";
import {
  useAlertDialogState,
  AlertDialog,
  AlertDialogHeader,
  AlertDialogIconWrapper,
  AlertDialogBody,
  AlertDialogFooter,
} from "./index";

export default {
  component: AlertDialog,
  title: "Components/AlertDialog",
} as ComponentMeta<typeof AlertDialog>;

export const Default = (): JSX.Element => {
  const alertDialog = useAlertDialogState({
    defaultOpen: isChromatic() ? true : false,
  });
  return (
    <Box.div h="100px" w="1350px">
      <Button onClick={alertDialog.toggle} variant="primary">
        Open alert dialog
      </Button>
      <AlertDialog state={alertDialog}>
        <AlertDialogHeader>Dupllicate this page</AlertDialogHeader>
        <AlertDialogBody>
          <Paragraph marginBottom="space0" size="large">
            Duplicating this page will create a copy in the Talents section.
          </Paragraph>
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button onClick={alertDialog.toggle} variant="secondary">
            Cancel
          </Button>
          <Button onClick={alertDialog.toggle} variant="primary">
            Duplicate
          </Button>
        </AlertDialogFooter>
      </AlertDialog>
    </Box.div>
  );
};

export const WithContentCentered = (): JSX.Element => {
  const alertDialog = useAlertDialogState({
    defaultOpen: isChromatic() ? true : false,
  });
  return (
    <Box.div h="100px" w="1350px">
      <Button onClick={alertDialog.toggle} variant="primary">
        Open alert dialog
      </Button>
      <AlertDialog centered state={alertDialog}>
        <AlertDialogIconWrapper>
          <Icon
            color="colorIconError"
            decorative
            icon="XCircleIcon"
            size="sizeIcon40"
          />
        </AlertDialogIconWrapper>
        <AlertDialogHeader>Are you sure?</AlertDialogHeader>
        <AlertDialogBody>
          <Paragraph marginBottom="space0" size="large">
            Deleting will remove this document for all users and cannot be
            undone.
          </Paragraph>
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button onClick={alertDialog.toggle} variant="secondary">
            Cancel
          </Button>
          <Button onClick={alertDialog.toggle} variant="destructive">
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialog>
    </Box.div>
  );
};
