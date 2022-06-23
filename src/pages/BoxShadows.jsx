import SEO from '../components/SEO';
import Accordion from '../components/Accordion';

const BoxShadows = () => {
	return (
		<article className="rd-box-shadows">
			<SEO
				title="Box Shadows"
				description="See how box shadows scale with font size to see what units to choose."
			/>

			<h1>Box Shadows</h1>
			<Accordion title={<h2>px (2px)</h2>}>
				<div className="rd-box-shadows__box">
					<p className="rd-box-shadows__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
						assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
						suscipit aspernatur ex saepe cumque nesciunt?
					</p>
				</div>
			</Accordion>
			<Accordion title={<h2>em (0.125em)</h2>}>
				<div className="rd-box-shadows__box rd-box-shadows__box--em">
					<p className="rd-box-shadows__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
						assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
						suscipit aspernatur ex saepe cumque nesciunt?
					</p>
				</div>
			</Accordion>
			<Accordion title={<h2>rem (0.125em)</h2>}>
				<div className="rd-box-shadows__box rd-box-shadows__box--rem">
					<p className="rd-box-shadows__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
						assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
						suscipit aspernatur ex saepe cumque nesciunt?
					</p>
				</div>
			</Accordion>
			<Accordion title={<h2>vw (2vw)</h2>}>
				<div className="rd-box-shadows__box rd-box-shadows__box--vw">
					<p className="rd-box-shadows__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
						assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
						suscipit aspernatur ex saepe cumque nesciunt?
					</p>
				</div>
			</Accordion>
		</article>
	);
};

export default BoxShadows;
