import type { ComponentMeta } from "@storybook/react";
import React from "react";
import isChromatic from "chromatic/isChromatic";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";
import { Paragraph } from "../Paragraph";
import {
  useDialogState,
  AlertDialog,
  AlertDialogHeader,
  AlertDialogHeading,
  AlertDialogBody,
  AlertDialogFooter,
} from "./index";

export default {
  component: AlertDialog,
  title: "Components/AlertDialog",
} as ComponentMeta<typeof AlertDialog>;

export const Default = (): JSX.Element => {
  const modal = useDialogState({ defaultOpen: isChromatic() ? true : false });
  return (
    <Box.div h="100px" w="1350px">
      <Button onClick={modal.toggle} variant="primary">
        Open alert dialog
      </Button>
      <AlertDialog state={modal}>
        <>
          <AlertDialogHeader isContentCentered={false}>
            <AlertDialogHeading>Are you sure?</AlertDialogHeading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Paragraph marginBottom="space0" size="large">
              Deleting will remove this document for all users and cannot be
              undone.
            </Paragraph>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={modal.toggle} variant="secondary">
              Cancel
            </Button>
            <Button onClick={modal.toggle} variant="primary">
              Delete
            </Button>
          </AlertDialogFooter>
        </>
      </AlertDialog>
    </Box.div>
  );
};

export const WithContentCentered = (): JSX.Element => {
  const modal = useDialogState({ defaultOpen: isChromatic() ? true : false });
  return (
    <Box.div h="100px" w="1350px">
      <Button onClick={modal.toggle} variant="primary">
        Open alert dialog
      </Button>
      <AlertDialog state={modal} isContentCentered>
        <>
          <AlertDialogHeader isContentCentered={true}>
            <AlertDialogHeading>Are you sure?</AlertDialogHeading>
          </AlertDialogHeader>
          <AlertDialogHeader isContentCentered={true}>
            <AlertDialogHeading>Are you sure?</AlertDialogHeading>
          </AlertDialogHeader>
          <AlertDialogBody isContentCentered={true}>
            <Paragraph marginBottom="space0" size="large">
              Deleting will remove this document for all users and cannot be
              undone.
            </Paragraph>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={modal.toggle} variant="secondary">
              Cancel
            </Button>
            <Button onClick={modal.toggle} variant="primary">
              Delete
            </Button>
          </AlertDialogFooter>
        </>
      </AlertDialog>
    </Box.div>
  );
};
