import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  // File patterns
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },

  // Global variables
  {
    languageOptions: { globals: globals.browser }
  },

  // Plugin configurations
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // Custom configurations
  {
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended"
    ],
    rules: {
      "@typescript-eslint/no-require-imports": "off"
    }
  }
];