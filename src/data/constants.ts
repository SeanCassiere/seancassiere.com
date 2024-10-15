export const SOCIAL_LINKS = {
	github: "https://github.com/SeanCassiere",
	twitter: "https://twitter.com/SeanCassiere",
	linkedin: "https://www.linkedin.com/in/seancassiere/",
	email: "me@seancassiere.com",
	rss: "/rss.xml",
	sitemap: "/sitemap-0.xml",
};

export type Project = {
	name: string;
	link: string;
	description: string;
	role: string;
};

export const PROJECTS: Array<Project> = [
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

export type ExcitedTechnology = { name: string; link: string; tagLine: string };

export const EXCITED_TECHNOLOGIES: ExcitedTechnology[] = [
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
