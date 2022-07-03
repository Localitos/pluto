export default function (plop) {
  plop.setGenerator("package", {
    description: "this is a design system package",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Package name:",
      },
    ],
    actions: [
      {
        type: "add",
        data: { rootPath: { rootPath: process.cwd() } },
        path: "./packages/{{pascalCase name}}/src/index.ts",
        templateFile: "./template/src/index.ts.hbs",
      },
      {
        type: "add",
        data: { rootPath: { rootPath: process.cwd() } },
        path: "./packages/{{pascalCase name}}/src/{{pascalCase name}}.tsx",
        templateFile: "./template/src/Component.tsx.hbs",
      },
      {
        type: "add",
        data: { rootPath: { rootPath: process.cwd() } },
        path: "./packages/{{pascalCase name}}/src/{{pascalCase name}}.test.tsx",
        templateFile: "./template/src/Component.test.tsx.hbs",
      },
      {
        type: "add",
        data: { rootPath: { rootPath: process.cwd() } },
        path: "./packages/{{pascalCase name}}/src/{{pascalCase name}}.stories.tsx",
        templateFile: "./template/src/Component.stories.tsx.hbs",
      },
      {
        type: "add",
        data: { rootPath: { rootPath: process.cwd() } },
        path: "./packages/{{pascalCase name}}/package.json",
        templateFile: "./template/package.json.hbs",
      },
      {
        type: "add",
        data: { rootPath: { rootPath: process.cwd() } },
        path: "./packages/{{pascalCase name}}/README.md",
        templateFile: "./template/README.md.hbs",
      },
      {
        type: "add",
        data: { rootPath: { rootPath: process.cwd() } },
        path: "./packages/{{pascalCase name}}/jest.config.js",
        templateFile: "./template/jest.config.js",
      },
      {
        type: "add",
        data: { rootPath: { rootPath: process.cwd() } },
        path: "./packages/{{pascalCase name}}/rollup.config.js",
        templateFile: "./template/rollup.config.js",
      },
      {
        type: "add",
        data: { rootPath: { rootPath: process.cwd() } },
        path: "./packages/{{pascalCase name}}/tsconfig.json",
        templateFile: "./template/tsconfig.json",
      },
      {
        type: "add",
        data: { rootPath: { rootPath: process.cwd() } },
        path: "./packages/{{pascalCase name}}/tsconfig.lib.json",
        templateFile: "./template/tsconfig.lib.json",
      },
      {
        type: "add",
        data: { rootPath: { rootPath: process.cwd() } },
        path: "./packages/{{pascalCase name}}/tsconfig.test.json",
        templateFile: "./template/tsconfig.test.json",
      },
      {
        type: "add",
        data: { rootPath: { rootPath: process.cwd() } },
        path: "./packages/{{pascalCase name}}/.eslintrc.json",
        templateFile: "./template/.eslintrc.json",
      },
      {
        type: "add",
        data: { rootPath: { rootPath: process.cwd() } },
        path: "./packages/{{pascalCase name}}/.prettierrc.json",
        templateFile: "./template/.prettierrc.json",
      },
    ],
  });
};
