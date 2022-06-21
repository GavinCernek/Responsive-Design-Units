import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { usePreferedTheme } from '../hooks/usePreferedTheme';
import FontSlider from './FontSlider';

const root = document.querySelector('html');

const Header = () => {
	const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(usePreferedTheme() === 'dark-mode' ? true : false);
	const headerRef = useRef(null);

	const headerScrolled = () => {
		if (headerRef === null) {
			return;
		}

		if (window.scrollY > headerRef.current.offsetHeight) {
			setIsHeaderScrolled(true);
		} else {
			setIsHeaderScrolled(false);
		}
	};

	const debouncedScroll = debounce(headerScrolled, 15);

	const handleTheme = () => {
		if (isDarkMode) {
			root.className = 'light-mode';
			localStorage.setItem('theme-preference', 'light-mode');
			setIsDarkMode(false);
			return;
		}

		root.className = 'dark-mode';
		localStorage.setItem('theme-preference', 'dark-mode');
		setIsDarkMode(true);
	};

	useEffect(() => {
		window.addEventListener('scroll', debouncedScroll);

		return () => window.removeEventListener('scroll', debouncedScroll);
	}, []);

	return (
		<header
			ref={headerRef}
			className={isHeaderScrolled ? 'rd-header rd-header--scrolled' : 'rd-header'}
		>
			<Link to="/" className="rd-header__link">
				<span className="rd-header__span">Responsive Design Units</span>
			</Link>
			<div className="rd-header__slider">
				<FontSlider />
			</div>
			<button
				type="button"
				className={
					isDarkMode === false ? 'rd-header__switch' : 'rd-header__switch rd-header__switch--dark'
				}
				onClick={handleTheme}
			>
				<span className="rd-visually-hidden">Toggle Theme</span>
				<span className="rd-header__switch-icon">
					<svg className="rd-icon" aria-hidden={true} focusable={false}>
						<use xlinkHref="#icon-sun"></use>
					</svg>
				</span>
				<span className="rd-header__switch-icon">
					<svg className="rd-icon" aria-hidden={true} focusable={false}>
						<use xlinkHref="#icon-moon"></use>
					</svg>
				</span>
			</button>
		</header>
	);
};

export default Header;
