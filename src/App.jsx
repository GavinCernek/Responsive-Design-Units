import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import TextSpacing from './pages/TextSpacing';
import ImageSizing from './pages/ImageSizing';
import SVGSizing from './pages/SVGSizing';

const App = () => {
	return (
		<Layout>
			<Navigation />
			<div className="rd-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/text-spacing" element={<TextSpacing />} />
					<Route path="/image-sizing" element={<ImageSizing />} />
					<Route path="/svg-sizing" element={<SVGSizing />} />
				</Routes>
			</div>
		</Layout>
	);
};

export default App;
