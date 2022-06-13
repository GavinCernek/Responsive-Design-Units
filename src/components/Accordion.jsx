import { useState } from 'react';
import DownChevronSVG from './svg/DownChevronSVG';

const Accordion = ({ title, children }) => {
	const [isExpanded, setIsExpanded] = useState(true);

	return (
		<div className={isExpanded ? 'rd-accordion rd-accordion--expanded' : 'rd-accordion'}>
			<div className="rd-accordion__header">
				{title}
				<button
					type="button"
					className="rd-accordion__button"
					aria-expanded={isExpanded}
					onClick={() => setIsExpanded(!isExpanded)}
				>
					<span className="rd-visually-hidden">Toggle content</span>
					<DownChevronSVG />
				</button>
			</div>
			<div className="rd-accordion__body">{children}</div>
		</div>
	);
};

export default Accordion;
