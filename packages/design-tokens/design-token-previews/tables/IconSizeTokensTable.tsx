import React from "react";
import map from "lodash/map";
import { SystemProp, Theme } from "@xstyled/styled-components";
import iconSizeTokens from "../../src/tokens/size.tokens.json";
import { Icon } from "../../../components/src/components/Icon/Icon";
import { ThemeProvider, theme } from "../../../theme";
import {
  Table,
  THead,
  TBody,
  Tr,
  Th,
  Td,
} from "../../../components/src/components/Table/";
import { formatPixels, formatRems, formatTokenName } from "./utils";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

export const IconSizeTokensTable = (): JSX.Element => {
  return (
    <Table>
      <THead>
        <Tr>
          <Th>
            <h3>Name</h3>
          </Th>
          <Th>
            <h3>Pixels</h3>
          </Th>
          <Th>
            <h3>Rems</h3>
          </Th>
          <Th>
            <h3>Visualization</h3>
          </Th>
        </Tr>
      </THead>
      <TBody>
        {map(Object.entries(iconSizeTokens.size), (token) => {
          const tokenSize = formatTokenName(token, "size") as SystemProp<
            keyof Theme["sizes"],
            Theme
          >;
          return (
            <Tr key={token[0]}>
              <Td>
                <div style={{ display: "flex" }}>
                  <div>{formatTokenName(token, "size")}</div>
                  <CopyToClipboardButton
                    textToCopy={formatTokenName(token, "size")}
                  />
                </div>
              </Td>
              <Td>{formatPixels(token)}</Td>
              <Td>{formatRems(token)}</Td>
              <Td>
                <ThemeProvider theme={theme}>
                  <Icon
                    decorative
                    display="flex"
                    icon="HeartIcon"
                    size={tokenSize}
                  />
                </ThemeProvider>
              </Td>
            </Tr>
          );
        })}
      </TBody>
    </Table>
  );
};
