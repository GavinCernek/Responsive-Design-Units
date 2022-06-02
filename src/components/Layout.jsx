import Header from './Header';
import Footer from './Footer';
import UpArrowSVG from './svg/UpArrowSVG';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className="rd-main" id="main-content">
				{children}
				<button
					type="button"
					className="rd-back-to-top"
					onClick={() =>
						window.scrollTo({
							top: 0,
							behavior: 'smooth',
						})
					}
				>
					<span className="rd-visually-hidden">Scroll To Top</span>
					<span>
						<UpArrowSVG />
					</span>
				</button>
			</main>
			<Footer />
		</>
	);
};

export default Layout;
