import PropTypes from "prop-types";
import Head from "next/head";
import moment from 'moment';
import Router from 'next/router';

export const ImageSinglePage = (props) => {
	const { data } = props;
	const { items } = data;
	const imageData = items[0].data[0];

	return (
		<div className="pt-4 pb-4 m-0">
			<Head>
				<title>NASA: {imageData.title}</title>
				<meta
					name="description"
					content={`NASA: ${imageData.description} created at ${
						imageData.date_created
					}`}
				/>
			</Head>
            <div className="col-12 pt-2 pb-2 text-left">
                <button className="btn btn-white" onClick={() => Router.back()}>Go back</button>
            </div>
            <img src={items[0].links[0].href} alt={imageData.title + ' NASA photo'} className="img-fluid"/>
			<h1>{imageData.title}</h1>
            <h5>{imageData.description}</h5>
            <h5>Created at: {moment(imageData.date_created).format('MMMM Do YYYY')} ({moment(imageData.date_created).fromNow()})</h5>
            {imageData.secondary_creator && <h5>Secondary creator: {imageData.secondary_creator}</h5>}
            <h5>NASA ID: {imageData.nasa_id}</h5>
            {imageData.keywords && imageData.keywords.length > 0 && <h5>Keywords: | {imageData.keywords.map(keyword => keyword + ' | ')}</h5>}
		</div>
	);
}

ImageSinglePage.propTypes = {
	data: PropTypes.shape({
		href: PropTypes.string,
		items: PropTypes.arrayOf(
			PropTypes.shape({
				data: PropTypes.arrayOf(
					PropTypes.shape({
						center: PropTypes.string,
						date_created: PropTypes.string,
						description: PropTypes.string,
						description_508: PropTypes.string,
						keywords: PropTypes.arrayOf(PropTypes.string),
						media_type: PropTypes.string,
						nasa_id: PropTypes.string,
						secondary_creator: PropTypes.string,
						title: PropTypes.string
					})
				),
				links: PropTypes.arrayOf(
					PropTypes.shape({
						href: PropTypes.string,
						rel: PropTypes.string,
						render: PropTypes.string
					})
				),
				href: PropTypes.string
			})
		),
		links: PropTypes.arrayOf(PropTypes.object),
		metadata: PropTypes.shape({
			total_hits: PropTypes.number
		}),
		version: PropTypes.string
	})
};
