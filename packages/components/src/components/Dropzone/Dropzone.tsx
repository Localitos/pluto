import React from "react";
/* Import { SystemProp, Theme } from "@xstyled/styled-components"; */
/* Import type { SystemProp, Theme } from "@xstyled/styled-components"; */
import { useDropzone } from "react-dropzone";
import { styled, theme } from "@localyze-pluto/theme";
/* Import * as HeroOutlineIcons from "@heroicons/react/24/outline"; */
import { ProgressBar } from "../ProgressBar";

import { Box } from "../../primitives/Box";
import { Icon, IconProps } from "../Icon";
import { Text } from "../../primitives/Text";

type DropzoneProps = {
  /** The file types allowed. In the format of an object. */
  fileTypes: Record<string, never>;
  // FileSize
  /** The maximum amount allowed for file size. In the format of number?. */
  // MaxFileSize: number;
  /** Are multiple file uploads allowed? Boolean */
  // MultipleFiles: boolean;
  /** This is the function that gets triggered when a file is dropped */
  onSuccess: () => void;
};

const getBorderColors = ({ status, isDragAccept, isDragReject, isFocused }) => {
  if (status === "success") {
    return `${theme.colors.colorBorderSuccess}`;
  }
  if (isDragAccept) {
    return `${theme.colors.colorBorderPrimary}`;
  }
  if (isDragReject || status === "error") {
    return `${theme.colors.colorBorderError}`;
  }
  if (isFocused) {
    return `${theme.colors.colorBorderPrimary}`;
  }
  return `${theme.colors.colorBorder}`;
};

const getBackgroundColors = ({
  status,
  isDragAccept,
  isDragReject,
  isFocused,
}) => {
  if (status === "success") {
    return `${theme.colors.colorBackgroundSuccess}`;
  }
  if (isDragAccept) {
    return `${theme.colors.colorBackgroundInfo}`;
  }
  if (isDragReject || status === "error") {
    return `${theme.colors.colorBackgroundError}`;
  }
  if (isFocused) {
    return `${theme.colors.colorBackground}`;
  }
  return `${theme.colors.colorBackgroundWeakest}`;
};

const getIcon = (status: string, isDragActive, isDragAccept, isDragReject) => {
  let icon: IconProps["icon"] = "CloudArrowUpIcon";
  let iconColor: IconProps["color"] = "colorIconInfo";
  if (!isDragActive && status === "success") {
    icon = "CheckCircleIcon";
    iconColor = "colorIconSuccess";
  }
  if (isDragAccept) {
    icon = "CloudArrowUpIcon";
    iconColor = "colorIconInfo";
  }
  if (isDragReject || status === "error") {
    icon = "ExclamationTriangleIcon";
    iconColor = "colorIconError";
  }

  return <Icon color={iconColor} decorative icon={icon} size={"sizeIcon40"} />;
};

const DropZone = styled(Box.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.space.space70};
  border-width: 2px;
  border-radius: ${theme.radii.borderRadius30};
  border-color: ${(props) => getBorderColors(props)};
  border-style: dashed;
  background-color: ${(props) => getBackgroundColors(props)};
  outline: none;
  transition: border 0.24s ease-in-out;
  &:focus {
    outline: none;
    border-color: red;
  }
`;
/* This is what the dropzone should look like when used in a component */
{
  /* <Dropzone fileType="foo" onSuccess={() => console.log('yay')} /> */
}

const Dropzone = React.forwardRef<HTMLDivElement, DropzoneProps>(
  ({ fileTypes = { "application/pdf": [".pdf"] }, onSuccess }, ref) => {
    const [status, setStatus] = React.useState("default");
    const [progress, setProgress] = React.useState(0);

    const {
      acceptedFiles,
      getRootProps,
      getInputProps,
      isFocused,
      isDragActive,
      isDragAccept,
      isDragReject,
    } = useDropzone({
      maxFiles: 1,
      multiple: false,
      accept: {
        ...fileTypes,
      },
      onDropAccepted: () => {
        setStatus("loading");
        onSuccess(acceptedFiles[0], setProgress);
        setTimeout(() => {
          setStatus("success");
          setTimeout(() => {
            setStatus("default");
          }, 2000);
        }, 5000);
      },
      onDropRejected: () => {
        setTimeout(() => {
          setStatus("default");
        }, 5000);
        setStatus("error");
      },
    });

    React.useEffect(() => {
      if (status === "loading") {
        const timer = setTimeout(() => setProgress(100), 500);
        () => clearTimeout(timer);
      }
    }, [status]);

    return (
      <>
        <DropZone
          {...getRootProps({ status, isFocused, isDragAccept, isDragReject })}
          ref={ref}
        >
          <input {...getInputProps()} />
          {getIcon(status, isDragActive, isDragAccept, isDragReject)}
          {status === "loading" && (
            <Box.div display="flex" flexDirection="column" gap="space40">
              <ProgressBar value={progress} />
            </Box.div>
          )}
          {(isDragReject || status === "error") && (
            <Text.span
              color="colorTextStronger"
              fontSize={"fontSize30"}
              fontWeight="fontWeightRegular"
            >
              Wrong file type. PDF format only.
            </Text.span>
          )}
          {((!isDragActive && status === "default") || isDragAccept) && (
            <>
              <Text.span
                color="colorTextStronger"
                fontSize={"fontSize30"}
                fontWeight="fontWeightRegular"
              >
                Drag and drop or browse
              </Text.span>
              <Text.span color="colorText" fontSize={"fontSize20"}>
                File must be PDF format and no larger than xxMB
              </Text.span>
            </>
          )}
          {!isDragActive && status === "success" && (
            <Text.span color="colorTextStronger" fontSize={"fontSize20"}>
              {acceptedFiles[0].name}
            </Text.span>
          )}
        </DropZone>
      </>
    );
  }
);

Dropzone.displayName = "Dropzone";

export { Dropzone };
