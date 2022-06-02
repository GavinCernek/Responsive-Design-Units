import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import TextSpacing from './pages/TextSpacing';

const App = () => {
	return (
		<Layout>
			<Navigation />
			<div className="rd-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/text-spacing" element={<TextSpacing />} />
				</Routes>
			</div>
		</Layout>
	);
};

export default App;
