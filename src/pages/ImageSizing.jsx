import Accordion from '../components/Accordion';
import imageSizingSrc from '../images/image-sizing-image.jpg';

const ImageSizing = () => {
	return (
		<article className="rd-image-sizing">
			<div className="rd-container">
				<h1>Image Sizing</h1>
				<p>Images are hard on the web.</p>
				<Accordion title={<h2>px (300px x 300px)</h2>}>
					<div className="rd-image-sizing__asset">
						<img src={imageSizingSrc} className="rd-image-sizing__image" alt="" />
					</div>
				</Accordion>
				<Accordion title={<h2>em (300px x 300px)</h2>}>
					<div className="rd-image-sizing__asset">
						<img src={imageSizingSrc} className="rd-image-sizing__image" alt="" />
					</div>
				</Accordion>
				<Accordion title={<h2>rem (300px x 300px)</h2>}>
					<div className="rd-image-sizing__asset">
						<img src={imageSizingSrc} className="rd-image-sizing__image" alt="" />
					</div>
				</Accordion>
				<Accordion title={<h2>% (300px x 300px)</h2>}>
					<div className="rd-image-sizing__asset">
						<img src={imageSizingSrc} className="rd-image-sizing__image" alt="" />
					</div>
				</Accordion>
			</div>
		</article>
	);
};

export default ImageSizing;
