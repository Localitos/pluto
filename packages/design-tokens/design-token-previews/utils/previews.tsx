import React from "react";

import includes from "lodash/includes";

import { TokenEntry } from "../types/Token";

import { FontSizePreview } from "../FontSizePreview";
import { FontWeightPreview } from "../FontWeightPreview";
import { IconSizePreview } from "../IconSizePreview";

export const createFontWeightPreview = ([
  tokenSuffix,
  token,
]: TokenEntry): JSX.Element => {
  return <FontWeightPreview fontWeight={token.value} key={tokenSuffix} />;
};

export const createFontSizePreview = ([
  tokenSuffix,
  token,
]: TokenEntry): JSX.Element => {
  return <FontSizePreview fontSize={token.value} key={tokenSuffix} />;
};

export const createIconSizePreview = ([
  tokenSuffix,
  token,
]: TokenEntry): JSX.Element => {
  return <IconSizePreview key={tokenSuffix} pixels={token.value} />;
};

export const createBorderRadiiPreview = ([
  ,
  token,
]: TokenEntry): JSX.Element => {
  return (
    <div style={{ borderStyle: "solid", borderRadius: token.value }}>
      &nbsp;
    </div>
  );
};

export const createBorderWidthPreview = ([
  ,
  token,
]: TokenEntry): JSX.Element => {
  return (
    <div style={{ borderStyle: "solid", borderWidth: token.value }}>&nbsp;</div>
  );
};

export const createBorderStylePreview = ([
  ,
  token,
]: TokenEntry): JSX.Element => {
  return <div style={{ borderStyle: token.value }}>&nbsp;</div>;
};

export const createColorPreview = ([, token]: TokenEntry): JSX.Element => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: token.value,
      }}
    >
      &nbsp;
    </div>
  );
};

export const createSpacePreview = ([, token]: TokenEntry): JSX.Element => {
  if (includes(token.value, "-")) {
    return (
      <div
        style={{
          width: `${token.value}`,
        }}
      >
        &nbsp;
      </div>
    );
  }
  return (
    <div
      style={{
        width: `${token.value}`,
        backgroundColor: "#413cff",
      }}
    >
      &nbsp;
    </div>
  );
};
