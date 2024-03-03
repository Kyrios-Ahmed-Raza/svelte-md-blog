type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	// Safari is mad about dashes in the date
	const formatter = new Intl.DateTimeFormat(locales, {
		dateStyle
	});
	return formatter.format(new Date(date));
}
