export const SOCIAL_LINKS = {
	github: "https://github.com/SeanCassiere",
	twitter: "https://twitter.com/SeanCassiere",
	email: "me@seancassiere.com",
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
		name: "Drizzle ORM",
		link: "https://orm.drizzle.team",
		tagLine: "Typescript ORM that let's you love SQL.",
	},
	{
		name: "tRPC",
		link: "https://trpc.io",
		tagLine: "End-to-end typesafe APIs made easy.",
	},
	{
		name: "Tanstack Query",
		link: "https://tanstack.com/query",
		tagLine: "Powerful asynchronous state management for React.",
	},
	{
		name: "TailwindCSS",
		link: "https://tailwindcss.com",
		tagLine: "Rapidly build modern websites without ever leaving your HTML.",
	},
	{
		name: "React",
		link: "https://react.dev",
		tagLine: "The library for web and native user interfaces.",
	},
];
