import Accordion from '../components/Accordion';
import SEO from '../components/SEO';

const TextSpacing = () => {
	return (
		<article className="rd-text-spacing">
			<SEO
				title="Text Spacing"
				description="Demo for how margins scale responsively between text when the font is changed."
			/>

			<h1>Text Spacing</h1>
			<Accordion title={<h2>Horizontal Margins</h2>}>
				<Accordion title={<h3>px (16px)</h3>}>
					<div className="rd-text-spacing__row">
						<p>Paragraph One</p>
						<p>Paragraph Two</p>
						<p>Paragraph Three</p>
					</div>
				</Accordion>
				<Accordion title={<h3>em (1em)</h3>}>
					<div className="rd-text-spacing__row rd-text-spacing__row--em">
						<p>Paragraph One</p>
						<p>Paragraph Two</p>
						<p>Paragraph Three</p>
					</div>
				</Accordion>
				<Accordion title={<h3>rem (1rem)</h3>}>
					<div className="rd-text-spacing__row rd-text-spacing__row--rem">
						<p>Paragraph One</p>
						<p>Paragraph Two</p>
						<p>Paragraph Three</p>
					</div>
				</Accordion>
				<Accordion title={<h3>% (2.5%)</h3>}>
					<div className="rd-text-spacing__row rd-text-spacing__row--percent">
						<p>Paragraph One</p>
						<p>Paragraph Two</p>
						<p>Paragraph Three</p>
					</div>
				</Accordion>
				<Accordion title={<h3>vw (2vw)</h3>}>
					<div className="rd-text-spacing__row rd-text-spacing__row--vw">
						<p>Paragraph One</p>
						<p>Paragraph Two</p>
						<p>Paragraph Three</p>
					</div>
				</Accordion>
			</Accordion>
			<Accordion title={<h2>Vertical Margins</h2>}>
				<Accordion title={<h3>px (16px)</h3>}>
					<div className="rd-text-spacing__col">
						<p>Paragraph One</p>
						<p>Paragraph Two</p>
						<p>Paragraph Three</p>
					</div>
				</Accordion>
				<Accordion title={<h3>em (0.125em)</h3>}>
					<div className="rd-text-spacing__col rd-text-spacing__col--em">
						<p>Paragraph One</p>
						<p>Paragraph Two</p>
						<p>Paragraph Three</p>
					</div>
				</Accordion>
				<Accordion title={<h3>rem (0.125rem)</h3>}>
					<div className="rd-text-spacing__col rd-text-spacing__col--rem">
						<p>Paragraph One</p>
						<p>Paragraph Two</p>
						<p>Paragraph Three</p>
					</div>
				</Accordion>
				<Accordion title={<h3>% (2.5%)</h3>}>
					<div className="rd-text-spacing__col rd-text-spacing__col--percent">
						<p>Paragraph One</p>
						<p>Paragraph Two</p>
						<p>Paragraph Three</p>
					</div>
				</Accordion>
				<Accordion title={<h3>vw (2vw)</h3>}>
					<div className="rd-text-spacing__col rd-text-spacing__col--vw">
						<p>Paragraph One</p>
						<p>Paragraph Two</p>
						<p>Paragraph Three</p>
					</div>
				</Accordion>
			</Accordion>
		</article>
	);
};

export default TextSpacing;
