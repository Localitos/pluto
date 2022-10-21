import React from "react";
import { SystemProp, Theme } from "@xstyled/styled-components";
import { Box } from "../../primitives/Box";
import { Text } from "../../primitives/Text";
import { useGetImageOrientation } from "./useGetImageOrientation";
import { Orientation } from "./getImageOrientation";
import { getInitials } from "./getInitials";

export type AvatarSizeOptions = "large" | "medium" | "small" | "xsmall";

export type AvatarProps = {
  /** The name of the entity being represented. */
  name: string;
  /** The image source to be used for the avatar. */
  src?: string;
  /** The size of the avatar. */
  size?: AvatarSizeOptions;
  /** Set `true` to show the name of the entity to the right of the avatar. */
  showName?: boolean;
};

const getAvatarSizes = (
  size: AvatarSizeOptions
): {
  w: string;
  h: string;
} => {
  switch (size) {
    case "xsmall": {
      return {
        w: "16px",
        h: "16px",
      };
    }
    case "small": {
      return {
        w: "24px",
        h: "24px",
      };
    }
    case "large": {
      return {
        w: "40px",
        h: "40px",
      };
    }
    default: {
      return {
        w: "32px",
        h: "32px",
      };
    }
  }
};

const getInitialsSizes = (
  size: AvatarSizeOptions
): {
  fontSize?: SystemProp<keyof Theme["fontSizes"], Theme>;
  style?: React.CSSProperties;
} => {
  switch (size) {
    case "xsmall": {
      return {
        style: { fontSize: "0.5rem" },
      };
    }
    case "small": {
      return {
        fontSize: "fontSize10",
      };
    }
    case "large": {
      return {
        fontSize: "fontSize30",
      };
    }
    default: {
      return {
        fontSize: "fontSize20",
      };
    }
  }
};

const getLabelSizes = (
  size: AvatarSizeOptions
): {
  fontSize: SystemProp<keyof Theme["fontSizes"], Theme>;
} => {
  switch (size) {
    case "xsmall": {
      return {
        fontSize: "fontSize10",
      };
    }
    case "small":
    case "large": {
      return {
        fontSize: "fontSize20",
      };
    }
    default: {
      return {
        fontSize: "fontSize30",
      };
    }
  }
};

const getImageSizes = (
  size: AvatarSizeOptions,
  orientation?: Orientation
): {
  w: string;
  h: string;
} => {
  const { w, h } = getAvatarSizes(size);

  if (orientation === "landscape") {
    return { h, w: "auto" };
  }

  return { h: "auto", w };
};

/** An avatar is an element that uses text or images to represent users visually. */
const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, name, showName, size = "medium", ...props }, ref) => {
    const { orientation, hasError } = useGetImageOrientation(src);
    const shouldRenderImage = src && !hasError;
    const shouldRenderInitials = (!src && name) || (hasError && name);
    const ariaProps = {
      "aria-label": shouldRenderInitials ? name : undefined,
    };

    return (
      <Box.div alignItems="center" display="flex" gap="space30">
        <Box.div
          alignItems="center"
          backgroundColor="colorBackgroundWeak"
          borderRadius="borderRadiusCircle"
          display="flex"
          justifyContent="center"
          overflow="hidden"
          ref={ref}
          {...ariaProps}
          {...getAvatarSizes(size)}
          {...props}
        >
          {shouldRenderImage && (
            <Box.img
              alt={name}
              borderRadius="borderRadiusCircle"
              src={src}
              {...getImageSizes(size, orientation)}
            />
          )}
          {shouldRenderInitials && (
            <Box.span
              aria-hidden={true}
              color="colorAvatarInitials"
              {...getInitialsSizes(size)}
            >
              {getInitials(name)}
            </Box.span>
          )}
        </Box.div>
        {showName && (
          <Text.span
            color="colorTextStrongest"
            fontWeight="fontWeightBold"
            {...getLabelSizes(size)}
          >
            {name}
          </Text.span>
        )}
      </Box.div>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar };
