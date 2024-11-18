import globals from "globals";
import pluginJs from "@eslint/js";
 
/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      ecmaVersion: `latest`,
      sourceType: `module`,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      "array-bracket-spacing": [ 2, `always` ],
      "no-const-assign": 2,
      "no-var": `error`,
      indent: [ 2, 2 ],
      quotes: [ 2, `backtick` ],
      eqeqeq: `error`,
    },
  },
  pluginJs.configs.recommended,
];