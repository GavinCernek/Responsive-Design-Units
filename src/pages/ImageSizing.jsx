import SEO from '../components/SEO';
import Accordion from '../components/Accordion';
import imageSizingSrc from '../images/image-sizing-image.jpg';

const ImageSizing = () => {
	return (
		<article className="rd-image-sizing">
			<SEO
				title="Image Sizing"
				description="See how image sizing scales when the font size is changed."
			/>

			<h1>Image Sizing</h1>
			<Accordion title={<h2>px (300px x 300px)</h2>}>
				<div className="rd-image-sizing__asset">
					<img src={imageSizingSrc} alt="" />
					<p className="rd-image-sizing__text">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa reiciendis libero quas,
						laudantium, nemo optio quo, sit deleniti perferendis pariatur debitis quidem sequi fuga
						repellat illum voluptate sed? Adipisci, quas!
					</p>
				</div>
			</Accordion>
			<Accordion title={<h2>em (18.75em x 18.75em)</h2>}>
				<div className="rd-image-sizing__asset rd-image-sizing__asset--em">
					<img src={imageSizingSrc} alt="" />
					<p className="rd-image-sizing__text">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa reiciendis libero quas,
						laudantium, nemo optio quo, sit deleniti perferendis pariatur debitis quidem sequi fuga
						repellat illum voluptate sed? Adipisci, quas!
					</p>
				</div>
			</Accordion>
			<Accordion title={<h2>rem (18.75rem x 18.75rem)</h2>}>
				<div className="rd-image-sizing__asset rd-image-sizing__asset--rem">
					<img src={imageSizingSrc} alt="" />
					<p className="rd-image-sizing__text">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa reiciendis libero quas,
						laudantium, nemo optio quo, sit deleniti perferendis pariatur debitis quidem sequi fuga
						repellat illum voluptate sed? Adipisci, quas!
					</p>
				</div>
			</Accordion>
			<Accordion title={<h2>% (30% x 30%)</h2>}>
				<div className="rd-image-sizing__asset rd-image-sizing__asset--percent">
					<img src={imageSizingSrc} alt="" />
					<p className="rd-image-sizing__text">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa reiciendis libero quas,
						laudantium, nemo optio quo, sit deleniti perferendis pariatur debitis quidem sequi fuga
						repellat illum voluptate sed? Adipisci, quas!
					</p>
				</div>
			</Accordion>
			<Accordion title={<h2>vw (30vw x 30vw)</h2>}>
				<div className="rd-image-sizing__asset rd-image-sizing__asset--vw">
					<img src={imageSizingSrc} alt="" />
					<p className="rd-image-sizing__text">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa reiciendis libero quas,
						laudantium, nemo optio quo, sit deleniti perferendis pariatur debitis quidem sequi fuga
						repellat illum voluptate sed? Adipisci, quas!
					</p>
				</div>
			</Accordion>
		</article>
	);
};

export default ImageSizing;
