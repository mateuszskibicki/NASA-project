import Link from "next/link";

export const Navbar = () => {
	return (
		<nav class="navbar">
			<Link href="/">
				<a class="navbar-brand">
					<img
						src="/static/icons/icon-384x384.png"
						width="35"
						height="35"
						class="d-inline-block align-top"
						alt="NASA"
					/>
				</a>
			</Link>

			<div className="navbar__links">
				<Link href="/">
					<button className="btn btn-white mr-2">Home</button>
				</Link>

				<Link href="/search">
					<button className="btn btn-white mr-2">Search</button>
				</Link>

				<div className="navbar__icons">
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
		</nav>
	);
};
