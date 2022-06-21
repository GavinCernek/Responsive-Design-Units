export const getUserPreferedTheme = () => {
	const preferedTheme = localStorage.getItem('theme-preference');
	const mql = window.matchMedia('(prefers-color-scheme: dark)');

	if (preferedTheme !== null) {
		return preferedTheme;
	} else {
		if (mql.matches) {
			return 'dark-mode';
		}
	}

	return 'light-mode';
};
