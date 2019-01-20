import PropTypes from 'prop-types';
import { MainLayout } from "../../components/layout/MainLayout";

import { ImageSinglePage } from '../../components/assets/ImageSinglePage';
import AudioSinglePage from '../../components/assets/AudioSinglePage';


export default function AssetsPage(props) {

    const {
        data,
        mediaType,
        //nasaID
    } = props;

	return (
		<MainLayout isFooter>
			<div className="assets">
				<div className="container text-center text-white text-shadow-close-heavy">
                    {
                        mediaType === 'image' ?
                        <ImageSinglePage data={data}/> :
                        <AudioSinglePage data={data}/>
                    }
				</div>
			</div>
		</MainLayout>
	);
}

AssetsPage.propTypes = {
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
