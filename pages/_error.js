import Head from "next/head";
import { MainLayout } from "../components/layout/MainLayout";

export default function ErrorPage() {
	return (
		<MainLayout>
			<Head>
				<title>NASA project - 404 page</title>
				<meta
					name="description"
					content="NASA Project - Mateusz Skibicki - Next.js - Node.js - React.js - 404 page"
				/>
			</Head>
			<div className="container text-center text-white mt-4">
				<img
					src="/static/images/alien.png"
					alt="Alien warning"
					width="200px"
					height="200px"
				/>
				<h1 className="display-1">404 error</h1>
				<h2>
					Oh no!! Some evil alien has stolen the data and I can't display this
					page!
				</h2>
			</div>
		</MainLayout>
	);
}
