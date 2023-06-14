import React, { useState } from "react";
import OrderCancel from "./OrderCancel/OrderCancel";

const Nav = () => {
	const [showOrderCancel, setShowOrderCancel] = useState(false);

	const handleOrder = () => {
		setShowOrderCancel(true);
	};

	const handleClose = () => {
		setShowOrderCancel(false);
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="/">
				Navbar
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<a className="nav-link" href="/review">
							Review
						</a>
					</li>
					<li className="nav-item" onClick={handleOrder}>
						<a className="nav-link" href="/order">
							Order
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/invoice">
							Invoice
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/resetpassword">
							Reset Password
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/register">
							Create Account
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/filter">
							Filters
						</a>
					</li>
				</ul>
			</div>

			{showOrderCancel && <OrderCancel handleClose={handleClose} />}
		</nav>
	);
};

export default Nav;
