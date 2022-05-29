import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Test from './pages/Test';

const App = () => {
	return (
		<Layout>
			<Navigation />
			<div className="rd-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/test" element={<Test />} />
				</Routes>
			</div>
		</Layout>
	);
};

export default App;
