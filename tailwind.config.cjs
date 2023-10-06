import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "media",
	theme: {
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: [...fontFamily.sans],
				serif: [...fontFamily.serif],
			},
			transitionProperty: {
				height: "height",
			},
			typography: (theme) => ({
				blog: {
					css: {
						"--tw-prose-body": "text-foreground",
						"--tw-prose-headings": "text-foreground",
						"--tw-prose-links": "text-foreground",
						"--tw-prose-bold": "text-foreground",
						"--tw-prose-bullets": "text-foreground",
						"--tw-prose-quotes": "text-accent",
						"--tw-prose-code": "text-foreground",
						"--tw-prose-hr": "0.5px dashed hsl(var(--border))",
						"--tw-prose-th-borders": "border-border",
					},
				},
				DEFAULT: {
					css: {
						a: {
							"@apply themed-link no-underline": "",
						},
						"h1 a": {
							"@apply bg-none hover:bg-none": "",
						},
						"h2 a": {
							"@apply bg-none hover:bg-none": "",
						},
						"h3 a": {
							"@apply bg-none hover:bg-none": "",
						},
						"h4 a": {
							"@apply bg-none hover:bg-none": "",
						},
						"h5 a": {
							"@apply bg-none hover:bg-none": "",
						},
						strong: {
							fontWeight: "700",
						},
						code: {
							border: "1px dotted hsl(var(--border))",
							borderRadius: "2px",
							"@apply font-sans": "",
						},
						blockquote: {
							borderLeftWidth: "none",
						},
						hr: {
							borderTopStyle: "dashed",
						},
						thead: {
							borderBottomWidth: "none",
						},
						"thead th": {
							fontWeight: "700",
							borderBottom: "1px dashed hsl(var(--border))",
						},
						"tbody tr": {
							borderBottomWidth: "none",
						},
						tfoot: {
							borderTop: "1px dashed hsl(var(--border))",
						},
					},
				},
				sm: {
					css: {
						code: {
							fontSize: theme("fontSize.sm")[0],
							fontWeight: "400",
						},
					},
				},
			}),
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		plugin(function ({ addComponents }) {
			addComponents({
				".themed-link": {
					"@apply bg-[size:100%_6px] bg-bottom font-medium bg-repeat-x": {},
					backgroundImage:
						"linear-gradient(transparent,transparent 5px,hsl(var(--secondary-foreground)) 5px,hsl(var(--secondary-foreground)))",
					"&:hover": {
						backgroundImage:
							"linear-gradient(transparent,transparent 4px,hsl(var(--primary)) 4px,hsl(var(--primary)))",
					},
				},
				".themed-title": {
					"@apply text-2xl font-semibold text-foreground": {},
				},
			});
		}),
	],
};
