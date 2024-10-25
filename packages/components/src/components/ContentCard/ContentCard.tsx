import React, { ReactNode } from "react";
import { Box, BoxProps } from "../../primitives/Box";
import { Heading } from "../Heading";
import { Text } from "../../primitives/Text";
import { Icon } from "../Icon";
import { Anchor } from "../Anchor";
import { Button } from "../Button";

type ImagePosition = "right" | "top";

type Background = "default" | "emphasized" | "inverse";

export enum InteractiveElementType {
  Anchor = "anchor",
  Button = "button",
  Card = "card",
  Custom = "custom",
}

export type ContentCardProps = {
  /** Sets the card image source */
  imageSrc: string;
  /** Sets the card image alt */
  imageAlt: string;
  /** Sets the title to be rendered as h2 */
  title: string;
  /** Sets the content text */
  text: string;
  /** Sets the content tag */
  tag?: string;
  /** Sets the date to be rendered together with calendar icon */
  date?: string;
  /** Sets the image position on the card */
  imagePosition?: ImagePosition;
  /** Sets the background color according with the type */
  background?: Background;
  /** Sets the type of the clickable element */
  interactiveElementType?: InteractiveElementType;
  /** Sets the href to be added to the interactive element */
  href?: string;
  /** Where to display the linked URL. Same as: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target */
  target?: HTMLAnchorElement["target"];
  /** Callback to be used when the interactive element is clicked */
  onClick?: React.MouseEventHandler;
  /** Sets the interactive element when it's anchor or button */
  callToAction?: ReactNode;
  /** Used by StyledComponents to render the component as a specific tag. If href is passed it'll be rendered as "a" */
  as?: React.ComponentProps<typeof Box.div>["as"];
  /** Overwrites default maxWidth */
  maxWidth?: BoxProps["maxW"];
  /** Overwrites default h (height) */
  h?: BoxProps["h"];
  /** Overwrites default w (width) */
  w?: BoxProps["w"];
  /** Element to be rendered on the top left corner of the card */
  topLeftElement?: ReactNode;
  /** Element to be rendered on the top right corner of the card */
  topRightElement?: ReactNode;
  /** Applies reduced opacity to the card */
  hasLowOpacity?: boolean;
};

const backgroundColor: Record<Background, BoxProps["backgroundColor"]> = {
  default: "colorBackgroundWeakest",
  inverse: "colorBackground",
  emphasized: "colorBackgroundInfo",
};

export const ContentCard = ({
  href,
  onClick,
  callToAction,
  interactiveElementType,
  imageSrc,
  imageAlt,
  title,
  text,
  tag,
  date,
  topLeftElement,
  imagePosition = "right",
  background = "default",
  target,
  as = "div",
  maxWidth,
  h,
  w,
  topRightElement,
  hasLowOpacity,
}: ContentCardProps): JSX.Element => {
  const isImageOnTop = imagePosition === "top";

  const maxHeight = {
    top: "",
    right: {
      md: 256,
    },
  };

  const maxWidthDefault = {
    top: 350,
    right: {
      _: 350,
      md: 1000,
    },
  };

  const imageBorderRadius: Record<ImagePosition, BoxProps["borderRadius"]> = {
    top: "borderRadius40 borderRadius40 borderRadius0 borderRadius0",
    right: {
      _: "borderRadius40 borderRadius40 borderRadius0 borderRadius0",
      md: "borderRadius0 borderRadius40 borderRadius40 borderRadius0",
    },
  };

  const isCardInteractive =
    InteractiveElementType.Card === interactiveElementType;

  const interactiveElementProps = {
    href,
    onClick,
    target,
    rel: "noopener noreferrer",
    cursor: "pointer",
  };

  return (
    <Box.div
      border={0}
      borderRadius="borderRadius40"
      boxShadow={
        isCardInteractive
          ? {
              _: "none",
              hover: "shadowStrong",
            }
          : "none"
      }
      h="100%"
      maxH={maxHeight[imagePosition]}
      maxW={maxWidth || maxWidthDefault[imagePosition]}
      overflow="hidden"
      position="relative"
    >
      <Box.div
        as={isCardInteractive ? "a" : as}
        backgroundColor={backgroundColor[background]}
        display="flex"
        flexDirection={
          isImageOnTop ? "column-reverse" : { _: "column-reverse", md: "unset" }
        }
        fontFamily="fontFamilyNotoSans"
        h={h ?? "100%"}
        justifyContent="start"
        maxH={maxHeight[imagePosition]}
        maxW={maxWidth || maxWidthDefault[imagePosition]}
        opacity={hasLowOpacity ? 0.6 : 1}
        textDecoration="none"
        w={w}
        {...(isCardInteractive ? interactiveElementProps : {})}
      >
        <Box.div
          borderRadius="borderRadius40 borderRadius0 borderRadius0 borderRadius40"
          display="flex"
          flexDirection="column"
          flexGrow={1}
          maxWidth={isImageOnTop ? "100%" : { _: "100%", md: "50%" }}
          padding="d6"
        >
          <Box.div lineHeight="lineHeight30">
            {tag && (
              <Text.div
                color="colorTextHeadingStronger"
                fontSize="fontSize10"
                lineHeight="lineHeight10"
                marginBottom="d2"
              >
                {tag}
              </Text.div>
            )}
            <Heading
              color="cardContentTitle"
              marginBottom="m0"
              size="title-group"
            >
              {title}
            </Heading>
            <Text.p
              color="cardContentBody"
              fontSize="fontSize20"
              marginBottom="d6"
              marginTop="d2"
            >
              {text}
            </Text.p>
            {date && (
              <Box.div
                alignItems="center"
                color="colorTextLinkStrong"
                display="flex"
                fontSize="fontSize20"
                fontWeight="fontWeightMedium"
                gap="d2"
                marginBottom="d6"
              >
                <Icon decorative icon="calendar" size="sizeIcon30" />
                <Text.span
                  fontFamily="fontFamilyNotoSans"
                  fontSize="fontSize20"
                  lineHeight="lineHeight30"
                >
                  {date}
                </Text.span>
              </Box.div>
            )}
          </Box.div>
          <Box.div
            alignItems={
              isImageOnTop ? "center" : { _: "flex-start", md: "center" }
            }
            display="flex"
            flexDirection={isImageOnTop ? "row" : { _: "column", md: "row" }}
            flexShrink={2}
            gap="d4"
            style={{ marginTop: "auto" }}
          >
            {InteractiveElementType.Button === interactiveElementType && (
              <Box.div w={isImageOnTop ? "100%" : { _: "100%", md: "50%" }}>
                <Button
                  as="a"
                  fullWidth
                  variant="secondary"
                  {...interactiveElementProps}
                >
                  {callToAction}
                </Button>
              </Box.div>
            )}

            {InteractiveElementType.Anchor === interactiveElementType && (
              <Anchor {...interactiveElementProps}>{callToAction || ""}</Anchor>
            )}

            {InteractiveElementType.Custom === interactiveElementType && (
              <Box.div w={isImageOnTop ? "100%" : { _: "100%", md: "50%" }}>
                {callToAction}
              </Box.div>
            )}
          </Box.div>
        </Box.div>
        <Box.div
          alignItems="center"
          borderRadius={imageBorderRadius[imagePosition]}
          display="flex"
          maxH={isImageOnTop ? 180 : { _: 180, md: "unset" }}
          overflow="hidden"
          position="relative"
          w={isImageOnTop ? "100%" : { _: "100%", md: "50%" }}
        >
          {topLeftElement && (
            <Box.div
              alignItems="center"
              backgroundColor="colorBackground"
              borderRadius="borderRadius30"
              data-testid="service-content-card-icon"
              display="flex"
              gap="d2"
              h={56}
              justifyContent="center"
              left="24px"
              padding="d2"
              position="absolute"
              top="24px"
              w={56}
            >
              <Box.div
                alignItems="center"
                display="flex"
                justifyContent="center"
                position="relative"
              >
                {topLeftElement}
              </Box.div>
            </Box.div>
          )}
          <Box.img
            alt={imageAlt}
            h="100%"
            objectFit="cover"
            src={imageSrc}
            w="100%"
          />
        </Box.div>
      </Box.div>
      {topRightElement}
    </Box.div>
  );
};
