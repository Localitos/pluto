import { createStitches } from "@stitches/react";

export const { styled, css, theme, keyframes, getCssText } = createStitches({
  prefix: "pluto",
  theme: {
    borderWidths: {},
    colors: {
      colorTextStrongest: "#0F172A",
      colorTextStronger: "#334155",
      colorText: "#64748B",
      colorTextError: "#B91C1C",
      colorTextWarning: "#B45309",
      colorTextSuccess: "#047857",
      colorTextInverse: "#FFFFFF",
      colorTextLink: "#102EE9",
      colorTextLinkStrong: "#0B1F9C",
      colorTextHeading: "#041162",
      colorBackground: "#FFFFFF",
      colorBackgroundWeakest: "#F8FAFC",
      colorBackgroundWeaker: "#F7F9FF",
      colorBackgroundWeak: "#F1F5F9",
      colorBackgroundStrong: "#CBD5E1",
      colorBackgroundPrimary: "#102EE9",
      colorBackgroundPrimaryStrong: "#0B1F9C",
      colorBackgroundPrimaryStrongest: "#041162",
      colorBackgroundDestructive: "#DC2626",
      colorBackgroundDestructiveStrong: "#B91C1C",
      colorBackgroundInfo: "#EBEDFF",
      colorBackgroundSuccess: "#ECFDF5",
      colorBackgroundWarning: "#FFFBEB",
      colorBackgroundError: "#FEF2F2",
      colorBackgroundBody: "#F7F9FF",
      colorBackgroundGradientTasks:
        "linear-gradient(177.5deg, #FF9788 -9.4%, #3440DF 64.04%, #102EE9 97.66%)",
      colorBackgroundGradientProcesses:
        "linear-gradient(175.85deg, #9FFED5 4.23%, #3767E4 53.02%, #234AE6 70.91%, #102EE9 96.37%)",
      colorBorderWeakest: "#E2E8F0",
      colorBorderWeaker: "#CBD5E1",
      colorBorder: "#64748B",
      colorBorderStrongest: "#0F172A",
      colorBorderError: "#EF4444",
      colorBorderWarning: "#D97706",
      colorBorderSuccess: "#059669",
      colorBorderPrimary: "#102EE9",
      colorIconError: "#DC2626",
      colorIconWarning: "#D97706",
      colorIconSuccess: "#059669",
      colorIconInfo: "#102EE9",
      colorIconWeaker: "#94A3B8",
      colorIconWeak: "#64748B",
      colorIconStrong: "#334155",
      colorIconStronger: "#0F172A",
    },
    fontSizes: {
      fontSize10: "0.75rem", // 12px
      fontSize20: "0.875rem", // 14px
      fontSize30: "1rem", // 16px
      fontSize40: "1.125rem", // 18px
      fontSize50: "1.25rem", // 20px
      fontSize60: "1.5rem", // 24px
      fontSize70: "2.25rem", // 36px
      fontSize80: "3rem", // 48px
      fontSize90: "3.75rem", // 60px
    },
    fontWeights: {
      fontWeightBlack: "900",
      fontWeightBold: "700",
      fontWeightMedium: "500",
      fontWeightNormal: "400",
    },
    fonts: {
      moderat: '"Moderat", sans-serif',
    },
    lineHeights: {
      lineHeight10: "0.75rem", // 12px
      lineHeight20: "0.875rem", // 14px
      lineHeight30: "1rem", // 16px
      lineHeight40: "1.25rem", // 20px
      lineHeight50: "1.5rem", // 24px
      lineHeight60: "1.75rem", // 28px
      lineHeight70: "2rem", // 32px
      lineHeight80: "2.5rem", // 40px
      lineHeight90: "3rem", // 48px
      lineHeight100: "3.75rem", // 60px
    },
    radii: {},
    space: {
      0: "0rem", // 0px
      1: "0.063rem", // 1px
      10: "0.625rem", // 10px
      112: "7rem", // 112px
      12: "0.75rem", // 12px
      128: "8rem", // 128px
      14: "0.875rem", // 14px
      144: "9rem", // 144px
      16: "1rem", // 16px
      160: "10rem", // 160px
      176: "11rem", // 176px
      192: "12rem", // 192px
      2: "0.125rem", // 2px
      20: "1.25rem", // 20px
      208: "13rem", // 208px
      224: "14rem", // 224px
      24: "1.5rem", // 24px
      240: "15rem", // 240px
      256: "16rem", // 256px
      28: "1.75rem", // 28px
      288: "18rem", // 288px
      32: "2rem", // 32px
      320: "20rem", // 320px
      36: "2.25rem", // 36px
      384: "24rem", // 384px
      4: "0.25rem", // 4px
      40: "2.5rem", // 40px
      44: "2.75rem", // 44px
      48: "3rem", // 48px
      56: "3.5em", // 56px
      6: "0.375rem", // 6px
      64: "4rem", // 64px
      8: "0.5rem", // 8px
      80: "5rem", // 80px
      96: "6rem", // 96px
    },
    zIndices: {},
  },
});
