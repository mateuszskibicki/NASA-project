import Head from "next/head";
import dynamic from 'next/dynamic';
const HomePage = dynamic(() => import("../templates/homepage/HomePage"));

export default function Index() {
	return (
		<div>
			<Head>
				<title>NASA project - Mateusz Skibicki</title>
				<meta
					name="description"
					content="NASA Project - Mateusz Skibicki - Next.js - Node.js - React.js"
				/>
			</Head>
			<HomePage />
		</div>
	);
}