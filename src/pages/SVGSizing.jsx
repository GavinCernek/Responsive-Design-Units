import Accordion from '../components/Accordion';

const SVGSizing = () => {
	return (
		<article className="rd-svg-sizing">
			<h1>SVG Sizing</h1>
			<Accordion title={<h2>px (300px x 300px)</h2>}>
				<div className="rd-svg-sizing__icon">
					<svg className="rd-icon" aria-hidden={true} focusable={false}>
						<use xlinkHref="#icon-css"></use>
					</svg>
				</div>
			</Accordion>
			<Accordion title={<h2>em (18.75em x 18.75em)</h2>}>
				<div className="rd-svg-sizing__icon rd-svg-sizing__icon--em">
					<svg className="rd-icon" aria-hidden={true} focusable={false}>
						<use xlinkHref="#icon-css"></use>
					</svg>
				</div>
			</Accordion>
			<Accordion title={<h2>rem (18.75rem x 18.75rem)</h2>}>
				<div className="rd-svg-sizing__icon rd-svg-sizing__icon--rem">
					<svg className="rd-icon" aria-hidden={true} focusable={false}>
						<use xlinkHref="#icon-css"></use>
					</svg>
				</div>
			</Accordion>
			<Accordion title={<h2>% (50% x 50%)</h2>}>
				<div className="rd-svg-sizing__icon rd-svg-sizing__icon--percent">
					<svg className="rd-icon" aria-hidden={true} focusable={false}>
						<use xlinkHref="#icon-css"></use>
					</svg>
				</div>
			</Accordion>
			<Accordion title={<h2>vw (50vw x 50vw)</h2>}>
				<div className="rd-svg-sizing__icon rd-svg-sizing__icon--vw">
					<svg className="rd-icon" aria-hidden={true} focusable={false}>
						<use xlinkHref="#icon-css"></use>
					</svg>
				</div>
			</Accordion>
		</article>
	);
};

export default SVGSizing;
