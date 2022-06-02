import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LeftChevronSVG from './svg/LeftChevronSVG';

const navigationHiddenClass = 'rd-navigation--hidden';
const navigationListHiddenClass = 'rd-navigation__list--hidden';

const Navigation = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const navigationRef = useRef(null);
	const navigationListRef = useRef(null);

	const handleTransitionEnd = (e) => {
		if (isCollapsed && e.target === e.currentTarget && e.propertyName === 'transform') {
			if (navigationRef.current) {
				navigationRef.current.classList.add(navigationHiddenClass);
			}

			if (navigationListRef.current) {
				navigationListRef.current.classList.add(navigationListHiddenClass);
			}
		}
	};

	useEffect(() => {
		if (!isCollapsed && navigationRef.current && navigationListRef.current) {
			navigationRef.current.classList.remove(navigationHiddenClass);
			navigationListRef.current.classList.remove(navigationListHiddenClass);
		}
	}, [isCollapsed]);

	return (
		<div
			ref={navigationRef}
			className={isCollapsed ? 'rd-navigation rd-navigation--collapsed' : 'rd-navigation'}
			onTransitionEnd={handleTransitionEnd}
		>
			<nav className="rd-navigation__nav">
				<button
					type="button"
					className={
						isCollapsed
							? 'rd-navigation__collapse rd-navigation__collapse--collapsed'
							: 'rd-navigation__collapse'
					}
					aria-expanded={isCollapsed}
					onClick={() => setIsCollapsed(!isCollapsed)}
				>
					<span className="rd-visually-hidden">Toggle Navigation</span>
					<span className="rd-navigation__icon-wrapper">
						<LeftChevronSVG />
					</span>
				</button>
				<ul ref={navigationListRef} className="rd-navigation__list">
					<li className="rd-navigation__item">
						<NavLink
							to="/test"
							className={({ isActive }) =>
								isActive ? 'rd-navigation__link rd-navigation__link--active' : 'rd-navigation__link'
							}
						>
							Test
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
