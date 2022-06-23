import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<h1>404 Not Found...</h1>
			<p>There's nothing to see here folks!</p>
			<p>Well what are you still doing here, get back to the awesome demos!</p>
			<Link to="/" className="rd-button">
				Return to Home
			</Link>
		</div>
	);
};

export default NotFound;
