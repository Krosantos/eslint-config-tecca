module.exports = {
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: { delimiter: "semi", requireLast: true },
        singleline: { delimiter: "semi", requireLast: false },
      },
    ],
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-unused-vars": ["error", { args: "after-used", ignoreRestSiblings: true, vars: "all" }],
  },
};
