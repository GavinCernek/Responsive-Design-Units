import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { getUserPreferedTheme } from '../utils/getUserPreferedTheme';
import FontSlider from './FontSlider';

const root = document.querySelector('html');

const mql = window.matchMedia('(min-width: 48em)');

const Header = () => {
	const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
	const [isTablet, setIsTablet] = useState(mql.matches);
	const [isDarkMode, setIsDarkMode] = useState(
		getUserPreferedTheme() === 'dark-mode' ? true : false
	);
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

	const handleChange = () => {
		if (mql.matches) {
			setIsTablet(true);
		} else {
			setIsTablet(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', debouncedScroll);
		mql.addEventListener('change', handleChange);

		return () => {
			window.removeEventListener('scroll', debouncedScroll);
			mql.removeEventListener('change', handleChange);
		};
	}, []);

	const mobileHeader = (
		<>
			<div className="rd-header__wrapper">
				<Link to="/" className="rd-header__link" aria-label="Home">
					<span className="rd-header__span">Responsive Design Units</span>
				</Link>
				<button
					type="button"
					className={
						isDarkMode === false ? 'rd-header__switch' : 'rd-header__switch rd-header__switch--dark'
					}
					onClick={handleTheme}
				>
					<span className="rd-visually-hidden">Switch Between Light and Dark Mode</span>
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
			</div>

			<div className="rd-header__slider">
				<FontSlider />
			</div>
		</>
	);

	const desktopHeader = (
		<>
			<Link to="/" className="rd-header__link" aria-label="Home">
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
				<span className="rd-visually-hidden">Switch Between Light and Dark Mode</span>
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
		</>
	);

	return (
		<header
			ref={headerRef}
			className={isHeaderScrolled ? 'rd-header rd-header--scrolled' : 'rd-header'}
		>
			{isTablet ? desktopHeader : mobileHeader}
		</header>
	);
};

export default Header;
