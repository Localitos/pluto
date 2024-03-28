import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import isChromatic from "chromatic/isChromatic";
import { useModalStore } from "../Modal/index";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";
import { ConfirmationModal } from "./index";

const meta: Meta<typeof ConfirmationModal> = {
  title: "Components/ConfirmationModal",
  component: ConfirmationModal,
};

export default meta;
type Story = StoryObj<typeof ConfirmationModal>;

// eslint-disable-next-line no-console
const onConfirm = () => console.log("Confirmed");

const DefaultConfirmationModal = (): JSX.Element => {
  const modalStore = useModalStore({ defaultOpen: isChromatic() });

  return (
    <Box.div h="100px" w="1350px">
      <Button onClick={modalStore.toggle} variant="primary">
        Open modal
      </Button>

      <ConfirmationModal onConfirm={onConfirm} store={modalStore}>
        Are you sure you want to change your subscription?
      </ConfirmationModal>
    </Box.div>
  );
};

export const Default: Story = {
  render: (): JSX.Element => <DefaultConfirmationModal />,
};

Default.parameters = {
  docs: {
    storyDescription:
      "An alert is a modal with centered text and buttons to confirm or cancel an action.",
  },
};

const CustomConfirmationModal = (): JSX.Element => {
  const modalState = useModalStore({ defaultOpen: isChromatic() });

  return (
    <Box.div h="100px" w="1350px">
      <Button onClick={modalState.toggle} variant="primary">
        Open modal
      </Button>

      <ConfirmationModal
        confirmLabel="Custom destructive label"
        destructive
        onConfirm={onConfirm}
        store={modalState}
      >
        Are you sure you want to delete this file? This cannot be undone.
      </ConfirmationModal>
    </Box.div>
  );
};

export const WithCustomButton: Story = {
  render: (): JSX.Element => <CustomConfirmationModal />,
};
