import React, { useEffect, useState } from "react";
import { Icon } from "../../components/src/components/Icon/Icon";
import { ThemeProvider, theme } from "../../theme";
import { copyToClipboard } from "./utils/copyToClipboard";

interface IconProps {
  textToCopy: string;
}

const CopyToClipboardButton = ({ textToCopy }: IconProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  const [onCopyClick, setOnCopyClick] = useState(false);

  useEffect(() => {
    onCopyClick && setTimeout(() => setOnCopyClick(false), 3000);
  }, [setOnCopyClick, onCopyClick]);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ paddingLeft: "8px" }}>
        <Icon
          decorative
          icon="DocumentDuplicateIcon"
          onClick={copyToClipboard(textToCopy)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          size="sizeIcon20"
          style={{
            cursor: "pointer",
            color: isHovered ? "blue" : "black",
            transition: "color 0.2s",
          }}
        />
        {onCopyClick && (
          <span style={{ paddingLeft: "4px", fontSize: "10px" }}>Copied!</span>
        )}
      </div>
    </ThemeProvider>
  );
};

export { CopyToClipboardButton };
