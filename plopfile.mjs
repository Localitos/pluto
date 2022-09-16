export default function (plop) {
  plop.setGenerator("component", {
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What do you want to name this component?",
      },
      {
        type: "input",
        name: "description",
        message: "What is the description for this component?",
      },
      {
        type: "list",
        name: "category",
        message: "Component category:",
        choices: ["components", "layout", "primitives"],
      },
    ],
    actions: [
      {
        type: "add",
        data: { rootPath: { rootPath: process.cwd() } },
        path: "./packages/components/src/{{category}}/{{pascalCase name}}/index.ts",
        templateFile: "./template/index.ts.hbs",
      },
      {
        type: "add",
        data: { rootPath: { rootPath: process.cwd() } },
        path: "./packages/components/src/{{category}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "./template/Component.tsx.hbs",
      },
      {
        type: "add",
        data: { rootPath: { rootPath: process.cwd() } },
        path: "./packages/components/src/{{category}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "./template/Component.test.tsx.hbs",
      },
      {
        type: "add",
        data: { rootPath: { rootPath: process.cwd() } },
        path: "./packages/components/src/{{category}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "./template/Component.stories.tsx.hbs",
      },
    ],
  });
}
