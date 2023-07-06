module.exports = {
  verbose: true,
  roots: ["<rootDir>/packages"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.[j]sx?$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["<rootDir>/packages/(?:.+?)/dist/"],
  cacheDirectory: ".jest-cache",
  coverageDirectory: ".jest-coverage",
  coveragePathIgnorePatterns: [
    "<rootDir>/packages/(?:.+?)/dist/",
    "<rootDir>/packages/(?:.+?)/*.stories.tsx",
  ],
  coverageReporters: ["html", "text"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    ["\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$"]:
      "<rootDir>/.jest/file-mock.ts",
  },
  setupFilesAfterEnv: ["<rootDir>/.jest/jest-setup.ts"],
  transformIgnorePatterns: ["node_modules/"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
};
