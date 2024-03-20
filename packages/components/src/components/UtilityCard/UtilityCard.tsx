import React from "react";
import { Box, BoxProps } from "../../primitives/Box";
import { Heading } from "../Heading";
import { Badge } from "../Badge";
import { Icon } from "../Icon";

type UtilityCardProps = {
  imageAlt: string;
  imageSrc: string;
  title: string;
  categoryTag: string;
  status: string;
  as?: React.ComponentProps<typeof Box.div>["as"];
  action?: () => void;
};

export const UtilityCard: React.FC<UtilityCardProps> = ({
  as,
  imageAlt,
  imageSrc,
  title,
  categoryTag,
  status,
  action,
}) => {
  return (
    <Box.div
      as={as}
      backgroundColor={{
        _: "colorBackgroundWeakest",
        active: "bgSecondary",
        hover: "colorBackgroundWeak",
        focus: "colorBackgroundWeakest",
      }}
      borderRadius="borderRadius30"
      display="flex"
      flexDirection={{ _: "column", lg: "row" }}
      padding="space50"
      onClick={action}
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
          {categoryTag}
        </Box.div>
        <Heading as="h2" marginBottom="space40" size="heading70">
          {title}
        </Heading>
        <Box.div>
          <Badge>{status}</Badge>
        </Box.div>
      </Box.div>

      <Box.div margin="space30">
        <Icon decorative icon="ChevronRightIcon" size="sizeIcon20" />
      </Box.div>
    </Box.div>
  );
};
