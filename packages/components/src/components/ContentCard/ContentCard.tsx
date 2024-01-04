import React from "react";
import { Box, BoxProps } from "../../primitives/Box";
import { Heading } from "../Heading";
import { Text } from "../../primitives/Text";
import { Icon } from "../Icon";
import { Button } from "../Button";
import { Anchor } from "../Anchor";

type ImagePosition = "right" | "top";

type CommonProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
  tag?: string;
  date?: string;
  buttonText?: string;
  onClickButton?: () => void;
  imagePosition?: ImagePosition;
};

type InteractiveCard = {
  href: string;
  linkHref?: undefined;
  linkText?: undefined;
};

type RegularCard = {
  href?: undefined;
  linkHref?: string;
  linkText?: string;
};

export type ContentCardProps = CommonProps & (InteractiveCard | RegularCard);

export const ContentCard = ({
  href,
  imageSrc,
  title,
  tag,
  text,
  date,
  buttonText,
  onClickButton,
  linkText,
  linkHref,
  imageAlt,
  imagePosition = "right",
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

  return (
    <Box.div
      as={href ? "a" : "div"}
      backgroundColor={{
        _: "colorBackground",
        hover: "colorBackgroundWeakest",
        active: "colorBackgroundInfo",
      }}
      border={0}
      borderRadius="borderRadius40"
      boxShadow={{
        hover: "shadowStrong",
        focusWithin: "shadowStrong",
      }}
      cursor={href ? "pointer" : "default"}
      display="flex"
      flexDirection={
        isImageOnTop ? "column-reverse" : { _: "column-reverse", md: "unset" }
      }
      fontFamily="fontFamilyNotoSans"
      href={href}
      maxH={maxHeight[imagePosition]}
      maxW={maxWidth[imagePosition]}
      padding="space0"
      textDecoration="none"
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
          {buttonText && (
            <Box.div w={isImageOnTop ? "50%" : { _: "100%", md: "50%" }}>
              <Button fullWidth onClick={onClickButton} variant="secondary">
                {buttonText}
              </Button>
            </Box.div>
          )}

          {href ? null : <Anchor href={linkHref}>{linkText || ""}</Anchor>}
        </Box.div>
      </Box.div>
      <Box.div
        alignItems="center"
        borderRadius={imageBorderRadius[imagePosition]}
        display="flex"
        maxH={isImageOnTop ? 180 : { _: 180, md: "unset" }}
        maxWidth={isImageOnTop ? 400 : { _: "100%", md: 400 }}
        overflow="hidden"
      >
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
