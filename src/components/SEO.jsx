import { Helmet } from 'react-helmet';

const SEO = ({ title, description }) => {
	return (
		<Helmet>
			<title>{title} | Responsive Design</title>
			<meta name="description" content={description} />
		</Helmet>
	);
};

export default SEO;
