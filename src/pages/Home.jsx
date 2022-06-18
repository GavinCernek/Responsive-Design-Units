import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<article className="rd-home">
			<h1>Welcome to Responsive Design Units!</h1>
			<h2>Purpose</h2>
			<p>
				To create an interactive visualizer for how our choice of units in CSS changes our layouts
				by providing demos for multiple common designs and patterns in web development.
			</p>
			<h2>Goal</h2>
			<p>
				To help developers make more confident and informed choices on the kinds of units they use
				when building specific components in order to make them more accessible and robust.
			</p>
			<h2>How it Works</h2>
			<p>
				Use the slider in the header to adjust the font size on the root element to simulate a user
				changing their default font size. By doing this, we can easily and immediately see how units
				like px, ems, and rems respond without having to mess around with an annoying settings
				window and toggling back and forth.
			</p>
			<h2>Some Basic Guidelines</h2>
			<p>
				Each demo will start off with the example in px values to serve as a baseline visual. All
				text will be in rem values since they are pretty much regarded as standard practice for
				accessibility purposes.
			</p>
			<h2>Other Notes</h2>
			<p>
				This is not designed to be the de-facto way to approach any set of designs on the web, the
				real answer always depends on your use case and what provides the best UX possible to your
				end users. Rather, this is simply meant to be a nice and easy way to see patterns in similar
				common designs with which you can use as a reference while building your own projects.
			</p>
			<p>And that's it!</p>
			<Link to="/text-spacing" className="rd-button">
				Get Started
			</Link>
		</article>
	);
};

export default Home;
