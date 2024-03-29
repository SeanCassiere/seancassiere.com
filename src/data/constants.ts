export const SOCIAL_LINKS = {
	github: "https://github.com/SeanCassiere",
	twitter: "https://twitter.com/SeanCassiere",
	linkedin: "https://www.linkedin.com/in/seancassiere/",
	email: "me@seancassiere.com",
	rss: "/rss.xml",
	sitemap: "/sitemap-0.xml",
};

export type Project = { name: string; link: string; description: string };

export const PROJECTS: Project[] = [
	{
		name: "ping-rents",
		link: SOCIAL_LINKS.github + "/ping-rents",
		description: "A basic react-native car rental management mobile app.",
	},
	{
		name: "seancassiere.com",
		link: SOCIAL_LINKS.github + "/seancassiere.com",
		description: "A mundane website built with Astro.",
	},
	{
		name: "nv-reservation-cc-update",
		link: SOCIAL_LINKS.github + "/nv-reservation-cc-update",
		description:
			"Add customer credit card details into RENTALL using this react app.",
	},
	{
		name: "simple-logging-server",
		link: SOCIAL_LINKS.github + "/simple-logging-server",
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
		name: "Tanstack Router",
		link: "https://tanstack.com/router",
		tagLine: "Modern and scalable routing for React applications.",
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
