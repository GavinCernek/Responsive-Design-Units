import ImageSizingSrc from '../images/image-sizing-image.jpg';

const ImageSizing = () => {
	return (
		<article className="rd-image-sizing">
			<div className="rd-container">
				<h1>Image Sizing</h1>
				<div className="rd-asset">
					<img src={ImageSizingSrc} className="rd-asset__image" alt="" />
				</div>
				<div className="rd-asset">
					<img src={ImageSizingSrc} className="rd-asset__image rd-asset__image--rems" alt="" />
				</div>
			</div>
		</article>
	);
};

export default ImageSizing;
