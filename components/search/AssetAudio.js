import PropTypes from 'prop-types';

export const AssetAudio = props => {

    const { content } = props;

	return (
		<div className="col-12 col-sm-6 col-md-4">
            <h1 className="text-white">AUDIO</h1>
        </div>
	);
};

AssetAudio.propTypes = {
    content: PropTypes.arrayOf(PropTypes.shape({
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
        href: PropTypes.string,
    })),
}
