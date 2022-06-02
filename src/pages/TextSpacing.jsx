const TextSpacing = () => {
	return (
		<div className="rd-text-spacing">
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
				<h2>Horizontal Margins (32px, 2em, 2rem)</h2>
				<h3>px</h3>
				<div className="rd-row">
					<p>Paragraph One</p>
					<p>Paragraph Two</p>
					<p>Paragraph Three</p>
					<p>Paragraph Four</p>
					<p>Paragraph Five</p>
				</div>
				<h3>ems</h3>
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
				<h3>rems</h3>
				<div className="rd-row rd-row--rems">
					<p>Paragraph One</p>
					<p>Paragraph Two</p>
					<p>Paragraph Three</p>
					<p>Paragraph Four</p>
					<p>Paragraph Five</p>
				</div>
				<h2>Vertical Margins (32px, 2em, 2rem)</h2>
				<h3>px</h3>
				<div className="rd-col">
					<p>Paragraph One</p>
					<p>Paragraph Two</p>
					<p>Paragraph Three</p>
					<p>Paragraph Four</p>
					<p>Paragraph Five</p>
				</div>
				<h3>ems</h3>
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
				<h3>rems</h3>
				<div className="rd-col rd-col--rems">
					<p>Paragraph One</p>
					<p>Paragraph Two</p>
					<p>Paragraph Three</p>
					<p>Paragraph Four</p>
					<p>Paragraph Five</p>
				</div>
			</div>
		</div>
	);
};

export default TextSpacing;
