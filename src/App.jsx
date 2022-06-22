import { Routes, Route } from 'react-router-dom';
import { getUserPreferedTheme } from './utils/getUserPreferedTheme';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import TextSpacing from './pages/TextSpacing';
import ImageSizing from './pages/ImageSizing';
import SVGSizing from './pages/SVGSizing';
import Borders from './pages/Borders';
import Containers from './pages/Containers';
import CreateYourOwn from './pages/CreateYourOwn';

const root = document.querySelector('html');

const App = () => {
	root.className = getUserPreferedTheme();

	return (
		<Layout>
			<Navigation />
			<div className="rd-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/text-spacing" element={<TextSpacing />} />
					<Route path="/image-sizing" element={<ImageSizing />} />
					<Route path="/svg-sizing" element={<SVGSizing />} />
					<Route path="/borders" element={<Borders />} />
					<Route path="/containers" element={<Containers />} />
					<Route path="/create-your-own" element={<CreateYourOwn />} />
				</Routes>
			</div>
		</Layout>
	);
};

export default App;
