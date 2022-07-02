export default function (plop) {
  plop.setGenerator("package", {
    description: "this is a design system package",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "package name please",
      },
    ],
    actions: [
      {
        type: "add",
        data: { rootPath: {rootPath: process.cwd()} },
        path: "./packages/{{name}}/src/index.ts",
        templateFile: "./template/src/index.ts.hbs",
      },
      {
        type: "add",
        data: { rootPath: {rootPath: process.cwd()} },
        path: "./packages/{{name}}/src/{{pascalCase name}}.tsx",
        templateFile: "./template/src/Component.tsx.hbs",
      },
      {
        type: "add",
        data: { rootPath: {rootPath: process.cwd()} },
        path: "./packages/{{name}}/src/{{pascalCase name}}.spec.tsx",
        templateFile: "./template/src/Component.spec.tsx.hbs",
      },
      {
        type: "add",
        data: { rootPath: {rootPath: process.cwd()} },
        path: "./packages/{{name}}/src/{{pascalCase name}}.stories.tsx",
        templateFile: "./template/src/Component.stories.tsx.hbs",
      },
      {
        type: "add",
        data: { rootPath: {rootPath: process.cwd()} },
        path: "./packages/{{name}}/package.json",
        templateFile: "./template/package.json.hbs",
      },
      {
        type: "add",
        data: { rootPath: {rootPath: process.cwd()} },
        path: "./packages/{{name}}/README.md",
        templateFile: "./template/README.md.hbs",
      },
      {
        type: "add",
        data: { rootPath: {rootPath: process.cwd()} },
        path: "./packages/{{name}}/jest.config.js",
        templateFile: "./template/jest.config.js",
      },
      {
        type: "add",
        data: { rootPath: {rootPath: process.cwd()} },
        path: "./packages/{{name}}/rollup.config.js",
        templateFile: "./template/rollup.config.js",
      },
      {
        type: "add",
        data: { rootPath: {rootPath: process.cwd()} },
        path: "./packages/{{name}}/tsconfig.json",
        templateFile: "./template/tsconfig.json",
      },
      {
        type: "add",
        data: { rootPath: {rootPath: process.cwd()} },
        path: "./packages/{{name}}/tsconfig.lib.json",
        templateFile: "./template/tsconfig.lib.json",
      },
      {
        type: "add",
        data: { rootPath: {rootPath: process.cwd()} },
        path: "./packages/{{name}}/tsconfig.spec.json",
        templateFile: "./template/tsconfig.spec.json",
      },
    ],
  });
}
