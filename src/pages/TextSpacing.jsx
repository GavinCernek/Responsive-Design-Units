import Accordion from '../components/Accordion';

const TextSpacing = () => {
	return (
		<article className="rd-text-spacing">
			<div className="rd-container">
				<h1>Text Spacing</h1>
				<p>Let's start off with something basic, but important.</p>
				<p>
					Setting margins on elements alters the spacing around them, pushing other elements farther
					away. It seems straightforward at first, but it's actually more complicated when you ask,
					"Should the spacing scale with the font size?".
				</p>
				<p>
					This demo aims to help answer that question by showing how spaced out text is effected
					from both a horizontal and vertical perspective.
				</p>
				<Accordion title={<h2>Horizontal Margins (16px, 1em, 1rem, 2.5%, 2vw)</h2>}>
					<Accordion title={<h3>px</h3>}>
						<div className="rd-text-spacing__row">
							<p>Paragraph One</p>
							<p>Paragraph Two</p>
							<p>Paragraph Three</p>
							<p>Paragraph Four</p>
							<p>Paragraph Five</p>
						</div>
					</Accordion>
					<Accordion title={<h3>ems</h3>}>
						<div className="rd-text-spacing__row rd-text-spacing__row--em">
							<p>Paragraph One</p>
							<p>Paragraph Two</p>
							<p>Paragraph Three</p>
							<p>Paragraph Four</p>
							<p>Paragraph Five</p>
						</div>
					</Accordion>
					<Accordion title={<h3>rems</h3>}>
						<div className="rd-text-spacing__row rd-text-spacing__row--rem">
							<p>Paragraph One</p>
							<p>Paragraph Two</p>
							<p>Paragraph Three</p>
							<p>Paragraph Four</p>
							<p>Paragraph Five</p>
						</div>
					</Accordion>
					<Accordion title={<h3>%</h3>}>
						<div className="rd-text-spacing__row rd-text-spacing__row--percent">
							<p>Paragraph One</p>
							<p>Paragraph Two</p>
							<p>Paragraph Three</p>
							<p>Paragraph Four</p>
							<p>Paragraph Five</p>
						</div>
					</Accordion>
					<Accordion title={<h3>vw</h3>}>
						<div className="rd-text-spacing__row rd-text-spacing__row--vw">
							<p>Paragraph One</p>
							<p>Paragraph Two</p>
							<p>Paragraph Three</p>
							<p>Paragraph Four</p>
							<p>Paragraph Five</p>
						</div>
					</Accordion>
				</Accordion>
				<Accordion title={<h2>Vertical Margins (16px, 1em, 1rem, 2.5%, 2vw)</h2>}>
					<Accordion title={<h3>px</h3>}>
						<div className="rd-text-spacing__col">
							<p>Paragraph One</p>
							<p>Paragraph Two</p>
							<p>Paragraph Three</p>
							<p>Paragraph Four</p>
							<p>Paragraph Five</p>
						</div>
					</Accordion>
					<Accordion title={<h3>ems</h3>}>
						<div className="rd-text-spacing__col rd-text-spacing__col--em">
							<p>Paragraph One</p>
							<p>Paragraph Two</p>
							<p>Paragraph Three</p>
							<p>Paragraph Four</p>
							<p>Paragraph Five</p>
						</div>
					</Accordion>
					<Accordion title={<h3>rems</h3>}>
						<div className="rd-text-spacing__col rd-text-spacing__col--rem">
							<p>Paragraph One</p>
							<p>Paragraph Two</p>
							<p>Paragraph Three</p>
							<p>Paragraph Four</p>
							<p>Paragraph Five</p>
						</div>
					</Accordion>
					<Accordion title={<h3>%</h3>}>
						<div className="rd-text-spacing__col rd-text-spacing__col--percent">
							<p>Paragraph One</p>
							<p>Paragraph Two</p>
							<p>Paragraph Three</p>
							<p>Paragraph Four</p>
							<p>Paragraph Five</p>
						</div>
					</Accordion>
					<Accordion title={<h3>vw</h3>}>
						<div className="rd-text-spacing__col rd-text-spacing__col--vw">
							<p>Paragraph One</p>
							<p>Paragraph Two</p>
							<p>Paragraph Three</p>
							<p>Paragraph Four</p>
							<p>Paragraph Five</p>
						</div>
					</Accordion>
				</Accordion>
			</div>
		</article>
	);
};

export default TextSpacing;
