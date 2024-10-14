import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import globals from "globals";
import tseslint from "typescript-eslint";

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
	{
		ignores: ["node_modules", ".astro/**", ".vscode/**", ".git/**", "dist/**"],
	},
	{
		files: ["**/*.{js,mjs,cjs,ts,astro}"],
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				astroHTML: true,
			},
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginAstro.configs["flat/recommended"],
	eslintConfigPrettier,
	{
		rules: {
			// https://typescript-eslint.io/rules/no-explicit-any/
			"@typescript-eslint/no-explicit-any": "off",

			// https://typescript-eslint.io/rules/no-unused-vars/
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					args: "all",
					argsIgnorePattern: "^_",
					caughtErrors: "all",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					ignoreRestSiblings: true,
				},
			],
		},
	},
];
