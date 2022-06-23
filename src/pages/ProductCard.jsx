import SEO from '../components/SEO';
import Accordion from '../components/Accordion';
import productImageSrc from '../images/nike-shoes.jpg';

const ProductCard = () => {
	return (
		<article className="rd-product-card">
			<SEO
				title="Product Card"
				description="See how a more complex component like a product card is effected when the font size is changed."
			/>
			<h1>Product Card</h1>
			<Accordion title={<h2>px</h2>}>
				<article className="rd-products-card__card">
					<div className="rd-products-card__asset">
						<img src={productImageSrc} className="rd-products-card__image" alt="" />
					</div>
					<div className="rd-products-card__content">
						<h2 className="rd-products-card__title">Generic Product</h2>
						<p className="rd-products-card__description">
							This is a short description of our really cool product and why you should buy it right
							now.
						</p>
						<p className="rd-products-card__price">$5.00/unit</p>
						<p className="rd-products-card__cart">Add To Cart</p>
					</div>
				</article>
			</Accordion>
			<Accordion title={<h2>em</h2>}>
				<article className="rd-products-card__card rd-products-card__card--em">
					<div className="rd-products-card__asset">
						<img src={productImageSrc} className="rd-products-card__image" alt="" />
					</div>
					<div className="rd-products-card__content">
						<h2 className="rd-products-card__title">Generic Product</h2>
						<p className="rd-products-card__description">
							This is a short description of our really cool product and why you should buy it right
							now.
						</p>
						<p className="rd-products-card__price">$5.00/unit</p>
						<p className="rd-products-card__cart">Add To Cart</p>
					</div>
				</article>
			</Accordion>
			<Accordion title={<h2>rem</h2>}>
				<article className="rd-products-card__card rd-products-card__card--rem">
					<div className="rd-products-card__asset">
						<img src={productImageSrc} className="rd-products-card__image" alt="" />
					</div>
					<div className="rd-products-card__content">
						<h2 className="rd-products-card__title">Generic Product</h2>
						<p className="rd-products-card__description">
							This is a short description of our really cool product and why you should buy it right
							now.
						</p>
						<p className="rd-products-card__price">$5.00/unit</p>
						<p className="rd-products-card__cart">Add To Cart</p>
					</div>
				</article>
			</Accordion>
		</article>
	);
};

export default ProductCard;
