import PropTypes from 'prop-types';
import { MainLayout } from "../../components/layout/MainLayout";
import SearchInput from '../../components/search/SearchInput';
import { AssetsComponent } from '../../components/search/AssetsComponent';

export default function SearchPage(props){

	const {
		data,
		queryQuestion,
		mediaType,
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
					/>
				</div>
			</div>
		</MainLayout>
	);
};

SearchPage.propTypes = {
    data: PropTypes.shape({
        href: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.object),
        links: PropTypes.arrayOf(PropTypes.object),
        metadata: PropTypes.object,
        version: PropTypes.string
    }),
	queryQuestion: PropTypes.string,
	isFooter: PropTypes.bool,
    mediaType: PropTypes.string
}