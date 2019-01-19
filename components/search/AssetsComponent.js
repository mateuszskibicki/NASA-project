import PropTypes from "prop-types";
import { AssetImage } from './AssetImage';
import { AssetAudio } from './AssetAudio';

export const AssetsComponent = props => {
	const { 
		data,
		queryQuestion,
		page,
		mediaType
	 } = props;

	console.log(data);

	if (!data || !data.items) return "";
	if (data && data.items && data.items.length === 0) return (
        <React.Fragment>
            <h1 className="text-center text-white">Sorry, no results. Try again.</h1>
            <div className="m-auto text-center">
                <img src="/static/images/planet.png" alt="Astronaut" className="loader"/>
            </div>
        </React.Fragment>
    );

	return (
		<div className="row">
			<div aria-label="breadcrumb" className="m-auto">
				<ol className="breadcrumb">
					<li className="breadcrumb-item active" aria-current="page">NASA database</li>
					<li className="breadcrumb-item active" aria-current="page">Media type: {mediaType}</li>
					<li className="breadcrumb-item active" aria-current="page">Query: {queryQuestion}</li>
					<li className="breadcrumb-item active" aria-current="page">Total results: {data.metadata.total_hits}</li>
					<li className="breadcrumb-item active" aria-current="page">Page: {page ? page : 1}</li>
				</ol>
			</div>

			<div className="row">
				{data && data.items && data.items.length > 0 && data.items.map(singleAsset => {
					if(singleAsset && singleAsset.data[0] && singleAsset.data[0].media_type === 'image') return <AssetImage key={singleAsset.data.date_created} content={singleAsset}/>
					if(singleAsset && singleAsset.data[0] && singleAsset.data[0].media_type === 'audio') return <AssetAudio key={singleAsset.data.date_created} content={singleAsset}/>
				})}
			</div>
		</div>
	);
};

AssetsComponent.propTypes = {
	data: PropTypes.shape({
        href: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape({
			data: PropTypes.arrayOf(PropTypes.shape({
				center: PropTypes.string,
				date_created: PropTypes.string,
				description: PropTypes.string,
				description_508: PropTypes.string,
				keywords: PropTypes.arrayOf(PropTypes.string),
				media_type: PropTypes.string,
				nasa_id: PropTypes.string,
				secondary_creator: PropTypes.string,
				title: PropTypes.string
			})),
			links: PropTypes.arrayOf(PropTypes.shape({
				href: PropTypes.string,
				rel: PropTypes.string,
				render: PropTypes.string
			})),
			href: PropTypes.string,
		})),
        links: PropTypes.arrayOf(PropTypes.object),
        metadata: PropTypes.shape({
			total_hits: PropTypes.number
		}),
        version: PropTypes.string
    }),
	queryQuestion: PropTypes.string,
	mediaType: PropTypes.string,
	page: PropTypes.string,
}