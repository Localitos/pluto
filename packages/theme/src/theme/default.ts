import { createStitches } from "@stitches/react";

export const { styled, css, theme, keyframes, getCssText } = createStitches({
  prefix: "pluto",
  theme: {
    borderWidths: {
      borderWidth0: "0px",
      borderWidth10: "1px",
      borderWidth20: "2px",
    },
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
      fontSize40: "1.25rem", // 20px
      fontSize50: "1.5rem", // 24px
      fontSize60: "2rem", // 32px
      fontSize70: "2.5rem", // 40px
      fontSize80: "3.375rem", // 54px
    },
    fontWeights: {
      fontWeightLight: "300",
      fontWeightRegular: "400",
      fontWeightMedium: "500",
      fontWeightBold: "700",
    },
    fonts: {
      moderat: '"Moderat", "Inter", sans-serif',
    },
    lineHeights: {
      lineHeight10: "1rem", // 16px
      lineHeight20: "1.125rem", // 18px
      lineHeight30: "1.25rem", // 20px
      lineHeight40: "1.5rem", // 24px
      lineHeight50: "1.75rem", // 28px
      lineHeight60: "2rem", // 32px
      lineHeight70: "2.5rem", // 40px
      lineHeight80: "3.375rem", // 54px
      lineHeight90: "4rem", // 64px
    },
    radii: {
      borderRadius10: "4px",
      borderRadius20: "6px",
      borderRadius30: "8px",
      borderRadius40: "16px",
      borderRadius50: "24px",
      borderRadiusCircle: "50%",
      borderRadiusPill: "100px",
    },
    shadows: {
      shadowWeakest: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      shadowWeaker:
        "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
      shadowWeak:
        "0px 4px 16px -1px rgba(0, 0, 0, 0.08), 0px 2px 4px -1px rgba(0, 0, 0, 0.08)",
      shadowStrong:
        "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
      shadowStronger:
        "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
      shadowStrongest: " 0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      shadowFocus:
        "0px 1px 2px rgba(0, 0, 0, 0.05), 0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #102EE9",
    },
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
  },
});
