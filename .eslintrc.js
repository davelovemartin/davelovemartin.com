module.exports = {
  extends: ["plugin:astro/recommended"],
  overrides: [
    {
      files: ["*.astro", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".astro"], // This is a required setting in `@typescript-eslint/parser` v5.
        sourceType: "module",
      },
      overrides: [
        {
          files: ["*.astro"],
          parser: "astro-eslint-parser",
          parserOptions: {
            parser: "@typescript-eslint/parser",
            ecmaVersion: "latest",
            sourceType: "module",
          },
          rules: {},
        },
      ],
    },
  ],
};
