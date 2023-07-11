import type { Meta } from "@storybook/react";
import React from "react";
import isChromatic from "chromatic/isChromatic";
import { Anchor } from "../Anchor";
import { Button } from "../Button";
import { Box } from "../../primitives/Box";
import { useTooltipStore, Tooltip, TooltipAnchor } from "./index";

export default {
  component: Tooltip,
  title: "Components/Tooltip",
  parameters: {
    chromatic: { delay: 1000 },
  },
} as Meta<typeof Tooltip>;

export const Default = (): JSX.Element => {
  const tooltip = useTooltipStore({
    defaultOpen: isChromatic() ? true : false,
  });
  return (
    <>
      <TooltipAnchor as={Button} store={tooltip} variant="secondary">
        Hover or focus on me
      </TooltipAnchor>
      <Tooltip store={tooltip}>This is the content of the tooltip.</Tooltip>
    </>
  );
};

export const AnchorBased = (): JSX.Element => {
  const tooltip = useTooltipStore({
    defaultOpen: isChromatic() ? true : false,
  });
  return (
    <>
      <TooltipAnchor as={Anchor} href="#" store={tooltip}>
        Hover or focus on me
      </TooltipAnchor>
      <Tooltip store={tooltip}>This is the content of the tooltip.</Tooltip>
    </>
  );
};

export const RightAligned = (): JSX.Element => {
  const tooltip = useTooltipStore({
    defaultOpen: isChromatic() ? true : false,
    placement: "right",
  });
  return (
    <>
      <TooltipAnchor as={Button} store={tooltip} variant="secondary">
        Hover or focus on me
      </TooltipAnchor>
      <Tooltip store={tooltip}>This is the content of the tooltip.</Tooltip>
    </>
  );
};

export const BottomAligned = (): JSX.Element => {
  const tooltip = useTooltipStore({
    defaultOpen: isChromatic() ? true : false,
    placement: "bottom",
  });
  return (
    <>
      <TooltipAnchor as={Button} store={tooltip} variant="primary">
        Hover or focus on me
      </TooltipAnchor>
      <Tooltip store={tooltip}>This is the content of the tooltip.</Tooltip>
    </>
  );
};

export const LeftAligned = (): JSX.Element => {
  const tooltip = useTooltipStore({
    defaultOpen: isChromatic() ? true : false,
    placement: "left",
  });
  return (
    <Box.div display="flex" justifyContent="flex-end">
      <TooltipAnchor as={Button} store={tooltip} variant="primary">
        Hover or focus on me
      </TooltipAnchor>
      <Tooltip store={tooltip}>This is the content of the tooltip.</Tooltip>
    </Box.div>
  );
};

export const MultilineOpen = (): JSX.Element => {
  const tooltipOne = useTooltipStore({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipTwo = useTooltipStore({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipThree = useTooltipStore({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipFour = useTooltipStore({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipFive = useTooltipStore({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipSix = useTooltipStore({
    defaultOpen: isChromatic() ? true : false,
  });

  return (
    <Box.div
      display="grid"
      gridTemplateColumns="repeat(3, max-content)"
      justifyContent="space-between"
      rowGap="18rem"
    >
      <Box.div>
        <TooltipAnchor as={Button} store={tooltipOne} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip store={tooltipOne}>
          This is the content of the tooltip. It should be on multiple lines.
        </Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} store={tooltipTwo} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip store={tooltipTwo}>
          This is the content of the tooltip. It should be on multiple lines.
        </Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} store={tooltipThree} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip store={tooltipThree}>
          This is the content of the tooltip. It should be on multiple lines.
        </Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} store={tooltipFour} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip store={tooltipFour}>
          This is the content of the tooltip. It should be on multiple lines.
        </Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} store={tooltipFive} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip store={tooltipFive}>
          This is the content of the tooltip. It should be on multiple lines.
        </Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} store={tooltipSix} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip store={tooltipSix}>
          This is the content of the tooltip. It should be on multiple lines.
        </Tooltip>
      </Box.div>
    </Box.div>
  );
};

export const SinglelineOpen = (): JSX.Element => {
  const tooltipOne = useTooltipStore({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipTwo = useTooltipStore({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipThree = useTooltipStore({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipFour = useTooltipStore({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipFive = useTooltipStore({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipSix = useTooltipStore({
    defaultOpen: isChromatic() ? true : false,
  });

  return (
    <Box.div
      display="grid"
      gridTemplateColumns="repeat(3, max-content)"
      justifyContent="space-between"
      rowGap="18rem"
    >
      <Box.div>
        <TooltipAnchor as={Button} store={tooltipOne} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip store={tooltipOne}>Approved</Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} store={tooltipTwo} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip store={tooltipTwo}>Approved</Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} store={tooltipThree} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip store={tooltipThree}>Approved</Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} store={tooltipFour} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip store={tooltipFour}>Approved</Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} store={tooltipFive} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip store={tooltipFive}>Approved</Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} store={tooltipSix} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip store={tooltipSix}>Approved</Tooltip>
      </Box.div>
    </Box.div>
  );
};
