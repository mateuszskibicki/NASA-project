import PropTypes from "prop-types";
import Router from 'next/router';

class SearchInput extends React.Component {
	state = {
		questionForm: '',
        mediaTypeForm: '',
        error: null
	};

	componentDidMount() {
		this.props.queryQuestion && this.props.queryQuestion.trim().length > 0 && this.setState({questionForm: decodeURI(this.props.queryQuestion)})
		this.props.mediaType === 'image' && this.setState({mediaTypeForm: 'image'})
		this.props.mediaType === 'audio' && this.setState({mediaTypeForm: 'audio'})
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onChangeSelect = e => {
		this.setState({ mediaTypeForm: e.target.value });
    };
    
    onSubmit = e => {
        e.preventDefault();
        const {
            questionForm,
            mediaTypeForm
        } = this.state;
        let error = '';
        questionForm.trim().length === 0 &&  (error = 'Please fill text input field.')
        mediaTypeForm.trim().length === 0 && (error = 'Please choose type of assets (image or audio).')
        questionForm.trim().length === 0 &&  mediaTypeForm.trim().length === 0 && (error = 'All fields are required.')
        if (error) return this.setState({error: error});

        this.setState({error: null})
        Router.push(`/search?q=${questionForm}&media_type=${mediaTypeForm}`);
    }

	render() {
		const { questionForm, error } = this.state;

		return (
			<div className="row justify-content-center mt-4 mb-4">
				<div className="col-12 col-sm-10 col-md-8 col-xl-6">
					<h1 className="text-white text-center">NASA Search</h1>

					<form className="form-search" onSubmit={this.onSubmit}>

						<div className="input-group mb-3">
							<input
								type="text"
								onChange={this.onChange}
								name="questionForm"
								value={questionForm}
								className="form-control"
								placeholder="Search for assets..."
								aria-describedby="search-button"
							/>
							<div className="input-group-append">
								<button className="btn btn-white" type="submit" id="search-button">
									<i className="fas fa-search" />
								</button>
							</div>
						</div>

						<div className="row justify-content-center">
							<div className="col-12 col-xs-10 col-md-8 col-xl-6">
								<div className="row text-center">
									<div className="col-6">
										<div className="form-check form-check-inline">
											<input
												className="form-check-input mr-3"
												type="radio"
												name="mediaTypeForm"
												id="inlineRadio1"
                                                value="image"
												onChange={this.onChangeSelect}
											/>
											<label
												className="form-check-label lead text-white"
												htmlFor="inlineRadio1"
											>
												Images
											</label>
										</div>
									</div>
									<div className="col-6">
										<div className="form-check form-check-inline">
											<input
												className="form-check-input mr-3"
												type="radio"
												name="mediaTypeForm"
												id="inlineRadio2"
                                                value="audio"
                                                onChange={this.onChangeSelect}
											/>
											<label
												className="form-check-label lead text-white"
												htmlFor="inlineRadio2"
											>
												Audio
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>

                        {error && <div className="alert alert-danger mt-2">{error}</div>}

					</form>
				</div>
			</div>
		);
	}
}

SearchInput.propTypes = {
	queryQuestion: PropTypes.string,
	mediaType: PropTypes.string
};

export default SearchInput;
