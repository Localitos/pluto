import replace from "lodash/replace";
import map from "lodash/map";
import toUpper from "lodash/toUpper";
import split from "lodash/split";
import { ColorToken, GeneralToken } from "./types";

export const copyToClipboard =
  (textToCopy: string): (() => void) =>
  () => {
    // Create a temporary input element
    const input = document.createElement("input");
    input.value = textToCopy;

    // Append the input element to the DOM
    document.body.append(input);

    // Select the text in the input element
    input.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the input element
    input.remove();
  };

// this function helps replicate how to use the space token in component props. e.g. <Button paddingBottom="space30" />
export const formatTokenName = (token: GeneralToken, prefix: string): string =>
  `${prefix}${
    toUpper(token[0].charAt(0)) + replace(token[0].slice(1), "-", "")
  }`;


