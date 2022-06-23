import SEO from '../components/SEO';
import Accordion from '../components/Accordion';

const SVGSizing = () => {
	return (
		<article className="rd-svg-sizing">
			<SEO
				title="SVG Sizing"
				description="See how SVG icons scale along with text when the font is changed."
			/>

			<h1>SVG Sizing</h1>
			<Accordion title={<h2>px (32px x 32px)</h2>}>
				<div className="rd-svg-sizing__icon">
					<svg className="rd-icon" aria-hidden={true} focusable={false}>
						<use xlinkHref="#icon-css"></use>
					</svg>
					<p className="rd-svg-sizing__text">Lorem ipsum dolor</p>
				</div>
			</Accordion>
			<Accordion title={<h2>em (2em x 2em)</h2>}>
				<div className="rd-svg-sizing__icon rd-svg-sizing__icon--em">
					<svg className="rd-icon" aria-hidden={true} focusable={false}>
						<use xlinkHref="#icon-css"></use>
					</svg>
					<p className="rd-svg-sizing__text">Lorem ipsum dolor</p>
				</div>
			</Accordion>
			<Accordion title={<h2>rem (2rem x 2rem)</h2>}>
				<div className="rd-svg-sizing__icon rd-svg-sizing__icon--rem">
					<svg className="rd-icon" aria-hidden={true} focusable={false}>
						<use xlinkHref="#icon-css"></use>
					</svg>
					<p className="rd-svg-sizing__text">Lorem ipsum dolor</p>
				</div>
			</Accordion>
			<Accordion title={<h2>% (2% x 2%)</h2>}>
				<div className="rd-svg-sizing__icon rd-svg-sizing__icon--percent">
					<svg className="rd-icon" aria-hidden={true} focusable={false}>
						<use xlinkHref="#icon-css"></use>
					</svg>
					<p className="rd-svg-sizing__text">Lorem ipsum dolor</p>
				</div>
			</Accordion>
			<Accordion title={<h2>vw (2vw x 2vw)</h2>}>
				<div className="rd-svg-sizing__icon rd-svg-sizing__icon--vw">
					<svg className="rd-icon" aria-hidden={true} focusable={false}>
						<use xlinkHref="#icon-css"></use>
					</svg>
					<p className="rd-svg-sizing__text">Lorem ipsum dolor</p>
				</div>
			</Accordion>
		</article>
	);
};

export default SVGSizing;
