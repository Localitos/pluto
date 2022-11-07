import type { ComponentMeta } from "@storybook/react";
import React from "react";
import isChromatic from "chromatic/isChromatic";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";
import { Paragraph } from "../Paragraph";
import {
  useModalState,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalHeading,
  ModalSubHeading,
} from "./index";

export default {
  component: Modal,
  title: "Components/Modal",
} as ComponentMeta<typeof Modal>;

export const Default = (): JSX.Element => {
  const modal = useModalState({ defaultOpen: isChromatic() ? true : false });
  return (
    <Box.div h="1000px" w="1350px">
      <Button onClick={modal.toggle} variant="primary">
        Open modal
      </Button>
      <Modal state={modal}>
        <ModalHeader>
          <ModalHeading>This is the heading</ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Paragraph>
            Times feedback the and his consider eating the through position. And
            leaving than into the her accounts picture they of see her leaders,
            character text the to and for completely he explanation cheek, for
            or in the assets different took this treat. Is and the our.
          </Paragraph>
          <Paragraph marginBottom="space0">
            Times feedback the and his consider eating the through position. And
            leaving than into the her accounts picture they of see her leaders,
            character text the to and for completely he explanation cheek, for
            or in the assets different took this treat. Is and the our.
          </Paragraph>
        </ModalBody>
        <ModalFooter>
          <Button onClick={modal.toggle} variant="secondary">
            Back
          </Button>
          <Button onClick={modal.toggle} variant="primary">
            Done
          </Button>
        </ModalFooter>
      </Modal>
    </Box.div>
  );
};

export const NoPaddingOnBody = (): React.ReactNode => {
  const modal = useModalState({ defaultOpen: isChromatic() ? true : false });
  return (
    <Box.div h="1000px" w="1350px">
      <Button onClick={modal.toggle} variant="primary">
        Open modal
      </Button>
      <Modal state={modal}>
        <ModalHeader>
          <ModalHeading>This is the heading</ModalHeading>
          <ModalSubHeading>This is the sub heading</ModalSubHeading>
        </ModalHeader>
        <ModalBody padding="space0">
          <Paragraph>
            Times feedback the and his consider eating the through position. And
            leaving than into the her accounts picture they of see her leaders,
            character text the to and for completely he explanation cheek, for
            or in the assets different took this treat. Is and the our.
          </Paragraph>
          <Paragraph marginBottom="space0">
            Times feedback the and his consider eating the through position. And
            leaving than into the her accounts picture they of see her leaders,
            character text the to and for completely he explanation cheek, for
            or in the assets different took this treat. Is and the our.
          </Paragraph>
        </ModalBody>
        <ModalFooter>
          <Button onClick={modal.toggle} variant="secondary">
            Back
          </Button>
          <Button onClick={modal.toggle} variant="primary">
            Done
          </Button>
        </ModalFooter>
      </Modal>
    </Box.div>
  );
};

export const OverflowBodyContent = (): React.ReactNode => {
  const modal = useModalState({ defaultOpen: isChromatic() ? true : false });
  return (
    <Box.div h="1000px" w="1350px">
      <Button onClick={modal.toggle} variant="primary">
        Open modal
      </Button>
      <Modal state={modal}>
        <ModalHeader>
          <ModalHeading>This is the heading</ModalHeading>
          <ModalSubHeading>This is the sub heading</ModalSubHeading>
        </ModalHeader>
        <ModalBody>
          <Paragraph>
            Times feedback the and his consider eating the through position. And
            leaving than into the her accounts picture they of see her leaders,
            character text the to and for completely he explanation cheek, for
            or in the assets different took this treat. Is and the our.
          </Paragraph>
          <Paragraph marginBottom="space0">
            Times feedback the and his consider eating the through position. And
            leaving than into the her accounts picture they of see her leaders,
            character text the to and for completely he explanation cheek, for
            or in the assets different took this treat. Is and the our.
          </Paragraph>
          <Paragraph>
            Times feedback the and his consider eating the through position. And
            leaving than into the her accounts picture they of see her leaders,
            character text the to and for completely he explanation cheek, for
            or in the assets different took this treat. Is and the our.
          </Paragraph>
          <Paragraph marginBottom="space0">
            Times feedback the and his consider eating the through position. And
            leaving than into the her accounts picture they of see her leaders,
            character text the to and for completely he explanation cheek, for
            or in the assets different took this treat. Is and the our.
          </Paragraph>
          <Paragraph>
            Times feedback the and his consider eating the through position. And
            leaving than into the her accounts picture they of see her leaders,
            character text the to and for completely he explanation cheek, for
            or in the assets different took this treat. Is and the our.
          </Paragraph>
          <Paragraph marginBottom="space0">
            Times feedback the and his consider eating the through position. And
            leaving than into the her accounts picture they of see her leaders,
            character text the to and for completely he explanation cheek, for
            or in the assets different took this treat. Is and the our.
          </Paragraph>
          <Paragraph>
            Times feedback the and his consider eating the through position. And
            leaving than into the her accounts picture they of see her leaders,
            character text the to and for completely he explanation cheek, for
            or in the assets different took this treat. Is and the our.
          </Paragraph>
          <Paragraph marginBottom="space0">
            Times feedback the and his consider eating the through position. And
            leaving than into the her accounts picture they of see her leaders,
            character text the to and for completely he explanation cheek, for
            or in the assets different took this treat. Is and the our.
          </Paragraph>
        </ModalBody>
        <ModalFooter>
          <Button onClick={modal.toggle} variant="secondary">
            Back
          </Button>
          <Button onClick={modal.toggle} variant="primary">
            Done
          </Button>
        </ModalFooter>
      </Modal>
    </Box.div>
  );
};

export const ReallyLongHeader = (): React.ReactNode => {
  const modal = useModalState({ defaultOpen: isChromatic() ? true : false });
  return (
    <Box.div h="1000px" w="1350px">
      <Button onClick={modal.toggle} variant="primary">
        Open modal
      </Button>
      <Modal state={modal}>
        <ModalHeader>
          <ModalHeading>
            This is a really long header that should wrap to multiple lines. The
            width of the modal should make it wrap.
          </ModalHeading>
          <ModalSubHeading>This is the sub heading</ModalSubHeading>
        </ModalHeader>
        <ModalBody>
          <Paragraph>
            Times feedback the and his consider eating the through position. And
            leaving than into the her accounts picture they of see her leaders,
            character text the to and for completely he explanation cheek, for
            or in the assets different took this treat. Is and the our.
          </Paragraph>
          <Paragraph marginBottom="space0">
            Times feedback the and his consider eating the through position. And
            leaving than into the her accounts picture they of see her leaders,
            character text the to and for completely he explanation cheek, for
            or in the assets different took this treat. Is and the our.
          </Paragraph>
        </ModalBody>
        <ModalFooter>
          <Button onClick={modal.toggle} variant="secondary">
            Back
          </Button>
          <Button onClick={modal.toggle} variant="primary">
            Done
          </Button>
        </ModalFooter>
      </Modal>
    </Box.div>
  );
};

export const InitialFocus = (): JSX.Element => {
  const buttonRef = React.createRef<HTMLButtonElement>();
  const modal = useModalState({
    defaultOpen: isChromatic() ? true : false,
  });
  return (
    <Box.div h="1000px" w="1350px">
      <Button onClick={modal.toggle} variant="primary">
        Open modal
      </Button>
      <Modal initialFocusRef={buttonRef} state={modal}>
        <ModalHeader>
          <ModalHeading>This is the heading</ModalHeading>
          <ModalSubHeading>This is the sub heading</ModalSubHeading>
        </ModalHeader>
        <ModalBody>
          <Paragraph>
            Times feedback the and his consider eating the through position. And
            leaving than into the her accounts picture they of see her leaders,
            character text the to and for completely he explanation cheek, for
            or in the assets different took this treat. Is and the our.
          </Paragraph>
          <Paragraph marginBottom="space0">
            Times feedback the and his consider eating the through position. And
            leaving than into the her accounts picture they of see her leaders,
            character text the to and for completely he explanation cheek, for
            or in the assets different took this treat. Is and the our.
          </Paragraph>
        </ModalBody>
        <ModalFooter>
          <Button onClick={modal.toggle} variant="secondary">
            Back
          </Button>
          <Button onClick={modal.toggle} ref={buttonRef} variant="primary">
            Done
          </Button>
        </ModalFooter>
      </Modal>
    </Box.div>
  );
};
