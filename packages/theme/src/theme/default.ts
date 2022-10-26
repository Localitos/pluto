import { defaultTheme } from "@xstyled/styled-components";

export const theme = {
  ...defaultTheme,
  borderStyles: {
    borderSolid: "solid",
  },
  borderWidths: {
    borderWidth0: "0px",
    borderWidth10: "1px",
    borderWidth20: "2px",
  },
  colors: {
    colorTextStrongest: "#0F172A",
    colorTextStronger: "#334155",
    colorText: "#64748B",
    colorTextInfo: "#0B1F9C",
    colorTextError: "#B91C1C",
    colorTextWarning: "#B45309",
    colorTextSuccess: "#047857",
    colorTextInverse: "#FFFFFF",
    colorTextLink: "#102EE9",
    colorTextLinkStrong: "#0B1F9C",
    colorTextLinkVisited: "#950FFF",
    colorTextHeadingStronger: "#041162",
    colorTextHeadingStrong: "#102EE9",
    colorTextHeading: "#334155",
    colorBackground: "#FFFFFF",
    colorBackgroundWeakest: "#F8FAFC",
    colorBackgroundWeaker: "#F7F9FF",
    colorBackgroundWeak: "#F1F5F9",
    colorBackgroundStrong: "#CBD5E1",
    colorBackgroundPrimaryWeak: "#4A63FC",
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
    colorBackgroundTodo:
      "linear-gradient(360deg, rgba(16, 37, 233, 0.08) 0%, rgba(36, 63, 235, 0.0733333) 49.48%, rgba(255, 255, 255, 0) 100%)",
    colorBackgroundComplete:
      "linear-gradient(360deg, rgba(82, 244, 174, 0.12) 0%, rgba(131, 247, 197, 0.0575) 57.81%, rgba(255, 255, 255, 0) 100%)",
    colorBackgroundPreview:
      "linear-gradient(360deg, rgba(71, 94, 105, 0.08) 6.19%, rgba(71, 94, 105, 0.0504167) 57.3%, rgba(255, 255, 255, 0) 93.81%)",
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
    colorAvatarInitials: "#4A63FC",
  },
  fontSizes: {
    fontSize10: "0.75rem", // 12px
    fontSize20: "0.875rem", // 14px
    fontSize30: "1rem", // 16px
    fontSize40: "1.25rem", // 20px
    fontSize50: "1.5rem", // 24px
    fontSize60: "2rem", // 32px
    fontSize70: "2.5rem", // 40px
    fontSize80: "3rem", // 48px
    fontSize90: "3.375rem", // 54px
  },
  fontWeights: {
    fontWeightLight: "300",
    fontWeightRegular: "400",
    fontWeightMedium: "500",
    fontWeightBold: "700",
  },
  fonts: {
    fontFamilyModerat: '"Moderat", "Inter", sans-serif',
  },
  lineHeights: {
    lineHeight10: "1rem", // 16px
    lineHeight20: "1.125rem", // 18px
    lineHeight30: "1.25rem", // 20px
    lineHeight40: "1.5rem", // 24px
    lineHeight50: "1.75rem", // 28px
    lineHeight60: "2rem", // 32px
    lineHeight70: "2.5rem", // 40px
    lineHeight80: "3rem", // 48px
    lineHeight90: "3.375rem", // 54px
    lineHeight100: "3.75rem", // 60px
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
    shadow: "0px 3px 24px rgba(15, 23, 42, 0.05)",
    shadowStrong: "0px 8px 24px rgba(15, 23, 42, 0.08)",
    shadowFocus:
      "0px 1px 2px rgba(0, 0, 0, 0.05), 0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #102EE9",
  },
  sizes: {
    sizeIcon10: "0.75rem", // 12px
    sizeIcon20: "1rem", // 16px
    sizeIcon30: "1.25rem", // 20px
    sizeIcon40: "1.5rem", // 24px
  },
  space: {
    space0: "0rem", // 0px
    space10: "0.125rem", // 2px
    space20: "0.25rem", // 4px
    space30: "0.5rem", // 8px
    space40: "0.75rem", // 12px
    space50: "1rem", // 16px
    space60: "1.25rem", // 20px
    space70: "1.5rem", // 24px
    space80: "1.75rem", // 28px
    space90: "2rem", // 32px
    space100: "2.25rem", // 36px
    space110: "2.5rem", // 40px
    space120: "3rem", // 48px
    space130: "3.25rem", // 52px
    space140: "3.5rem", // 56px
    space150: "3.75rem", // 60px
    space160: "4.5rem", // 72px
    space170: "5rem", // 80px
    space180: "6rem", // 96px
    space190: "6.25rem", // 100px
    spaceNegative10: "-0.125rem", // -2px
    spaceNegative20: "-0.25rem", // -4px
    spaceNegative30: "-0.5rem", // -8px
    spaceNegative40: "-0.75rem", // -12px
    spaceNegative50: "-1rem", // -16px
    spaceNegative60: "-1.25rem", // -20px
    spaceNegative70: "-1.5rem", // -24px
    spaceNegative80: "-1.75rem", // -28px
    spaceNegative90: "-2rem", // -32px
    spaceNegative100: "-2.25rem", // -36px
    spaceNegative110: "-2.5rem", // -40px
    spaceNegative120: "-3rem", // -48px
    spaceNegative130: "-3.25rem", // -52px
    spaceNegative140: "-3.5rem", // -56px
    spaceNegative150: "-3.75rem", // -60px
    spaceNegative160: "-4.5rem", // -72px
    spaceNegative170: "-5rem", // -80px
    spaceNegative180: "-6rem", // -96px
    spaceNegative190: "-6.25rem", // -100px
  },
  states: {
    ...defaultTheme.states,
    loading: '&[aria-busy="true"]',
  },
  zIndices: {
    zIndex0: 0,
    zIndex10: 10,
    zIndex20: 20,
    zIndex30: 30,
    zIndex40: 40,
    zIndex50: 50,
    zIndex60: 60,
    zIndex70: 70,
    zIndex80: 80,
    zIndex90: 90,
  },
};
