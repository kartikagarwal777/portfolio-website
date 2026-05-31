import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: ["eslint.config.mjs", "scripts/**"],
  },
  {
    rules: {
      "react/display-name": "off",
      "react/no-unescaped-entities": "off",
    },
    settings: {
      react: {
        version: "19.2.4",
      },
    },
  },
];

export default eslintConfig;
