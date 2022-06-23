import { Routes, Route } from 'react-router-dom';
import { getUserPreferedTheme } from './utils/getUserPreferedTheme';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import TextSpacing from './pages/TextSpacing';
import ImageSizing from './pages/ImageSizing';
import SVGSizing from './pages/SVGSizing';
import Borders from './pages/Borders';
import Containers from './pages/Containers';
import BoxShadows from './pages/BoxShadows';
import ProductCard from './pages/ProductCard';
import CreateYourOwn from './pages/CreateYourOwn';
import NotFound from './pages/NotFound';

const root = document.querySelector('html');

const App = () => {
	root.className = getUserPreferedTheme();

	return (
		<Layout>
			<Navigation />
			<div className="rd-content">
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/text-spacing" element={<TextSpacing />} />
					<Route path="/image-sizing" element={<ImageSizing />} />
					<Route path="/svg-sizing" element={<SVGSizing />} />
					<Route path="/borders" element={<Borders />} />
					<Route path="/containers" element={<Containers />} />
					<Route path="/create-your-own" element={<CreateYourOwn />} />
					<Route path="/box-shadows" element={<BoxShadows />} />
					<Route path="/product-card" element={<ProductCard />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Layout>
	);
};

export default App;
