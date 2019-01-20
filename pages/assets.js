import PropTypes from "prop-types";
import axios from "axios";
import Head from "next/head";
//import Router from "next/router";
import dynamic from "next/dynamic";

const AssetsPage = dynamic(() => import("../templates/assets/AssetsPage"));

class Assets extends React.Component {
	static async getInitialProps({ query }) {
		try {
			let nasaID = query.nasa_id ? query.nasa_id : null;
			let mediaType = query.media_type ? query.media_type : null;
			let data = [];
			data = nasaID ? await axios.get(`https://images-api.nasa.gov/search?nasa_id=${nasaID}`) : null;

			if (data && data.data && data.data.collection && (mediaType === 'image' || mediaType === 'audio'))
				return {
					success: true,
					data: data.data.collection,
					nasaID,
					mediaType,
				};

			return {
				success: true,
				data: null
			};
		} catch (err) {
			return { error: true };
		}
    }

    componentDidMount() {
        (this.props.error || (!this.props.data || !this.props.data.items)) && (window.location = '/404')
    }

	render() {

        const {
            //success,
            data,
            nasaID,
            mediaType,
            error
        } = this.props;

        if (error || (!data || !data.items)) return '';

		return (
			<div>
				<Head>
					<title>NASA project - Mateusz Skibicki</title>
					<meta
						name="description"
						content="NASA Project - Mateusz Skibicki - Next.js - Node.js - React.js"
					/>
				</Head>
				<AssetsPage 
                    data={data}
                    nasaID={nasaID}
                    mediaType={mediaType}
                />
			</div>
		);
	}
}

Assets.propTypes = {
    success: PropTypes.bool,
    error: PropTypes.bool,
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
    mediaType: PropTypes.string,
    nasaID: PropTypes.string,
}

export default Assets;