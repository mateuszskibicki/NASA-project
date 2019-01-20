import Link from "next/link";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<Link href="/">
				<a className="navbar-brand">
					<img
						src="/static/icons/icon-384x384.png"
						width="35"
						height="35"
						className="d-inline-block align-top"
						alt="NASA"
					/>
				</a>
			</Link>

			<div className="navbar__links">
				<Link href="/">
					<button className="btn btn-white--navbar shadow-up-down mr-2">Home</button>
				</Link>

				<Link href="/search">
					<button className="btn btn-white--navbar shadow-up-down mr-2">Search</button>
				</Link>

				<div className="navbar__icons">
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
		</nav>
	);
};
