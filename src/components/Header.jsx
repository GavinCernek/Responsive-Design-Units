import { useState, useEffect, useRef } from 'react';
import debounce from 'lodash.debounce';
import FontSlider from './FontSlider';

const Header = () => {
	const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
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
			<p className="rd-header__title">Responsive Design</p>
			<div className="rd-header__slider">
				<FontSlider />
			</div>
		</header>
	);
};

export default Header;
