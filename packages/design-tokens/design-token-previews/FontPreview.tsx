import React from "react";

const FontPreview = ({ fontSize }: { fontSize: string }): JSX.Element => {
  return (
    <div style={{ fontSize: fontSize }}>
      The quick brown fox jumped over the lazy dog.
    </div>
  );
};

export { FontPreview };
