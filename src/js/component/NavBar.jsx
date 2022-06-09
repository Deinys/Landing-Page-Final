import React from "react";

const NavBar = () => {
	return (
		<div className="navbar-new">
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand text-white" href="#">
						Start Bootstrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarSupportedContent">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a
									className="nav-link active text-white"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link active text-white"
									aria-current="page"
									href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link active text-white"
									aria-current="page"
									href="#">
									Service
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link active text-white"
									aria-current="page"
									href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
