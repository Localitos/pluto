const includes = require("lodash/includes");
const map = require("lodash/map");
const camelCase = require("lodash/camelCase");
const upperFirst = require("lodash/upperFirst");
const replace = require("lodash/replace");
const StyleDictionary = require("style-dictionary");

const colorTokensPath = "src/tokens/color.tokens.json";

const handleLodashJavascript = (token) => {
  const { attributes } = token;

  return `export const ${camelCase(attributes.category)}${replace(upperFirst(attributes.type), "-", "")} = "${token.value}" /** ${token.comment} */`;
};

const handleLodashTypescript = (token) => {
  const { attributes } = token;

  return `/* ${token.value} */
export const ${camelCase(attributes.category)}${replace(upperFirst(attributes.type), "-", "")}: string`;
};

StyleDictionary.registerFormat({
  name: "jsPrefixFormatter",
  formatter: function ({ dictionary }) {
    return map(dictionary.allTokens, handleLodashJavascript).join("\n");
  },
});

StyleDictionary.registerFormat({
  name: "jsPrefixFormatterTypes",
  formatter: function ({ dictionary }) {
    return map(dictionary.allTokens, handleLodashTypescript).join("\n");
  },
});

const colorPrefixes = [
  "loca-marine",
  "yellow",
  "red",
  "green",
  "cream",
  "navy",
  "light-blue",
  "coral",
  "gray",
  "color",
  "bg",
  "content",
  "border",
];

module.exports = {
  source: ["src/**/*.tokens.json"],
  platforms: {
    css: {
      transformGroup: "css",
      prefix: "pluto",
      buildPath: "dist/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
    scss: {
      transformGroup: "scss",
      prefix: "pluto",
      buildPath: "dist/scss/",
      files: [
        {
          destination: "variables.scss",
          format: "scss/variables",
        },
      ],
    },
    ts: {
      transforms: ["attribute/cti", "name/cti/camel"],
      transformGroup: "js",
      buildPath: "dist/js/",
      files: [
        {
          destination: "border-radius.js",
          format: "javascript/es6",
          filter: {
            attributes: {
              category: "border-radius",
            },
          },
        },
        {
          destination: "border-radius.d.ts",
          format: "typescript/es6-declarations",
          filter: {
            attributes: {
              category: "border-radius",
            },
          },
        },
        {
          destination: "border-style.js",
          format: "javascript/es6",
          filter: {
            attributes: {
              category: "border-style",
            },
          },
        },
        {
          destination: "border-style.d.ts",
          format: "typescript/es6-declarations",
          filter: {
            attributes: {
              category: "border-style",
            },
          },
        },
        {
          destination: "border-width.js",
          format: "javascript/es6",
          filter: {
            attributes: {
              category: "border-width",
            },
          },
        },
        {
          destination: "border-width.d.ts",
          format: "typescript/es6-declarations",
          filter: {
            attributes: {
              category: "border-width",
            },
          },
        },
        {
          destination: "colors.js",
          format: "javascript/es6",
          filter: (token) => {
            return (
              token.filePath === colorTokensPath &&
              includes(colorPrefixes, token.attributes.category)
            );
          },
        },
        {
          destination: "colors.d.ts",
          format: "typescript/es6-declarations",
          filter: (token) => {
            return (
              token.filePath === colorTokensPath &&
              includes(colorPrefixes, token.attributes.category)
            );
          },
        },
        {
          destination: "font-family.js",
          format: "javascript/es6",
          filter: {
            attributes: {
              category: "font-family",
            },
          },
        },
        {
          destination: "font-family.d.ts",
          format: "typescript/es6-declarations",
          filter: {
            attributes: {
              category: "font-family",
            },
          },
        },
        {
          destination: "font-size.js",
          format: "javascript/es6",
          filter: (token) => {
            return (
              token.filePath === "src/tokens/font-size.tokens.json" &&
              includes(["font-size", "title"], token.attributes.category)
            );
          },
        },
        {
          destination: "font-size.d.ts",
          format: "typescript/es6-declarations",
          filter: (token) => {
            return (
              token.filePath === "src/tokens/font-size.tokens.json" &&
              includes(["font-size", "title"], token.attributes.category)
            );
          },
        },
        {
          destination: "font-weight.js",
          format: "javascript/es6",
          filter: {
            attributes: {
              category: "font-weight",
            },
          },
        },
        {
          destination: "font-weight.d.ts",
          format: "typescript/es6-declarations",
          filter: {
            attributes: {
              category: "font-weight",
            },
          },
        },
        {
          destination: "line-height.js",
          format: "jsPrefixFormatter",
          filter: (token) => {
            return (
              token.filePath === "src/tokens/line-height.tokens.json" &&
              includes(["line-height", "lh"], token.attributes.category)
            );
          },
        },
        {
          destination: "line-height.d.ts",
          format: "typescript/es6-declarations",
          filter: (token) => {
            return (
              token.filePath === "src/tokens/line-height.tokens.json" &&
              includes(["line-height", "lh"], token.attributes.category)
            );
          },
        },
        {
          destination: "size.js",
          format: "javascript/es6",
          filter: {
            attributes: {
              category: "size",
            },
          },
        },
        {
          destination: "size.d.ts",
          format: "typescript/es6-declarations",
          filter: {
            attributes: {
              category: "size",
            },
          },
        },
        {
          destination: "space.js",
          format: "jsPrefixFormatter",
          filter: (token) => {
            return (
              token.filePath === "src/tokens/space.tokens.json" &&
              includes(["space", "d"], token.attributes.category)
            );
          },
        },
        {
          destination: "space.d.ts",
          format: "jsPrefixFormatterTypes",
          filter: (token) => {
            return (
              token.filePath === "src/tokens/space.tokens.json" &&
              includes(["space", "d"], token.attributes.category)
            );
          },
        },
        {
          destination: "margin.js",
          format: "jsPrefixFormatter",
          filter: (token) => {
            return (
              token.filePath === "src/tokens/margin.tokens.json" &&
              includes(["m"], token.attributes.category)
            );
          },
        },
        {
          destination: "margin.d.ts",
          format: "jsPrefixFormatterTypes",
          filter: (token) => {
            return (
              token.filePath === "src/tokens/margin.tokens.json" &&
              includes(["m"], token.attributes.category)
            );
          },
        },
        {
          destination: "padding.js",
          format: "jsPrefixFormatter",
          filter: (token) => {
            return (
              token.filePath === "src/tokens/padding.tokens.json" &&
              includes(["p"], token.attributes.category)
            );
          },
        },
        {
          destination: "padding.d.ts",
          format: "jsPrefixFormatterTypes",
          filter: (token) => {
            return (
              token.filePath === "src/tokens/padding.tokens.json" &&
              includes(["p"], token.attributes.category)
            );
          },
        },
        {
          destination: "z-index.js",
          format: "javascript/es6",
          filter: {
            attributes: {
              category: "z-index",
            },
          },
        },
        {
          destination: "z-index.d.ts",
          format: "typescript/es6-declarations",
          filter: {
            attributes: {
              category: "z-index",
            },
          },
        },
      ],
    },
  },
};
