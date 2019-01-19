import Link from "next/link";

export const Footer = () => {
	return (
		<div className="footer py-3">
			<div className="text-center">
				<Link href="/">
					<div className="m-auto text-center">
						<img
							src="/static/icons/icon-384x384.png"
							alt="NASA logo"
							className="loader"
						/>
					</div>
				</Link>
				<div>
					<small>NASA project - Mateusz Skibicki - 2019</small>
				</div>
				<div>
					<small>
						Images:{" "}
						<a href="https://www.pexels.com" target="_blank">
							https://www.pexels.com
						</a>
					</small>
				</div>
				<div>
					<small>Technologies: Next.js - Node.js - React.js</small>
				</div>
				<div className="icons-wrapper icons-wrapper--small">
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
						<i className="fab fa-linkedin" />
					</a>
				</div>
			</div>
		</div>
	);
};
