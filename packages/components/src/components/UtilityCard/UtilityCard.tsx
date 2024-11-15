import React, { ReactElement } from "react";
import { SystemProp, Theme } from "@localyze-pluto/theme";
import { Box } from "../../primitives/Box";
import { Icon } from "../Icon";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";

// Discriminated union to make sure 'onClick' is only required when using 'clickable' as true
type ClickableProps =
  | {
      /** Sets the card to be clickable */
      clickable: true;
      /**
       * Callback function to be used to invoke onClicks
       * Only required when clickable is true
       */
      onClick: React.MouseEventHandler;
    }
  | { clickable?: false; onClick?: never };

type EmojiWrapperSize = "large" | "small";

export type UtilityCardProps = ClickableProps & {
  /** Sets an emoji for the card */
  emoji: string;
  /** Sets the title to be rendered as h2 */
  title: string;
  /** Text to be displayed as a sub title */
  subTitle: string;
  /** Optional content to display in the card, allowing to set additional details. */
  content?: ReactElement;
  /** Used by StyledComponents to render the component as a specific tag. If href is passed it'll be rendered as "a" */
  as?: React.ComponentProps<typeof Box.div>["as"];
  /** Sets the size of the emoji wrapper */
  emojiWrapperSize?: EmojiWrapperSize;
  /** Sets the card to be hoverable */
  hoverable?: boolean;
  /** A helper element to be displayed on the top right of the card */
  indicator?: ReactElement;
};

const getStylesByEmojiWrapperSize: {
  [key in EmojiWrapperSize]: {
    borderRadius: SystemProp<keyof Theme["radii"], Theme>;
    h: string;
    minWidth: string;
    w: string;
    padding: SystemProp<keyof Theme["space"], Theme>;
  };
} = {
  large: {
    borderRadius: "borderRadius40",
    h: "88px",
    minWidth: "88px",
    w: "88px",
    padding: "d6",
  },
  small: {
    borderRadius: "borderRadius30",
    h: "56px",
    minWidth: "56px",
    w: "56px",
    padding: "d4",
  },
};

export const UtilityCard: React.FC<UtilityCardProps> = ({
  as = "div",
  emoji,
  title,
  subTitle,
  content,
  onClick,
  emojiWrapperSize = "small",
  hoverable = false,
  clickable = false,
  indicator,
}) => {
  return (
    <Box.div
      alignItems="flex-start"
      as={clickable ? "button" : as}
      backgroundColor={{
        _: "colorBackgroundWeakest",
        active: "colorBackgroundWeak",
        hover: hoverable ? "colorBackgroundWeak" : undefined,
      }}
      border={clickable ? "0" : "none"}
      borderRadius="borderRadius30"
      cursor={clickable ? "pointer" : "default"}
      display="flex"
      gap={emojiWrapperSize === "large" ? "d6" : "d2_5"}
      onClick={clickable ? onClick : undefined}
      outlineColor={{ focus: "colorBorderPrimary" }}
      padding={emojiWrapperSize === "large" ? "d6" : "d4"}
      w="100%"
    >
      <Box.div
        alignItems="center"
        backgroundColor="bgPrimary"
        display="flex"
        justifyContent="center"
        {...getStylesByEmojiWrapperSize[emojiWrapperSize]}
      >
        <Box.span
          aria-hidden={true}
          fontSize={emojiWrapperSize === "large" ? "fontSize70" : "fontSize40"}
        >
          {emoji}
        </Box.span>
      </Box.div>

      <Box.div
        display="flex"
        flexDirection="column"
        gap={emojiWrapperSize === "large" ? "d1" : "d0"}
        position="relative"
        textAlign="left"
        w="100%"
      >
        {indicator && (
          <Box.div
            position={{
              _: "static",
              sm: "absolute",
            }}
            right={{
              sm: "0",
            }}
          >
            {indicator}
          </Box.div>
        )}
        <Paragraph color="contentSecondary" marginBottom="d0" size="small">
          {subTitle}
        </Paragraph>
        <Heading as="h2" marginBottom="d0" size="title-body">
          {title}
        </Heading>
        {content}
      </Box.div>

      {clickable && (
        <Box.div margin="d2">
          <Icon decorative icon="chevron-right" size="sizeIcon20" />
        </Box.div>
      )}
    </Box.div>
  );
};
