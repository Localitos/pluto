import {
  useAlertDialogState,
  AlertDialog,
  AlertDialogHeader,
  AlertDialogIconWrapper,
  AlertDialogBody,
  AlertDialogFooter,
} from "./index";
import { Paragraph } from "../Paragraph";
import { Button } from "../Button";
import isChromatic from "chromatic/isChromatic";
import React from "react";
import ReactDOM from "react-dom";
import { isDocumentDefined } from "~components/utilities/DetectBrowser/DetectBrowser";

type AlertDialogFunctionProps = {
  /** Name of the modal */
  name: string;
  /** Title of the dialog box */
  title: string;
  /** Body of the text in the dialog box */
  description: string;
  /** Label for the confirm button */
  confirmationLabel: string;
  /** Label for the cancel button */
  cancelLabel: string;
};

const AlertDialogFunction = ({
  name,
  title,
  description,
  confirmationLabel,
  cancelLabel,
}: AlertDialogFunctionProps) => {
  const wrapper = !isDocumentDefined()
    ? null
    : document.body.appendChild(document.createElement("div"));

  const promise = new Promise((resolve, reject) => {
    ReactDOM.render(
      <AlertDialog state={reject}>
        <AlertDialogHeader>{title}</AlertDialogHeader>
        <AlertDialogBody>
          <Paragraph marginBottom="space0" size="large">
            {description}
          </Paragraph>
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button onClick={reject} variant="secondary">
            {cancelLabel}
          </Button>
          <Button onClick={resolve} variant="primary">
            {confirmationLabel}
          </Button>
        </AlertDialogFooter>
      </AlertDialog>,
      wrapper
    );
  });

  return promise
    .then((result) => {
      if (isDocumentDefined()) {
        setTimeout(() => document.body.removeChild(wrapper));
      }

      ReactDOM.unmountComponentAtNode(wrapper);
      return result;
    })
    .catch((result) => {
      if (isDocumentDefined()) {
        setTimeout(() => document.body.removeChild(wrapper));
      }

      ReactDOM.unmountComponentAtNode(wrapper);
      return Promise.reject(result);
    });
};

export default AlertDialogFunction;
