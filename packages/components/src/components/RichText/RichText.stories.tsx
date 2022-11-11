import * as React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { RichText } from "./RichText";

export default {
  component: RichText,
  title: "Components/RichText",
} as ComponentMeta<typeof RichText>;

const textString =
  "<h2>Sweets<h2> <h4>Cupcake</h4> <p>I love cake chocolate gingerbread tiramisu I love soufflé halvah soufflé. Croissant brownie wafer carrot cake sweet roll.</p> <h4>Chocolate</h4> <p>bar cookie bear claw pudding candy tiramisu. Fruitcake macaroon marshmallow biscuit toffee I love. Donut caramels pastry pudding bonbon bear claw jelly beans I love sweet roll. Sugar plum sweet tootsie roll toffee soufflé I love biscuit wafer pie.</p><ul><li>I love cake chocolate gingerbread <b>tiramisu</b> I love soufflé halvah soufflé.</li><li>Sugar plum sweet tootsie roll toffee soufflé I love biscuit wafer pie.</li></ul>";

const Template: ComponentStory<typeof RichText> = (args) => (
  <RichText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: textString,
};

export const ExternalAnchors = Template.bind({});
ExternalAnchors.args = {
  children:
    '<p>More Sweets</p><a href="https://www.bbcgoodfood.com/recipes/cupcakes">See here</a>',
  externalAnchors: true,
};

ExternalAnchors.parameters = {
  docs: {
    storyDescription:
      "Use the <code>externalAnchors</code> to add external target and rel attributes to all anchors in the string.",
  },
};
