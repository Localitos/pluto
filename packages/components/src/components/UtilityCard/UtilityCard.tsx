import React from "react";
import { Box } from "../../primitives/Box";
import { Heading } from "../Heading";
import { Badge } from "../Badge";
import { Icon } from "../Icon";

export enum InteractiveElementType {
  Card = "card",
}

export type UtilityCardProps = {
  /** Sets the card image source */
  imageAlt: string;
  /** Sets the card image alt */
  imageSrc: string;
  /** Sets the title to be rendered as h2 */
  title: string;
  /** Sets the type of the clickable element */
  interactiveElementType?: InteractiveElementType;
  /** Sets the href to be added to the interactive element */
  href?: string;
  /** Text describing the kind of service provided */
  serviceTag: string;
  /** Text describing the current status of the service as a badge */
  status?: string;
  /** Used by StyledComponents to render the component as a specific tag. If href is passed it'll be rendered as "a" */
  as?: React.ComponentProps<typeof Box.div>["as"];
  /** Callback function to be used to invoke onClicks */
  onClick?: React.MouseEventHandler;
};

const cardBg = {
  _: "colorBackgroundWeakest",
  focus: "colorBackgroundWeakest",
};

const interactiveBg = {
  active: "colorBackgroundWeak",
  hover: "colorBackgroundWeak",
  ...cardBg,
};

export const UtilityCard: React.FC<UtilityCardProps> = ({
  as = "div",
  imageAlt,
  imageSrc,
  interactiveElementType,
  href,
  title,
  serviceTag,
  status,
  onClick,
}) => {
  const isCardInteractive =
    InteractiveElementType.Card === interactiveElementType;

  const interactiveElementProps = {
    href,
    onClick,
    target: "_blank",
    rel: "noopener noreferrer",
    cursor: "pointer",
  };

  return (
    <Box.div
      as={isCardInteractive ? "a" : as}
      backgroundColor={isCardInteractive ? interactiveBg : cardBg}
      borderRadius="borderRadius30"
      display="flex"
      flexDirection={{ _: "column", lg: "row" }}
      padding="space50"
      textDecoration="none"
      {...(isCardInteractive ? interactiveElementProps : {})}
    >
      <Box.div
        alignItems="center"
        backgroundColor="bgPrimary"
        display="flex"
        h={{ _: "56px", md: "56px" }}
        justifyContent="center"
        marginRight="space50"
        minWidth={{ _: "24px", md: "24px" }}
        padding={{ _: "space50", md: "space70" }}
        w={{ _: "56px", md: "56px" }}
      >
        <Box.img alt={imageAlt} aria-hidden h="24px" src={imageSrc} w="24px" />
      </Box.div>

      <Box.div
        display="flex"
        flexDirection="column"
        marginRight="space50"
        w="100%"
      >
        <Box.div
          color="colorTextStronger"
          fontSize="fontSize10"
          fontWeight={"fontWeightMedium"}
          marginBottom="space20"
        >
          {serviceTag}
        </Box.div>
        <Heading as="h2" marginBottom="space40" size="heading70">
          {title}
        </Heading>
        {status && (
          <Box.div>
            <Badge>{status}</Badge>
          </Box.div>
        )}
      </Box.div>

      <Box.div margin="space30">
        <Icon decorative icon="ChevronRightIcon" size="sizeIcon20" />
      </Box.div>
    </Box.div>
  );
};
