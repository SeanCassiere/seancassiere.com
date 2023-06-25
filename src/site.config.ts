interface SiteConfig {
	title: string;
	author: string;
	description: string;
	lang: string;
	ogLocale: string;
	siteName: string;
	themeColorLight: string;
	themeColorDark: string;
	date: {
		locale: string | string[] | undefined;
		options: Intl.DateTimeFormatOptions;
	};
}

export const siteConfig: SiteConfig = {
	author: "Sean Cassiere",
	siteName: "SeanCassiere",
	title: "SeanCassiere",
	description: "my personal website",
	lang: "en-GB",
	ogLocale: "en_GB",
	themeColorLight: "#fafafa",
	themeColorDark: "#1d1f21",
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};
