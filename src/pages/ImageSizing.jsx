import Accordion from '../components/Accordion';
import imageSizingSrc from '../images/image-sizing-image.jpg';

const ImageSizing = () => {
	return (
		<article className="rd-image-sizing">
			<h1>Image Sizing</h1>
			<p>Images are hard on the web.</p>
			<Accordion title={<h2>px (300px x 300px)</h2>}>
				<div className="rd-image-sizing__asset">
					<img src={imageSizingSrc} alt="" />
				</div>
			</Accordion>
			<Accordion title={<h2>em (18.75em x 18.75em)</h2>}>
				<div className="rd-image-sizing__asset rd-image-sizing__asset--em">
					<img src={imageSizingSrc} alt="" />
				</div>
			</Accordion>
			<Accordion title={<h2>rem (18.75rem x 18.75rem)</h2>}>
				<div className="rd-image-sizing__asset rd-image-sizing__asset--rem">
					<img src={imageSizingSrc} alt="" />
				</div>
			</Accordion>
			<Accordion title={<h2>% (30% x 30%)</h2>}>
				<div className="rd-image-sizing__asset rd-image-sizing__asset--percent">
					<img src={imageSizingSrc} alt="" />
				</div>
			</Accordion>
			<Accordion title={<h2>vw (30vw x 30vw)</h2>}>
				<div className="rd-image-sizing__asset rd-image-sizing__asset--vw">
					<img src={imageSizingSrc} alt="" />
				</div>
			</Accordion>
		</article>
	);
};

export default ImageSizing;
