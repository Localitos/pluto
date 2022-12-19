---
"@localyze-pluto/components": minor
---

[Select]: Adjusted the base functionality so it works as a multiselect. In order to get a multiselect, an array should be passed to either `defaultValue` or `value`.

- Also removed the need for the `initial` prop on `SelectItem` by adding default text if a Select value is an empty string.
