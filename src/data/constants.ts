export type MyProject = {
	name: string;
	link: string;
	description: string;
	role: string;
};

export const MY_PROJECTS: Array<MyProject> = [
	{
		name: "TanStack Router",
		role: "Maintainer",
		link: "https://github.com/TanStack/router",
		description:
			"Fully typesafe Router for React w/ built-in caching, 1st class search-param APIs, client-side cache integration and isomorphic rendering.",
	},
	{
		name: "nv-rental-clone",
		role: "Creator and Maintainer",
		link: "https://github.com/SeanCassiere/nv-rental-clone",
		description:
			"A basic clone of Navotar built with Tailwind, Tanstack Router, and TanStack Query",
	},
	{
		name: "simple-logging-server",
		role: "Creator and Maintainer",
		link: "https://github.com/SeanCassiere/simple-logging-server",
		description: "An up and running fastify server for storing my app logs.",
	},
];

export type MyTechnology = { name: string; link: string; tagLine: string };

export const MY_TECHNOLOGIES: Array<MyTechnology> = [
	{
		name: "shadcn/ui",
		link: "https://ui.shadcn.com",
		tagLine:
			"Beautifully designed components that you can copy and paste into your apps.",
	},
	{
		name: "Tanstack Start",
		link: "https://tanstack.com/start",
		tagLine: "Full-stack React framework powered by TanStack Router.",
	},
	{
		name: "Tanstack Query",
		link: "https://tanstack.com/query",
		tagLine: "Powerful asynchronous state management for React.",
	},
	{
		name: "Drizzle ORM",
		link: "https://orm.drizzle.team",
		tagLine: "Typescript ORM that let's you love SQL.",
	},
	{
		name: "TailwindCSS",
		link: "https://tailwindcss.com",
		tagLine: "Rapidly build modern websites without ever leaving your HTML.",
	},
];

export type MyLink = {
	name: string;
	href: string;
	target?: "_blank" | undefined;
};

export const MY_LINKS: Array<MyLink> = [
	{
		name: "Email",
		href: "mailto:me@seancassiere.com",
		target: "_blank",
	},
	{
		name: "Twitter/X",
		href: "https://twitter.com/SeanCassiere",
		target: "_blank",
	},
	{
		name: "GitHub",
		href: "https://github.com/SeanCassiere",
		target: "_blank",
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/seancassiere/",
		target: "_blank",
	},
	{
		name: "RSS",
		href: "/rss.xml",
	},
];
