import { useState } from 'react';

const head = document.querySelector('head');

const style = document.createElement('style');
style.setAttribute('type', 'text/css');
head.appendChild(style);

const CreateYourOwn = () => {
	const [html, setHtml] = useState('');
	const [css, setCss] = useState('');

	style.innerHTML = css;

	return (
		<article className="rd-create-your-own">
			<h1>Create Your Own</h1>
			<p>
				Use the HTML and CSS editors to add your own markup and styles to see how their layout is
				effected!
			</p>
			<p>
				Currently, you cannot use CSS preprocessors like SASS, it must be raw CSS. If your code
				relies on preprocessors, copy and paste the output, or use a free online convertor to
				compile it to raw CSS.
			</p>
			<div className="rd-create-your-own__editors">
				<div className="rd-code-editor">
					<h2 className="rd-code-editor__label">HTML</h2>
					<textarea
						className="rd-code-editor__textarea"
						value={html}
						onChange={(e) => setHtml(e.target.value)}
					/>
				</div>
				<div className="rd-code-editor">
					<h2 className="rd-code-editor__label">CSS</h2>
					<textarea
						className="rd-code-editor__textarea"
						value={css}
						onChange={(e) => setCss(e.target.value)}
					/>
				</div>
			</div>
			<div className="rd-create-your-own__output" dangerouslySetInnerHTML={{ __html: html }} />
		</article>
	);
};

export default CreateYourOwn;
