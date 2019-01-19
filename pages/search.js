import PropTypes from 'prop-types';
import axios from 'axios';
import Head from 'next/head';

import dynamic from 'next/dynamic';
const SearchPage = dynamic(() => import("../templates/search/SearchPage"));

class Search extends React.Component {

    static async getInitialProps({query}) {
        try {
            let queryQuestion = query.q ? query.q : null;
            let mediaType = query.media_type ? query.media_type : null;

            let data = [];
            data = queryQuestion && mediaType && (mediaType === 'image' || mediaType === 'audio') ? await axios.get(`https://images-api.nasa.gov/search?q=${queryQuestion}&media_type=${mediaType}`) : null;

            if(data && data.data && data.data.collection) return {
                success: true,
                data: data.data.collection,
                queryQuestion,
                mediaType
            }

            return {
                success: true,
                data: null
            }
        }
        catch (err) {
            return { error: true }
        }
    };

    componentDidMount() {
        this.props.error && (window.location = '/404')
    }

    render() {
        const {
            data,
            queryQuestion,
            mediaType,
            error,
        } = this.props;

        console.log(this.props)

        if (error) return '';

        return (
            <React.Fragment>
                <Head>
                    <title>NASA search</title>
                    <meta
                        name="description"
                        content="NASA Project - Search page"
                    />
                </Head>
                <SearchPage
                    data={data}
                    queryQuestion={queryQuestion}
                    mediaType={mediaType}
                    isFooter={data && data.items && data.items.length > 0 ? true : false}
                />
            </React.Fragment>
        )
    }
}

Search.propTypes = {
    success: PropTypes.bool,
    data: PropTypes.shape({
        href: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.object),
        links: PropTypes.arrayOf(PropTypes.object),
        metadata: PropTypes.object,
        version: PropTypes.string
    }),
    queryQuestion: PropTypes.string,
    mediaType: PropTypes.string,
    error: PropTypes.bool
}

export default Search;