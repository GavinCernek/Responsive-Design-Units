import SEO from '../components/SEO';
import Accordion from '../components/Accordion';

const Borders = () => {
	return (
		<article className="rd-borders">
			<SEO
				title="Borders"
				description="See how borders scale with font size to determine what units to choose."
			/>

			<h1>Borders</h1>
			<Accordion title={<h2>Border Width</h2>}>
				<Accordion title={<h3>px (2px)</h3>}>
					<div className="rd-borders__box-width">
						<p className="rd-borders__text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
							assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
							suscipit aspernatur ex saepe cumque nesciunt?
						</p>
					</div>
				</Accordion>
				<Accordion title={<h3>em (0.125em)</h3>}>
					<div className="rd-borders__box-width rd-borders__box-width--em">
						<p className="rd-borders__text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
							assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
							suscipit aspernatur ex saepe cumque nesciunt?
						</p>
					</div>
				</Accordion>
				<Accordion title={<h3>rem (0.125rem)</h3>}>
					<div className="rd-borders__box-width rd-borders__box-width--rem">
						<p className="rd-borders__text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
							assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
							suscipit aspernatur ex saepe cumque nesciunt?
						</p>
					</div>
				</Accordion>
				<Accordion title={<h3>vw (2vw)</h3>}>
					<div className="rd-borders__box-width rd-borders__box-width--vw">
						<p className="rd-borders__text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
							assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
							suscipit aspernatur ex saepe cumque nesciunt?
						</p>
					</div>
				</Accordion>
			</Accordion>
			<Accordion title={<h2>Border Radius</h2>}>
				<Accordion title={<h3>px (4px)</h3>}>
					<div className="rd-borders__box-radius">
						<p className="rd-borders__text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
							assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
							suscipit aspernatur ex saepe cumque nesciunt?
						</p>
					</div>
				</Accordion>
				<Accordion title={<h3>em (0.25em)</h3>}>
					<div className="rd-borders__box-radius rd-borders__box-radius--em">
						<p className="rd-borders__text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
							assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
							suscipit aspernatur ex saepe cumque nesciunt?
						</p>
					</div>
				</Accordion>
				<Accordion title={<h3>rem (0.25rem)</h3>}>
					<div className="rd-borders__box-radius rd-borders__box-radius--rem">
						<p className="rd-borders__text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
							assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
							suscipit aspernatur ex saepe cumque nesciunt?
						</p>
					</div>
				</Accordion>
				<Accordion title={<h3>vw (4vw)</h3>}>
					<div className="rd-borders__box-radius rd-borders__box-radius--vw">
						<p className="rd-borders__text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore dicta
							assumenda in, soluta dignissimos non debitis fuga ab, est magnam enim illum modi
							suscipit aspernatur ex saepe cumque nesciunt?
						</p>
					</div>
				</Accordion>
			</Accordion>
		</article>
	);
};

export default Borders;
