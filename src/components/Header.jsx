import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import FontSlider from './FontSlider';
import SunSVG from './svg/SunSVG';
import MoonSVG from './svg/MoonSVG';

const Header = () => {
	const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);
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
				onClick={() => setIsDarkMode(!isDarkMode)}
			>
				<span>
					<SunSVG />
				</span>
				<span>
					<MoonSVG />
				</span>
			</button>
		</header>
	);
};

export default Header;
