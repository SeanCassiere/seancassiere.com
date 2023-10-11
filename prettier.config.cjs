/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */
/** @typedef {import("prettier-plugin-astro").PluginOptions} AstroConfig */
/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} SortImportsConfig */

/** @type { PrettierConfig  | TailwindConfig | AstroConfig | SortImportsConfig } */
const config = {
	printWidth: 80,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	useTabs: true,
	plugins: [
		require.resolve("prettier-plugin-astro"),
		require.resolve("@ianvs/prettier-plugin-sort-imports"),
		require.resolve("prettier-plugin-tailwindcss") /* Must come last */,
	],
	overrides: [
		{
			files: "**/*astro",
			options: {
				parser: "astro",
			},
		},
	],
	importOrder: [
		"^(astro/(.*)$)|^(astro$)|^(astro:(.*)$)",
		"<THIRD_PARTY_MODULES>",
		"",
		"^@/components/(.*)$",
		"",
		"^@/layouts/(.*)$",
		"",
		"^@/utils/(.*)$",
		"",
		"^@/(.*)$",
		"",
		"^~/",
		"^[../]",
		"^[./]",
	],
};

module.exports = config;
