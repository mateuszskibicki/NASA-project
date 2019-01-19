import { MainLayout } from "../../components/layout/MainLayout";

export const HomePage = () => {
	return (
		<MainLayout isBackground>
			<div className="homepage">
				<div className="container text-center text-white">
					<h1 className="mb-1">NASA</h1>
					<h2 className="mb-1">Mateusz Skibicki</h2>
					<p className="lead mb-1">
						Technologies I used Next.js/ Node.js/ React.js/ Boostrap
					</p>
					<p className="lead mb-0 text-decoration-a-none">
						Project based on documentation:{" "}
						<a
							href="https://jsainsburyplc.github.io/front-end-test/"
							target="_blank"
							
						>
							https://jsainsburyplc.github.io/front-end-test/
						</a>
					</p>
					<div className="icons-wrapper icons-wrapper--big">
						<a
							href="https://github.com/mateuszskibicki/NASA-project"
							target="_blank"
						>
							<i className="fab fa-github" />
						</a>

						<a
							href="https://github.com/mateuszskibicki/NASA-project"
							target="_blank"
						>
							<i class="fab fa-linkedin" />
						</a>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

// import PropTypes from 'prop-types';
// import dynamic from 'next/dynamic';

// import { HomepageLayout } from '../../features/homepage/HomepageLayout';
// const HomepageHero = dynamic(() => import('../../features/homepage/HomepageHero'));
// const Subscribe = dynamic(() => import('../../features/common/components/magazine/Subscribe'));
// const HomepageTransforming = dynamic(() => import('../../features/homepage/HomepageTransforming'));
// import { TestimonialsComponent } from '../../features/common/components/testimonials/TestimonialsComponent';
// import { TheDailyJournalComponent } from '../../features/common/components/the-daily-journal/TheDailyJournalComponent';

// export const  HomePage = (props) => {

//     const {
//         header,
//         transofrming,
//         testimonials,
//         testimonials_tag,
//         magazine,
//         theDailyJournal
//     } = props;

//     return (
//         <HomepageLayout>
//             <HomepageHero header={header} />
//             <HomepageTransforming transofrming={transofrming} />
//             <TestimonialsComponent testimonials={testimonials} testimonials_tag={testimonials_tag} />
//             <Subscribe magazine={magazine} />
//             <TheDailyJournalComponent theDailyJournal={theDailyJournal} />
//         </HomepageLayout>
//     )
// }

// HomePage.propTypes = {
//     header: PropTypes.object,
//     transofrming: PropTypes.object,
//     testimonials: PropTypes.object,
//     magazine: PropTypes.object,
//     theDailyJournal: PropTypes.object,
//     testimonials_tag: PropTypes.string,
// }
