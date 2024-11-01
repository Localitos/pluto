import React from "react";
import { Box } from "../../primitives/Box";
import { Badge } from "../Badge";
import { Icon } from "../Icon";
import { Text } from "../../primitives/Text";

export enum InteractiveElementTypeUtilityCard {
  Card = "card",
}

export type UtilityCardProps = {
  /** Sets the category emoji */
  emoji: string;
  /** Sets the title to be rendered as h2 */
  title: string;
  /** Sets the type of the clickable element */
  interactiveElementType?: InteractiveElementTypeUtilityCard;
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

const interactiveBg = {
  active: "colorBackgroundWeak",
  hover: "colorBackgroundWeak",
  ...cardBg,
};

export const UtilityCard: React.FC<UtilityCardProps> = ({
  as = "div",
  emoji,
  interactiveElementType,
  title,
  categoryTag,
  status,
  onClick,
}) => {
  const isCardInteractive =
    InteractiveElementTypeUtilityCard.Card === interactiveElementType;

  const interactiveElementProps = {
    onClick,
    cursor: "pointer",
    border: 0,
  };

  return (
    <Box.div
      as={isCardInteractive ? "button" : as}
      backgroundColor={isCardInteractive ? interactiveBg : cardBg}
      borderRadius="borderRadius30"
      display="flex"
      flexDirection={{ lg: "row" }}
      outlineColor={{ focus: "colorBorderPrimary" }}
      padding="d4"
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
        marginRight="d4"
        minWidth={{ _: "24px", md: "24px" }}
        padding={{ _: "d4", md: "d6" }}
        w={{ _: "56px", md: "56px" }}
      >
        <Text.p>{emoji}</Text.p>
      </Box.div>

      <Box.div
        display="flex"
        flexDirection="column"
        marginRight="d4"
        textAlign="left"
        w="100%"
      >
        <Text.p
          color="colorTextStronger"
          fontSize="fontSize10"
          fontWeight="fontWeightMedium"
          lineHeight="lineHeight10"
          margin="0 0 d1"
        >
          {categoryTag}
        </Text.p>
        <Text.h2
          fontSize="fontSize30"
          fontWeight="fontWeightBold"
          margin="m0 m0 d3"
        >
          {title}
        </Text.h2>
        {status && (
          <Box.div>
            <Badge>{status}</Badge>
          </Box.div>
        )}
      </Box.div>

      <Box.div margin="d2">
        <Icon decorative icon="chevron-right" size="sizeIcon20" />
      </Box.div>
    </Box.div>
  );
};
