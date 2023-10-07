interface SiteConfig {
	short_url: string;
	title: string;
	author: string;
	description: string;
	lang: string;
	ogLocale: string;
	siteName: string;
	date: {
		locale: string | string[] | undefined;
		options: Intl.DateTimeFormatOptions;
	};
}

export const siteConfig: SiteConfig = {
	short_url: "seancassiere.com",
	author: "Sean Cassiere",
	siteName: "SeanCassiere",
	title: "SeanCassiere",
	description: "my personal website",
	lang: "en-GB",
	ogLocale: "en_GB",
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};
