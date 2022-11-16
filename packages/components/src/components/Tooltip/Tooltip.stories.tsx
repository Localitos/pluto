import type { ComponentMeta } from "@storybook/react";
import React from "react";
import isChromatic from "chromatic/isChromatic";
import { Anchor } from "../Anchor";
import { Button } from "../Button";
import { Box } from "../../primitives/Box";
import { useTooltipState, Tooltip, TooltipAnchor } from "./index";

export default {
  component: Tooltip,
  title: "Components/Tooltip",
  parameters: {
    chromatic: { delay: 1000 },
  },
} as ComponentMeta<typeof Tooltip>;

export const Default = (): JSX.Element => {
  const tooltip = useTooltipState({
    defaultOpen: isChromatic() ? true : false,
  });
  return (
    <>
      <TooltipAnchor as={Button} state={tooltip} variant="secondary">
        Hover or focus on me
      </TooltipAnchor>
      <Tooltip state={tooltip}>This is the content of the tooltip.</Tooltip>
    </>
  );
};

export const AnchorBased = (): JSX.Element => {
  const tooltip = useTooltipState({
    defaultOpen: isChromatic() ? true : false,
  });
  return (
    <>
      <TooltipAnchor as={Anchor} href="#" state={tooltip}>
        Hover or focus on me
      </TooltipAnchor>
      <Tooltip state={tooltip}>This is the content of the tooltip.</Tooltip>
    </>
  );
};

export const RightAligned = (): JSX.Element => {
  const tooltip = useTooltipState({
    defaultOpen: isChromatic() ? true : false,
    placement: "right",
  });
  return (
    <>
      <TooltipAnchor as={Button} state={tooltip} variant="secondary">
        Hover or focus on me
      </TooltipAnchor>
      <Tooltip state={tooltip}>This is the content of the tooltip.</Tooltip>
    </>
  );
};

export const BottomAligned = (): JSX.Element => {
  const tooltip = useTooltipState({
    defaultOpen: isChromatic() ? true : false,
    placement: "bottom",
  });
  return (
    <>
      <TooltipAnchor as={Button} state={tooltip} variant="primary">
        Hover or focus on me
      </TooltipAnchor>
      <Tooltip state={tooltip}>This is the content of the tooltip.</Tooltip>
    </>
  );
};

export const LeftAligned = (): JSX.Element => {
  const tooltip = useTooltipState({
    defaultOpen: isChromatic() ? true : false,
    placement: "left",
  });
  return (
    <Box.div display="flex" justifyContent="flex-end">
      <TooltipAnchor as={Button} state={tooltip} variant="primary">
        Hover or focus on me
      </TooltipAnchor>
      <Tooltip state={tooltip}>This is the content of the tooltip.</Tooltip>
    </Box.div>
  );
};

export const MultilineOpen = (): JSX.Element => {
  const tooltipOne = useTooltipState({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipTwo = useTooltipState({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipThree = useTooltipState({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipFour = useTooltipState({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipFive = useTooltipState({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipSix = useTooltipState({
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
        <TooltipAnchor as={Button} state={tooltipOne} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip state={tooltipOne}>
          This is the content of the tooltip. It should be on multiple lines.
        </Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} state={tooltipTwo} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip state={tooltipTwo}>
          This is the content of the tooltip. It should be on multiple lines.
        </Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} state={tooltipThree} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip state={tooltipThree}>
          This is the content of the tooltip. It should be on multiple lines.
        </Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} state={tooltipFour} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip state={tooltipFour}>
          This is the content of the tooltip. It should be on multiple lines.
        </Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} state={tooltipFive} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip state={tooltipFive}>
          This is the content of the tooltip. It should be on multiple lines.
        </Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} state={tooltipSix} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip state={tooltipSix}>
          This is the content of the tooltip. It should be on multiple lines.
        </Tooltip>
      </Box.div>
    </Box.div>
  );
};

export const SinglelineOpen = (): JSX.Element => {
  const tooltipOne = useTooltipState({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipTwo = useTooltipState({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipThree = useTooltipState({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipFour = useTooltipState({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipFive = useTooltipState({
    defaultOpen: isChromatic() ? true : false,
  });
  const tooltipSix = useTooltipState({
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
        <TooltipAnchor as={Button} state={tooltipOne} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip state={tooltipOne}>Approved</Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} state={tooltipTwo} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip state={tooltipTwo}>Approved</Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} state={tooltipThree} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip state={tooltipThree}>Approved</Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} state={tooltipFour} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip state={tooltipFour}>Approved</Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} state={tooltipFive} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip state={tooltipFive}>Approved</Tooltip>
      </Box.div>

      <Box.div>
        <TooltipAnchor as={Button} state={tooltipSix} variant="secondary">
          Hover or focus on me
        </TooltipAnchor>
        <Tooltip state={tooltipSix}>Approved</Tooltip>
      </Box.div>
    </Box.div>
  );
};
