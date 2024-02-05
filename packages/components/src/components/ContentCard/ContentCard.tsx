import React from "react";
import { Box, BoxProps } from "../../primitives/Box";
import { Heading } from "../Heading";
import { Text } from "../../primitives/Text";
import { Icon } from "../Icon";
import { Anchor } from "../Anchor";
import { Button } from "../Button";

type ImagePosition = "right" | "top";

type Background = "default" | "emphasized" | "inverse";

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
  /** Sets an icon to be rendered over the image */
  iconUrl?: string;
  /** Sets the background color according with the type */
  background?: Background;
  /** Sets the type of the clickable element */
  interactiveElementType?: "anchor" | "button" | "card";
  /** Sets the href to be added to the interactive element */
  href?: string;
  /** Where to display the linked URL. Same as: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target */
  target?: HTMLAnchorElement["target"];
  /** Callback to be used when the interactive element is clicked */
  onClick?: React.MouseEventHandler;
  /** Sets the text to the interactive element when it's anchor or button */
  ctaText?: string;
  /** Used by StyledComponents to render the component as a specific tag. If href is passed it'll be rendered as "a" */
  as?: React.ComponentProps<typeof Box.div>["as"];
};

const backgroundColor: Record<Background, BoxProps["backgroundColor"]> = {
  default: "colorBackgroundWeakest",
  inverse: "colorBackground",
  emphasized: "colorBackgroundInfo",
};

export const ContentCard = ({
  href,
  onClick,
  ctaText,
  interactiveElementType,
  imageSrc,
  imageAlt,
  title,
  text,
  tag,
  date,
  iconUrl,
  imagePosition = "right",
  background = "default",
  target,
  as = "div",
}: ContentCardProps): JSX.Element => {
  const isImageOnTop = imagePosition === "top";

  const maxHeight = {
    top: "",
    right: {
      md: 256,
    },
  };

  const maxWidth = {
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

  const isCard = interactiveElementType === "card";
  const isButton = interactiveElementType === "button";
  const inAnchor = interactiveElementType === "anchor";

  const interactiveElementProps = {
    href,
    onClick,
    target,
    rel: "noopener noreferrer",
    cursor: "pointer",
  };

  return (
    <Box.div
      as={isCard ? "a" : as}
      backgroundColor={backgroundColor[background]}
      border={0}
      borderRadius="borderRadius40"
      boxShadow={
        isCard
          ? {
              _: "none",
              hover: "shadowStrong",
            }
          : "none"
      }
      display="flex"
      flexDirection={
        isImageOnTop ? "column-reverse" : { _: "column-reverse", md: "unset" }
      }
      fontFamily="fontFamilyNotoSans"
      justifyContent="space-between"
      maxH={maxHeight[imagePosition]}
      maxW={maxWidth[imagePosition]}
      padding="space0"
      textDecoration="none"
      {...(isCard ? interactiveElementProps : {})}
    >
      <Box.div
        borderRadius="borderRadius40 borderRadius0 borderRadius0 borderRadius40"
        lineHeight="lineHeight30"
        padding="space70"
      >
        <Text.div
          color="colorTextHeadingStronger"
          fontSize="fontSize10"
          lineHeight="lineHeight10"
          marginBottom="space25"
        >
          {tag}
        </Text.div>
        <Heading marginBottom="space0" size="heading60">
          {title}
        </Heading>
        <Text.p
          color="colorTextStrongest"
          fontSize="fontSize20"
          marginBottom="space70"
          marginTop="space30"
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
            gap="space30"
            marginBottom="space70"
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
        <Box.div
          alignItems={
            isImageOnTop ? "center" : { _: "flex-start", md: "center" }
          }
          display="flex"
          flexDirection={isImageOnTop ? "row" : { _: "column", md: "row" }}
          flexShrink={2}
          gap="space50"
        >
          {isButton && (
            <Box.div w={isImageOnTop ? "50%" : { _: "100%", md: "50%" }}>
              <Button
                as="a"
                fullWidth
                variant="secondary"
                {...interactiveElementProps}
              >
                {ctaText}
              </Button>
            </Box.div>
          )}

          {inAnchor && (
            <Anchor {...interactiveElementProps}>{ctaText || ""}</Anchor>
          )}
        </Box.div>
      </Box.div>
      <Box.div
        alignItems="center"
        borderRadius={imageBorderRadius[imagePosition]}
        display="flex"
        maxH={isImageOnTop ? 180 : { _: 180, md: "unset" }}
        maxWidth={isImageOnTop ? 400 : { _: "100%", md: 400 }}
        overflow="hidden"
        position="relative"
      >
        {iconUrl && (
          <Box.div
            alignItems="center"
            backgroundColor="colorBackground"
            borderRadius="borderRadiusCircle"
            data-testid="service-content-card-icon"
            display="flex"
            gap="space30"
            h={56}
            justifyContent="center"
            left="16px"
            position={"absolute"}
            top={16}
            w={56}
          >
            <Box.div h={24} position="relative" w={24}>
              <Box.img aria-hidden h="auto" src={iconUrl} w="100%" />
            </Box.div>
          </Box.div>
        )}

        <Box.img
          alt={imageAlt}
          maxH={{ _: "unset", md: "max-content" }}
          maxWidth="100%"
          src={imageSrc}
          w={{ _: "100%", md: "unset" }}
        />
      </Box.div>
    </Box.div>
  );
};
