import { siteConfig } from "@/site-config";

/**
 *
 * @description calculates age based on date of birth
 * @param {String} dateOfBirth date of birth in format YYYY-MM-DD
 * @returns {Number} age
 * @example getAge('1990-01-01') // 31
 */
export const getAge = (dateOfBirth: string): number => {
	const today = new Date();
	const birthDate = new Date(dateOfBirth);
	let age = today.getFullYear() - birthDate.getFullYear();
	const month = today.getMonth() - birthDate.getMonth();
	if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()))
		age -= 1;
	return age;
};

const dateFormat = new Intl.DateTimeFormat(
	siteConfig.date.locale,
	siteConfig.date.options
);

export function getFormattedDate(
	date: string | number | Date,
	options?: Intl.DateTimeFormatOptions
) {
	if (typeof options !== "undefined") {
		return new Date(date).toLocaleDateString(siteConfig.date.locale, {
			...(siteConfig.date.options as Intl.DateTimeFormatOptions),
			...options,
		});
	}

	return dateFormat.format(new Date(date));
}
