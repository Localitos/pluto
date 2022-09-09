module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        // Adding .d.ts is a temporary fix for bug in eslint-plugin-import
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
  ignorePatterns: ["*.css", "*.scss", "*.pdf", "*.svg"],
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jsdoc/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "plugin:lodash/recommended",
  ],
  rules: {
    "unicorn/prevent-abbreviations": "off",
    "unicorn/filename-case": "off",
    "unicorn/no-null": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/no-useless-undefined": "off",
    // PropTypes are unnecessary with TypeScript.
    "react/prop-types": "off",
    "react/jsx-sort-props": ["warn"],
    "no-console": ["error"],
    "prefer-template": ["error"],
    "no-use-before-define": ["error"],
    "capitalized-comments": ["error"],
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
      ],
      rules: {
        "@typescript-eslint/no-explicit-any": ["error"],
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
        "@typescript-eslint/no-extra-parens": ["error", "functions"],
        "@typescript-eslint/no-unsafe-return": ["error"],
        "@typescript-eslint/sort-type-union-intersection-members": ["error"],
        "@typescript-eslint/restrict-plus-operands": ["error"],
        "@typescript-eslint/no-unnecessary-condition": ["error"],
        "@typescript-eslint/no-unsafe-assignment": ["error"],
        // JSDoc types are redundant with typescript
        "jsdoc/no-types": ["error", { contexts: ["any"] }],
        "jsdoc/require-returns-type": "off",
        "jsdoc/require-param-type": "off",
        "jsdoc/require-property-type": "off",
      },
    },
    {
      files: ["*.{test,spec,stories}.{ts,tsx,js,jsx}"],
      rules: {
        "react/display-name": "off",
      },
    },
    {
      files: ["*.test.{ts,tsx,js,jsx}"],
      extends: [
        "plugin:testing-library/react",
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:jest-dom/recommended",
        "plugin:jest-formatting/recommended",
      ],
    },
    {
      files: ["*.spec.{ts,tsx,js,jsx}"],
      extends: ["plugin:cypress/recommended"],
    },
    {
      files: ["*.stories.{ts,tsx,js,jsx}"],
      extends: ["plugin:storybook/recommended"],
      rules: {
        "import/no-default-export": "off",
      },
    },
    // Ensure that the prettier plugin is last so that it may overwrite any conflicting rules enabled above.
    {
      files: ["*.{ts,tsx,js,jsx,cjs,mjs}"],
      extends: ["prettier"],
    },
  ],
};
