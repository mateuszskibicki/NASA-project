import PropTypes from 'prop-types';
import { MainLayout } from "../../components/layout/MainLayout";
import SearchInput from '../../components/search/SearchInput';
import { AssetsComponent } from '../../components/search/AssetsComponent';

export default function SearchPage(props){

	const {
		data,
		queryQuestion,
		mediaType,
		page,
		isFooter
	} = props;

	//console.log(queryQuestion, mediaType , data);

	return (
		<MainLayout isFooter={isFooter}>
			<div className="search">
				<div className="container">
					<SearchInput 
						queryQuestion={queryQuestion}
						mediaType={mediaType}
					/>
					<AssetsComponent 
						data={data}
						queryQuestion={queryQuestion}
						page={page}
						mediaType={mediaType}
					/>
				</div>
			</div>
		</MainLayout>
	);
};

SearchPage.propTypes = {
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
	page: PropTypes.string,
	isFooter: PropTypes.bool,
    mediaType: PropTypes.string
}