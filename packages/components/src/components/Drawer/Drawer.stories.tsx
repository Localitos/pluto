import type { ComponentMeta } from "@storybook/react";
import React from "react";
import isChromatic from "chromatic/isChromatic";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";
import { Paragraph } from "../Paragraph";
import {
  Drawer,
  DrawerHeading,
  DrawerHeader,
  DrawerBody,
  useDrawerState,
} from "./index";

export default {
  component: Drawer,
  title: "Components/Drawer",
} as ComponentMeta<typeof Drawer>;

export const Default = (): JSX.Element => {
  const drawer = useDrawerState({ defaultOpen: isChromatic() ? true : false });
  return (
    <Box.div h="1000px" w="1350px">
      <Button onClick={drawer.toggle} variant="primary">
        Open drawer
      </Button>
      <Drawer state={drawer}>
        <DrawerHeader>
          <DrawerHeading>This is the heading</DrawerHeading>
        </DrawerHeader>
        <DrawerBody>
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
        </DrawerBody>
      </Drawer>
    </Box.div>
  );
};

Default.parameters = {
  chromatic: { delay: 1000, pauseAnimationAtEnd: true },
};

export const NoPaddingOnBody = (): React.ReactNode => {
  const drawer = useDrawerState({ defaultOpen: isChromatic() ? true : false });
  return (
    <Box.div h="1000px" w="1350px">
      <Button onClick={drawer.toggle} variant="primary">
        Open drawer
      </Button>
      <Drawer state={drawer}>
        <DrawerHeader>
          <DrawerHeading>This is the heading</DrawerHeading>
        </DrawerHeader>
        <DrawerBody padding="space0">
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
        </DrawerBody>
      </Drawer>
    </Box.div>
  );
};

NoPaddingOnBody.parameters = {
  chromatic: { delay: 1000, pauseAnimationAtEnd: true },
};

export const OverflowBodyContent = (): React.ReactNode => {
  const drawer = useDrawerState({ defaultOpen: isChromatic() ? true : false });
  return (
    <Box.div h="1000px" w="1350px">
      <Button onClick={drawer.toggle} variant="primary">
        Open drawer
      </Button>
      <Drawer state={drawer}>
        <DrawerHeader>
          <DrawerHeading>This is the heading</DrawerHeading>
        </DrawerHeader>
        <DrawerBody>
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
        </DrawerBody>
      </Drawer>
    </Box.div>
  );
};

OverflowBodyContent.parameters = {
  chromatic: { delay: 1000, pauseAnimationAtEnd: true },
};

export const ReallyLongHeader = (): React.ReactNode => {
  const drawer = useDrawerState({ defaultOpen: isChromatic() ? true : false });
  return (
    <Box.div h="1000px" w="1350px">
      <Button onClick={drawer.toggle} variant="primary">
        Open drawer
      </Button>
      <Drawer state={drawer}>
        <DrawerHeader>
          <DrawerHeading>
            This is a really long header that should wrap to multiple lines. The
            width of the drawer should make it wrap.
          </DrawerHeading>
        </DrawerHeader>
        <DrawerBody>
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
        </DrawerBody>
      </Drawer>
    </Box.div>
  );
};

ReallyLongHeader.parameters = {
  chromatic: { delay: 1000, pauseAnimationAtEnd: true },
};

export const InitialFocus = (): JSX.Element => {
  const buttonRef = React.createRef<HTMLButtonElement>();
  const drawer = useDrawerState({
    defaultOpen: isChromatic() ? true : false,
  });
  return (
    <Box.div h="1000px" w="1350px">
      <Button onClick={drawer.toggle} variant="primary">
        Open drawer
      </Button>
      <Drawer initialFocusRef={buttonRef} state={drawer}>
        <DrawerHeader>
          <DrawerHeading>This is the heading</DrawerHeading>
        </DrawerHeader>
        <DrawerBody>
          <Paragraph>
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
          <Button onClick={drawer.toggle} ref={buttonRef} variant="primary">
            Done
          </Button>
        </DrawerBody>
      </Drawer>
    </Box.div>
  );
};

InitialFocus.parameters = {
  chromatic: { delay: 1000, pauseAnimationAtEnd: true },
};
