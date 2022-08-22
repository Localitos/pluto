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
  extends: [
    "turbo",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["jest", "testing-library", "jsx-a11y"],
  ignorePatterns: ["*.pdf", "*.svg"],
  rules: {
    "react/jsx-key": "off",
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
        "max-len": [
          "error",
          { code: 100, ignorePattern: "^import .* |[}] from .*" },
        ],
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
        "react/jsx-closing-tag-location": ["error"],
        "@typescript-eslint/sort-type-union-intersection-members": ["error"],
        "prefer-template": ["error"],
        "@typescript-eslint/restrict-plus-operands": ["error"],
        "@typescript-eslint/no-unnecessary-condition": ["error"],
        "no-console": ["error"],
        "capitalized-comments": ["error"],
        "function-call-argument-newline": ["error", "consistent"],
        "@typescript-eslint/no-unsafe-assignment": ["error"],
      },
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
    {
      files: ["*.test.ts", "*.test.tsx", "*.spec.tsx", "*.stories.tsx"],
      rules: {
        "no-magic-numbers": "off",
        "max-len": "off",
      },
    },
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
};
