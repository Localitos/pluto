import * as React from "react";
import parse, { HTMLReactParserOptions, domToReact } from "html-react-parser";
import type { DOMNode, Element } from "html-react-parser";
import toUpper from "lodash/toUpper";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { Anchor } from "../Anchor";
import { ListItem, OrderedList, UnorderedList } from "../List";

export interface RichTextProps {
  /** The string of content to be rendered. */
  children: string;
  /** If true, add external target and rel attributes to anchor tags. */
  externalAnchors?: boolean;
}

// eslint-disable-next-line jsdoc/require-param, jsdoc/require-returns
/** RichText renders html from a string. */
const RichText = ({
  children,
  externalAnchors,
}: RichTextProps): JSX.Element => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      const element = domNode as Element;
      // TS is lying here. This isn't always truthy.
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (element.attribs) {
        const { children, attribs } = element;

        const name = toUpper(element.name);

        switch (name) {
          case "A": {
            return (
              <Anchor href={attribs.href} isExternal={externalAnchors}>
                {domToReact(children as DOMNode[], options)}
              </Anchor>
            );
          }
          case "CODE": {
            return <code>{domToReact(children as DOMNode[], options)}</code>;
          }
          case "H1": {
            return (
              <Heading as="h1" size="heading10">
                {domToReact(children as DOMNode[], options)}
              </Heading>
            );
          }
          case "H2": {
            return (
              <Heading>{domToReact(children as DOMNode[], options)}</Heading>
            );
          }
          case "H3": {
            return (
              <Heading as="h3" size="heading30">
                {domToReact(children as DOMNode[], options)}
              </Heading>
            );
          }
          case "H4": {
            return (
              <Heading as="h4" size="heading40">
                {domToReact(children as DOMNode[], options)}
              </Heading>
            );
          }
          case "H5": {
            return (
              <Heading as="h5" size="heading50">
                {domToReact(children as DOMNode[], options)}
              </Heading>
            );
          }
          case "H6": {
            return (
              <Heading as="h6" size="heading60">
                {domToReact(children as DOMNode[], options)}
              </Heading>
            );
          }
          case "HR": {
            return <hr />;
          }
          case "P": {
            return (
              <Paragraph>
                {domToReact(children as DOMNode[], options)}
              </Paragraph>
            );
          }
          case "OL": {
            return (
              <OrderedList>
                {domToReact(children as DOMNode[], options)}
              </OrderedList>
            );
          }
          case "UL": {
            return (
              <UnorderedList>
                {domToReact(children as DOMNode[], options)}
              </UnorderedList>
            );
          }
          case "LI": {
            return (
              <ListItem>{domToReact(children as DOMNode[], options)}</ListItem>
            );
          }
          case "B": {
            return (
              <strong>{domToReact(children as DOMNode[], options)}</strong>
            );
          }
          case "BR": {
            return <br />;
          }
          default: {
            return <span>{domToReact(children as DOMNode[], options)}</span>;
          }
        }
      }
      // eslint-disable-next-line sonarjs/no-redundant-jump
      return;
    },
  };

  return <span>{parse(children, options)}</span>;
};

RichText.displayName = "RichText";

export { RichText };
