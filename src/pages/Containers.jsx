import Accordion from '../components/Accordion';

const Containers = () => {
	return (
		<article className="rd-containers">
			<h1>Containers</h1>
			<Accordion title={<h2>px (200px, 300px, 400px)</h2>}>
				<div className="rd-containers__container">
					<p className="rd-containers__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
						assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
						suscipit aspernatur ex saepe cumque nesciunt?
					</p>
				</div>
			</Accordion>
			<Accordion title={<h2>em (12.5em, 18.75em, 25em)</h2>}>
				<div className="rd-containers__container rd-containers__container--em">
					<p className="rd-containers__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
						assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
						suscipit aspernatur ex saepe cumque nesciunt?
					</p>
				</div>
			</Accordion>
			<Accordion title={<h2>rem (12.5rem, 18.75rem, 25rem)</h2>}>
				<div className="rd-containers__container rd-containers__container--rem">
					<p className="rd-containers__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
						assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
						suscipit aspernatur ex saepe cumque nesciunt?
					</p>
				</div>
			</Accordion>
			<Accordion title={<h2>% (50%)</h2>}>
				<div className="rd-containers__container rd-containers__container--percent">
					<p className="rd-containers__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
						assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
						suscipit aspernatur ex saepe cumque nesciunt?
					</p>
				</div>
			</Accordion>
			<Accordion title={<h2>vw (50vw)</h2>}>
				<div className="rd-containers__container rd-containers__container--vw">
					<p className="rd-containers__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
						assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
						suscipit aspernatur ex saepe cumque nesciunt?
					</p>
				</div>
			</Accordion>
		</article>
	);
};

export default Containers;
