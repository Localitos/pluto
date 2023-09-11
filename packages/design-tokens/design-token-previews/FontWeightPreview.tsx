import React from "react";

const FontWeightPreview = ({
  fontWeight,
}: {
  fontWeight: string;
}): JSX.Element => {
  return (
    <div style={{ fontWeight: fontWeight }}>
      The quick brown fox jumped over the lazy dog.
    </div>
  );
};

export { FontWeightPreview };
