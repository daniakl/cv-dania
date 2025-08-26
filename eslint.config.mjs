import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable HTML entity warnings since Next.js handles escaping automatically
      "react/no-unescaped-entities": "off",
      // Alternative: if you want to be more specific, you can allow apostrophes
      // "react/no-unescaped-entities": ["error", { "forbid": [">", "}"] }]
    },
  },
];

export default eslintConfig;
