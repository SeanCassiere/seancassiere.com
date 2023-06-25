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
