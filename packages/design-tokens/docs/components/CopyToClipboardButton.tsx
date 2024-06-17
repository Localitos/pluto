import React, { useEffect, useState } from "react";
import { Box } from "../../../components/src/primitives/Box";
import { Icon } from "../../../components/src/components/Icon/Icon";
import { ThemeProvider, theme } from "../../../theme";
import { copyToClipboard } from "../utils";

interface IconProps {
  textToCopy: string;
}

const CopyToClipboardButton = ({ textToCopy }: IconProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  const [onCopyClick, setOnCopyClick] = useState(false);

  useEffect(() => {
    onCopyClick && setTimeout(() => setOnCopyClick(false), 3000);
  }, [onCopyClick]);

  return (
    <ThemeProvider theme={theme}>
      <Box.div style={{ paddingLeft: "8px" }}>
        {onCopyClick ? (
          <span style={{ color: "#ea00ff", fontSize: "8px" }}>Copied!</span>
        ) : (
          <Icon
            decorative
            icon="copy"
            onClick={() => {
              setOnCopyClick(true);
              return copyToClipboard(textToCopy);
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            size="sizeIcon20"
            style={{
              cursor: "pointer",
              color: isHovered ? "blue" : "black",
              transition: "color 0.2s",
            }}
          />
        )}
      </Box.div>
    </ThemeProvider>
  );
};

export { CopyToClipboardButton };
