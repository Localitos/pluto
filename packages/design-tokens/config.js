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
              token.filePath === "src/tokens/color.tokens.json" &&
              ["color", "bg"].includes(token.attributes.category)
            );
          },
        },
        {
          destination: "colors.d.ts",
          format: "typescript/es6-declarations",
          filter: (token) => {
            return (
              token.filePath === "src/tokens/color.tokens.json" &&
              ["color", "bg"].includes(token.attributes.category)
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
          filter: {
            attributes: {
              category: "font-size",
            },
          },
        },
        {
          destination: "font-size.d.ts",
          format: "typescript/es6-declarations",
          filter: {
            attributes: {
              category: "font-size",
            },
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
          format: "javascript/es6",
          filter: {
            attributes: {
              category: "line-height",
            },
          },
        },
        {
          destination: "line-height.d.ts",
          format: "typescript/es6-declarations",
          filter: {
            attributes: {
              category: "line-height",
            },
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
          format: "javascript/es6",
          filter: {
            attributes: {
              category: "space",
            },
          },
        },
        {
          destination: "space.d.ts",
          format: "typescript/es6-declarations",
          filter: {
            attributes: {
              category: "space",
            },
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
