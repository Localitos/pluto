---
"@localyze-pluto/components": major
---

[ControlledFormInput/ControlledFormSelect/ControlledFormTextArea] - Fixed missing dependency causing the controlled components to throw an error when used.

BREAKING CHANGE

[ControlledFormInput/ControlledFormSelect/ControlledFormTextArea] - Omits `hasError` property and automatically sets that and error message based on field state.
