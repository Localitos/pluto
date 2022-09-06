import { createStitches } from "@stitches/react";

export const { styled, css, theme, keyframes, getCssText } = createStitches({
  prefix: "pluto",
  theme: {
    borderWidths: {},
    colors: {
      background: "#F7F9FF", // Used as page background colour across the app
      border: "#E2E8F0", // Used for dividers and outlines of containers
      primary: "#102EE9", // Used for CTAs, links, focus states, selection controls, progress bars
      primaryHover: "#0B1F9C", // Used mainly for hover states
      secondary: "#76FAC1", // Used as image background for Case Manager profile photos
      text: "#0F172A", // Used as primary text colour
      textError: "#EF4444", // Used to show that an error occurred
      textSuccess: "#10B981", // Used to give success feedback to user
      textWarning: "#F59E0B", // Used to display a warning for the user
      textWeak: "#64748B", // Used as supporting text colour
    },
    fontSizes: {
      12: "0.75rem", // 12px
      14: "0.875rem", // 14px
      16: "1rem", // 16px
      18: "1.125rem", // 18px
      20: "1.25rem", // 20px
      24: "1.5rem", // 24px
      36: "2.25rem", // 36px
      48: "3rem", // 48px
      60: "3.75rem", // 60px
    },
    fontWeights: {
      black: "900",
      bold: "700",
      medium: "500",
      normal: "400",
    },
    fonts: {
      inter: '"Moderat", sans-serif',
    },
    lineHeights: {
      12: "0.75rem", // 12px
      14: "0.875rem", // 14px
      16: "1rem", // 16px
      20: "1.25rem", // 20px
      24: "1.5rem", // 24px
      28: "1.75rem", // 28px
      32: "2rem", // 32px
      40: "2.5rem", // 40px
      48: "3rem", // 48px
      60: "3.75rem", // 60px
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
