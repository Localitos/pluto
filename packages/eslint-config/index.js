module.exports = {
  parser: "@typescript-eslint/parser",
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
        // adding .d.ts is a temporary fix for bug in eslint-plugin-import
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
  ignorePatterns: ["*.css", "*.scss", "*.pdf", "*.svg"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["jest", "testing-library", "jsx-a11y"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": ["error"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "react/prop-types": "off",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
        "react/jsx-sort-props": ["error"],
        "sort-keys": ["error"],
        "sort-imports": [
          "warn",
          {
            allowSeparatedGroups: true,
          },
        ],
        "no-extra-parens": "off",
        "@typescript-eslint/no-extra-parens": ["error", "functions"],
        "@typescript-eslint/no-unsafe-return": ["error"],
        "no-magic-numbers": [
          "error",
          {
            ignoreDefaultValues: true,
            enforceConst: true,
            ignoreArrayIndexes: true,
          },
        ],
        "react/self-closing-comp": ["error"],
        "no-use-before-define": ["error"],
        "@typescript-eslint/sort-type-union-intersection-members": ["error"],
        "prefer-template": ["error"],
        "@typescript-eslint/restrict-plus-operands": ["error"],
        "@typescript-eslint/no-unnecessary-condition": ["error"],
        "no-console": ["error"],
        "capitalized-comments": ["error"],
        "@typescript-eslint/no-unsafe-assignment": ["error"],
      },
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
    {
      files: ["*.{test,spec,stories}.{ts,tsx,js,jsx}"],
      rules: {
        "no-magic-numbers": "off",
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
    },
    // Ensure that the prettier plugin is last so that it may overwrite any conflicting rules enabled above.
    {
      files: ["*.{ts,tsx,js,jsx,cjs,mjs}"],
      extends: ["prettier"],
    },
  ],
};
