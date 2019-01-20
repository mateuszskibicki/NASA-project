import PropTypes from "prop-types";
import Head from "next/head";
import axios from 'axios';
import moment from "moment";
import Router from "next/router";
import ReactAudioPlayer from 'react-audio-player';


class AudioSinglePage extends React.Component {

    state = {
        MP3url: null
    }

    async componentDidMount() {

		const { data } = this.props;

		const urlToCall = 
		data &&
		data.items && 
		data.items[0] && 
		data.items[0].href &&
		await axios.get(data.items[0].href);

		if(urlToCall.status === 200 && urlToCall.data && urlToCall.data.length > 0) {
			this.setState({MP3url: urlToCall.data[0]})
		}

    }

	render() {
		const { data } = this.props;
		const { items } = data;
		const audioData = items[0].data[0];

		return (
			<div className="pt-4 pb-4 m-0">
				<Head>
					<title>NASA: {audioData.title}</title>
					<meta
						name="description"
						content={`NASA: ${audioData.description} created at ${
							audioData.date_created
						}`}
					/>
				</Head>
				<div className="col-12 pt-2 pb-2 text-left">
					<button className="btn btn-white" onClick={() => Router.back()}>
						Go back
					</button>
				</div>
				<h1>{audioData.title}</h1>
				<h5>
					Created at: {moment(audioData.date_created).format("MMMM Do YYYY")} (
					{moment(audioData.date_created).fromNow()})
				</h5>
				<h5>NASA ID: {audioData.nasa_id}</h5>
				{audioData.keywords && audioData.keywords.length > 0 && (
					<h5>
						Keywords: | {audioData.keywords.map(keyword => keyword + " | ")}
					</h5>
				)}
				<div className="bg-white text-dark assets__audio--description">
					{this.state.MP3url && 
						<ReactAudioPlayer
							src={this.state.MP3url}
							//autoPlay
							controls
						/>
					}
					<p className="lead">{audioData.description}</p>
				</div>
			</div>
		);
	}
}

AudioSinglePage.propTypes = {
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
						title: PropTypes.string
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

export default AudioSinglePage;
