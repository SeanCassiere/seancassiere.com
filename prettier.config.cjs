/** @type {import("@types/prettier").Options} */
module.exports = {
	printWidth: 80,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	useTabs: true,
	plugins: [
		require.resolve("prettier-plugin-astro"),
		require.resolve("prettier-plugin-tailwindcss") /* Must come last */,
	],
	pluginSearchDirs: false,
	overrides: [
		{
			files: "**/*astro",
			options: {
				parser: "astro",
			},
		},
	],
};
