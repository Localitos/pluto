---
"@localyze-pluto/components": major
---

[Menu]:

- Breaking change: Removed the unnecessary `div` wrapper from the `Menu` component; props are now passed directly to the Menu.
- Improved focus behavior for menu items by adding a background color to the focused item
- Added a new `customStore` prop to enable custom store settings and support different behaviors, such as placement
- Set a default `gutter` value of 3 for the Menu component to align with the Figma design
- Introduced a `menuButtonProps` prop to enable passing props to the default menu button
