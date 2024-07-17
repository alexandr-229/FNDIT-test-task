export const formatDate = (date: string) => {
	if (!date) {
		return '';
	}

	return Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
	}).format(new Date(date))
};
