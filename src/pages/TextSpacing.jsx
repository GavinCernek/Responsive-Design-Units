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
				<Accordion title={<h2>Horizontal Margins (16px, 1em, 1rem, 5%)</h2>}>
					<Accordion title={<h3>px</h3>}>
						<div className="rd-row">
							<p>Paragraph One</p>
							<p>Paragraph Two</p>
							<p>Paragraph Three</p>
							<p>Paragraph Four</p>
							<p>Paragraph Five</p>
						</div>
					</Accordion>

					<Accordion title={<h3>ems</h3>}>
						<div className="rd-em-wrapper__outer">
							<div className="rd-em-wrapper__inner">
								<div className="rd-row rd-row--ems">
									<p>Paragraph One</p>
									<p>Paragraph Two</p>
									<p>Paragraph Three</p>
									<p>Paragraph Four</p>
									<p>Paragraph Five</p>
								</div>
							</div>
						</div>
					</Accordion>

					<Accordion title={<h3>rems</h3>}>
						<div className="rd-row rd-row--rems">
							<p>Paragraph One</p>
							<p>Paragraph Two</p>
							<p>Paragraph Three</p>
							<p>Paragraph Four</p>
							<p>Paragraph Five</p>
						</div>
					</Accordion>

					<Accordion title={<h3>%</h3>}>
						<div className="rd-row rd-row--percent">
							<p>Paragraph One</p>
							<p>Paragraph Two</p>
							<p>Paragraph Three</p>
							<p>Paragraph Four</p>
							<p>Paragraph Five</p>
						</div>
					</Accordion>
				</Accordion>
				<Accordion title={<h2>Vertical Margins (16px, 1em, 1rem, 5%)</h2>}>
					<Accordion title={<h3>px</h3>}>
						<div className="rd-col">
							<p>Paragraph One</p>
							<p>Paragraph Two</p>
							<p>Paragraph Three</p>
							<p>Paragraph Four</p>
							<p>Paragraph Five</p>
						</div>
					</Accordion>
					<Accordion title={<h3>ems</h3>}>
						<div className="rd-em-wrapper__outer">
							<div className="rd-em-wrapper__inner">
								<div className="rd-col rd-col--ems">
									<p>Paragraph One</p>
									<p>Paragraph Two</p>
									<p>Paragraph Three</p>
									<p>Paragraph Four</p>
									<p>Paragraph Five</p>
								</div>
							</div>
						</div>
					</Accordion>
					<Accordion title={<h3>rems</h3>}>
						<div className="rd-col rd-col--rems">
							<p>Paragraph One</p>
							<p>Paragraph Two</p>
							<p>Paragraph Three</p>
							<p>Paragraph Four</p>
							<p>Paragraph Five</p>
						</div>
					</Accordion>
					<Accordion title={<h3>%</h3>}>
						<div className="rd-col rd-col--percent">
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
