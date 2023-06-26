export const SOCIAL_LINKS = {
	github: "https://github.com/SeanCassiere",
	twitter: "https://twitter.com/SeanCassiere",
	email: "me@seancassiere.com",
};

export const PROJECTS: { name: string; link: string; description: string }[] = [
	{
		name: "ping-rents",
		link: SOCIAL_LINKS.github + "/ping-rents",
		description: "Basic car rental management mobile app.",
	},
	{
		name: "seancassiere.com",
		link: SOCIAL_LINKS.github + "/seancassiere.com",
		description: "A mundane website built with Astro.",
	},
	{
		name: "nv-reservation-cc-update",
		link: SOCIAL_LINKS.github + "/nv-reservation-cc-update",
		description: "Add customer credit card details into RENTALL.",
	},
	{
		name: "simple-logging-server",
		link: SOCIAL_LINKS.github + "/simple-logging-server",
		description: "An up and running fastify server for storing my app logs.",
	},
];
