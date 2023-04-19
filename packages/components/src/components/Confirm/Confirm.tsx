import React from "react";
import ReactDOM from "react-dom";
import { ConfirmDialog } from "./ConfirmDialog/ConfirmDialog";

type ConfirmProps = {
  title: string;
  description: string;
  confirmLabel: string;
  cancelLabel: string;
};

/**
 * Helper function which allows you to call a confirmation modal similar to how you use `window.confirm`. Renders an `AlertDialog` component when called.
 *
 * @param props - Props for the confirm dialog
 * @param props.title - Title of the confirm dialog
 * @param props.description - Description of the confirm dialog
 * @param props.confirmLabel - Label for the confirm button
 * @param props.cancelLabel - Label for the cancel button
 * @returns Promise which resolves when the confirm button is clicked and rejects when the cancel button is clicked
 */
const Confirm = async ({
  title,
  description,
  confirmLabel,
  cancelLabel,
}: ConfirmProps): Promise<void> => {
  // Ignoring because appendChild returns the element which is needed for the rest of the code
  // eslint-disable-next-line unicorn/prefer-dom-node-append
  const wrapper = document.body.appendChild(document.createElement("div"));

  const promise = new Promise<void>((resolve, reject) => {
    ReactDOM.render(
      <ConfirmDialog
        cancelLabel={cancelLabel}
        confirmLabel={confirmLabel}
        description={description}
        onCancel={reject}
        onConfirm={resolve}
        title={title}
      />,
      wrapper
    );
  });

  try {
    const result = await promise;

    ReactDOM.unmountComponentAtNode(wrapper);
    wrapper.remove();
    return result;
  } catch (error) {
    ReactDOM.unmountComponentAtNode(wrapper);
    wrapper.remove();
    throw error;
  }
};

Confirm.displayName = "Confirm";

export { Confirm };
