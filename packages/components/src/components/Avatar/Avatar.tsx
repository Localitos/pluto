import React from "react";
import { SystemProp, Theme } from "@xstyled/styled-components";
import { Box } from "../../primitives/Box";
import { Text } from "../../primitives/Text";
import { useGetImageOrientation } from "./useGetImageOrientation";
import { Orientation } from "./getImageOrientation";
import { getInitials } from "./getInitials";

export type AvatarColorOptions =
  | "blue"
  | "green"
  | "light blue"
  | "orange"
  | "pink"
  | "yellow";

export type AvatarSizeOptions =
  | "large"
  | "medium"
  | "small"
  | "xlarge"
  | "xsmall";

export type AvatarProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "color"
> & {
  /** The color used for the avatar background. */
  color?: AvatarColorOptions;
  /** The name of the entity being represented. */
  name: string;
  /** The image source to be used for the avatar. */
  src?: string;
  /** The size of the avatar. */
  size?: AvatarSizeOptions;
  /** Set `true` to show the name of the entity to the right of the avatar. */
  showName?: boolean;
  /** Set `true` to adds a border to Avatar */
  border?: boolean;
};

const getAvatarSizes = (
  size: AvatarSizeOptions,
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
    case "xlarge": {
      return {
        w: "120px",
        h: "120px",
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

const getInitialsStyles = (
  size: AvatarSizeOptions,
): {
  fontSize?: SystemProp<keyof Theme["fontSizes"], Theme>;
  fontWeight?: SystemProp<keyof Theme["fontWeights"], Theme>;
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
    case "xlarge": {
      return {
        fontSize: "fontSize70",
        fontWeight: "fontWeightBold",
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
  size: AvatarSizeOptions,
): {
  fontSize: SystemProp<keyof Theme["fontSizes"], Theme>;
} => {
  switch (size) {
    case "xsmall": {
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

const getImageSizes = (
  size: AvatarSizeOptions,
  orientation?: Orientation,
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

const getAvatarColorStyles = (
  color: AvatarColorOptions,
): {
  backgroundColor?: SystemProp<keyof Theme["colors"], Theme>;
} => {
  switch (color) {
    case "green": {
      return {
        backgroundColor: "colorAvatarBackgroundGreen",
      };
    }
    case "light blue": {
      return {
        backgroundColor: "colorAvatarBackgroundLightBlue",
      };
    }
    case "orange": {
      return {
        backgroundColor: "colorAvatarBackgroundOrange",
      };
    }
    case "pink": {
      return {
        backgroundColor: "colorAvatarBackgroundPink",
      };
    }
    case "yellow": {
      return {
        backgroundColor: "colorAvatarBackgroundYellow",
      };
    }
    default: {
      return {
        backgroundColor: "colorAvatarBackgroundBlue",
      };
    }
  }
};

const getBorderStyles = (
  size: AvatarSizeOptions,
): {
  borderWidth?: SystemProp<keyof Theme["borderWidths"], Theme>;
  borderColor?: SystemProp<keyof Theme["colors"], Theme>;
  borderStyle?: SystemProp<keyof Theme["borderStyles"], Theme>;
} => {
  const getBorderWidth = () => {
    switch (size) {
      case "xsmall": {
        return "borderWidth10";
      }

      case "small": {
        return "borderWidth20";
      }

      case "xlarge": {
        return "borderWidth60";
      }

      default: {
        return "borderWidth30";
      }
    }
  };

  return {
    borderColor: "colorBorderWarning",
    borderStyle: "borderStyleSolid",
    borderWidth: getBorderWidth(),
  };
};

/** An avatar is an element that uses text or images to represent users visually. */
const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    { border, color = "blue", src, name, showName, size = "medium", ...props },
    ref,
  ) => {
    const { orientation, hasError } = useGetImageOrientation(src);
    const shouldRenderImage = src && !hasError;
    const shouldRenderInitials = (!src && name) || (hasError && name);
    const ariaProps = {
      "aria-label": shouldRenderInitials ? name : undefined,
    };

    return (
      <Box.div alignItems="center" display="flex" gap="d2">
        <Box.div
          alignItems="center"
          borderRadius="borderRadiusCircle"
          display="flex"
          justifyContent="center"
          overflow="hidden"
          ref={ref}
          {...ariaProps}
          {...(border && getBorderStyles(size))}
          {...getAvatarColorStyles(color)}
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
              color="colorTextStronger"
              {...getInitialsStyles(size)}
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
  },
);

Avatar.displayName = "Avatar";

export { Avatar };
