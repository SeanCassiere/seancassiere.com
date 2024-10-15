/* eslint-disable @typescript-eslint/no-require-imports */
import { fontFamily } from "tailwindcss/defaultTheme";

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
			typography: () => ({
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
							textUnderlineOffset: "2px",
						},
						"h1 a": {
							backgroundImage: "none",
							textUnderlineOffset: "2px",
							textDecorationLine: "underline",
							textDecorationColor: "transparent",
							transitionProperty: "all",
							transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
							transitionDuration: "150ms",
							"&:hover": {
								backgroundImage: "none",
								textDecorationColor: "hsl(var(--foreground))",
							},
						},
						"h2 a": {
							backgroundImage: "none",
							textUnderlineOffset: "2px",
							textDecorationLine: "underline",
							textDecorationColor: "transparent",
							transitionProperty: "all",
							transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
							transitionDuration: "150ms",
							"&:hover": {
								backgroundImage: "none",
								textDecorationColor: "hsl(var(--foreground))",
							},
						},
						"h3 a": {
							backgroundImage: "none",
							textUnderlineOffset: "2px",
							textDecorationLine: "underline",
							textDecorationColor: "transparent",
							transitionProperty: "all",
							transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
							transitionDuration: "150ms",
							"&:hover": {
								backgroundImage: "none",
								textDecorationColor: "hsl(var(--foreground))",
							},
						},
						"h4 a": {
							backgroundImage: "none",
							textUnderlineOffset: "2px",
							textDecorationLine: "underline",
							textDecorationColor: "transparent",
							transitionProperty: "all",
							transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
							transitionDuration: "150ms",
							"&:hover": {
								backgroundImage: "none",
								textDecorationColor: "hsl(var(--foreground))",
							},
						},
						"h5 a": {
							backgroundImage: "none",
							textUnderlineOffset: "2px",
							textDecorationLine: "underline",
							textDecorationColor: "transparent",
							transitionProperty: "all",
							transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
							transitionDuration: "150ms",
							"&:hover": {
								backgroundImage: "none",
								textDecorationColor: "hsl(var(--foreground))",
							},
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
	],
};
