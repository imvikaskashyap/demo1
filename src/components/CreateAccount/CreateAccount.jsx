import React from "react";
import "./CreateAccount.css";

function CreateAccount() {
	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted");
	};

	return (
		<div className="create-account-container">
			<div className="create-account-content">
				<h1 className="create-account-heading">Create Account</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<input
							placeholder="First Name"
							className="create-account-input"
							type="text"
							id="firstName"
							name="firstName"
							required
						/>
					</div>
					<div className="form-group">
						<input
							placeholder="Last Name"
							className="create-account-input"
							type="text"
							id="lastName"
							name="lastName"
							required
						/>
					</div>
					<div className="form-group">
						<input
							placeholder="Email"
							className="create-account-input"
							type="email"
							id="email"
							name="email"
							required
						/>
					</div>
					<div className="form-group">
						<input
							placeholder="Password"
							className="create-account-input"
							type="password"
							id="password"
							name="password"
							required
						/>
					</div>
					<div className="form-actions">
						<button type="submit" className="create-account-button">
							Create
						</button>
						<p className="terms-condition-text">
							By clicking submit, you agree to the{" "}
							<u className="terms-condition">Terms &amp; Conditions </u>
							of the website
						</p>
						<p className="login-link">
							<u>or Login here</u>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;
