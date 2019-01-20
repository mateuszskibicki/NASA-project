import PropTypes from 'prop-types';
import moment from 'moment';

export const AssetImage = props => {
    const {
        data,
        links,
        //href
    } = props.content;

	return (
		<div className="col-12 col-sm-6 col-lg-4 mt-3 mb-4">
            <div className="card mx-1">
                {
                    links[0].href && links[0].href.length > 0 &&
                    <div className="card__img" style={{backgroundImage: `url(${links[0].href})`}}/> 
                }
                <div className="card-body p-2">
                    {data[0].title && <h5 className="card-title mb-1">{data[0].title}</h5>}
                    {data[0].nasa_id && <p className="small mb-1">NASA ID: {data[0].nasa_id}</p>}
                    {data[0].date_created && <p className="small mb-1">Created at: {moment(data[0].date_created).format('MMMM Do YYYY')} ({moment(data[0].date_created).fromNow()})</p>}
                    {data[0].keywords && data[0].keywords.length > 0 && (
                        <p className="small mb-1">Keywords: | {data[0].keywords.map(keyword => keyword + ' | ')}</p>
                    )}
                    <a href="#" className="btn btn-black">Read more...</a>
                </div>
            </div>
        </div>
	);
};

AssetImage.propTypes = {
    content: PropTypes.shape({
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
    })
}
