import { MainLayout } from "../../components/layout/MainLayout";

export default function HomePage(){
	return (
		<MainLayout>
			<div className="homepage">
				<div className="container text-center text-white homepage__bg">
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
							href="https://www.linkedin.com/in/mateusz-skibicki-web-dev/"
							target="_blank"
						>
							<i className="fab fa-linkedin" />
						</a>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};