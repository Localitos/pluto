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
