import React from "react";
import { Box } from "../../primitives/Box";
import { Badge } from "../Badge";
import { Icon } from "../Icon";
import { Text } from "../../primitives/Text";

export enum InteractiveElementType {
  Card = "card",
}

export type UtilityCardProps = {
  /** Sets the card image source */
  imageSrc: string;
  /** Sets the title to be rendered as h2 */
  title: string;
  /** Sets the type of the clickable element */
  interactiveElementType?: InteractiveElementType;
  /** Text describing the kind of category provided */
  categoryTag: string;
  /** Text describing the current status of the category as a badge */
  status?: string;
  /** Used by StyledComponents to render the component as a specific tag. If href is passed it'll be rendered as "a" */
  as?: React.ComponentProps<typeof Box.div>["as"];
  /** Callback function to be used to invoke onClicks */
  onClick?: React.MouseEventHandler;
};

const cardBg = {
  _: "colorBackgroundWeakest",
};

const cardBorder = {
  focus: "borderInfo",
};

const interactiveBg = {
  active: "colorBackgroundWeak",
  hover: "colorBackgroundWeak",
  ...cardBg,
};

export const UtilityCard: React.FC<UtilityCardProps> = ({
  as = "div",
  imageSrc,
  interactiveElementType,
  title,
  categoryTag,
  status,
  onClick,
}) => {
  const isCardInteractive =
    InteractiveElementType.Card === interactiveElementType;

  const interactiveElementProps = {
    onClick,
    cursor: "pointer",
    border: 0,
  };

  return (
    <Box.div
      as={isCardInteractive ? "button" : as}
      backgroundColor={isCardInteractive ? interactiveBg : cardBg}
      borderColor={isCardInteractive ? cardBorder : null}
      borderRadius="borderRadius30"
      display="flex"
      flexDirection={{ lg: "row" }}
      padding="space50"
      w="100%"
      {...(isCardInteractive ? interactiveElementProps : {})}
    >
      <Box.div
        alignItems="center"
        backgroundColor="bgPrimary"
        borderRadius="borderRadius30"
        display="flex"
        h={{ _: "56px", md: "56px" }}
        justifyContent="center"
        marginRight="space50"
        minWidth={{ _: "24px", md: "24px" }}
        padding={{ _: "space50", md: "space70" }}
        w={{ _: "56px", md: "56px" }}
      >
        <Box.img alt="" aria-hidden h="24px" src={imageSrc} w="24px" />
      </Box.div>

      <Box.div
        display="flex"
        flexDirection="column"
        marginRight="space50"
        textAlign="left"
        w="100%"
      >
        <Text.p
          color="colorTextStronger"
          fontSize="fontSize10"
          fontWeight="fontWeightMedium"
          lineHeight="lineHeight10"
          marginBottom="space20"
          style={{ textAlign: "left" }}
        >
          {categoryTag}
        </Text.p>
        <Text.h2
          fontSize="fontSize30"
          fontWeight="fontWeightBold"
          margin="space0 space0 space40"
        >
          {title}
        </Text.h2>
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
