---
"@localyze-pluto/components": major
---

UtilityCard:

Breaking Change:

- Removed the `interactiveElementType` prop in order to add two new states properties `hoverable` and `clickable`
- Renamed `categoryTag` to `subTitle` to make it more generic
- `onClick` prop is only required when using `clickable` as true

Minor:

- Added `hoverable` and `clickable` to have more control of state of the card
- Added `emojiWrapperSize` prop with options `small` and `large` so it's adaptable to different use cases
- Added `indicator` to add a helper element to the top right of the card
