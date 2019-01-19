export const AssetsComponent = props => {
	const { data } = props;

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
		<div>
			<h1>assets</h1>
		</div>
	);
};
