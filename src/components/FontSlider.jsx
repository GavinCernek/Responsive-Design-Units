import { useState } from 'react';
import ReactSlider from 'react-slider';

const root = document.querySelector('html');

const FontSlider = () => {
	const [fontSize, setFontSize] = useState(16);

	const handleChange = (value) => {
		if (root) {
			root.style.fontSize = `${value}px`;
			setFontSize(value);
		}
	};

	return (
		<div className="rd-font-slider">
			<span className="rd-font-slider__size">{fontSize}px</span>
			<ReactSlider
				min={9}
				max={72}
				defaultValue={fontSize}
				className="rd-font-slider__slider"
				thumbClassName="rd-font-slider__thumb"
				trackClassName="rd-font-slider__track"
				renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
				ariaLabel="Adjust font size"
				onChange={handleChange}
			/>
		</div>
	);
};

export default FontSlider;
