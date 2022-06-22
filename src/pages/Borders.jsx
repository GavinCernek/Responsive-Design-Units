import Accordion from '../components/Accordion';

const Borders = () => {
	return (
		<article className="rd-borders">
			<h1>Borders</h1>
			<Accordion title={<h2>px (2px)</h2>}>
				<div className="rd-borders__box">
					<p className="rd-borders__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
						assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
						suscipit aspernatur ex saepe cumque nesciunt?
					</p>
				</div>
			</Accordion>
			<Accordion title={<h2>em (0.125em)</h2>}>
				<div className="rd-borders__box rd-borders__box--em">
					<p className="rd-borders__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
						assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
						suscipit aspernatur ex saepe cumque nesciunt?
					</p>
				</div>
			</Accordion>
			<Accordion title={<h2>rem (0.125rem)</h2>}>
				<div className="rd-borders__box rd-borders__box--rem">
					<p className="rd-borders__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
						assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
						suscipit aspernatur ex saepe cumque nesciunt?
					</p>
				</div>
			</Accordion>
			<Accordion title={<h2>vw (2vw)</h2>}>
				<div className="rd-borders__box rd-borders__box--vw">
					<p className="rd-borders__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
						assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
						suscipit aspernatur ex saepe cumque nesciunt?
					</p>
				</div>
			</Accordion>
		</article>
	);
};

export default Borders;
