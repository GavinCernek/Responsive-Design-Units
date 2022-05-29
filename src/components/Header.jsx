import FontSlider from './FontSlider';

const Header = () => {
	return (
		<header className="rd-header">
			<p className="rd-header__title">Responsive Design</p>
			<div className="rd-header__slider">
				<FontSlider />
			</div>
		</header>
	);
};

export default Header;
