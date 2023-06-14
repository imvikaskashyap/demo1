import React from "react";
import "./ResetPassword.css";

function ResetPassword() {
	const handleClose = () => {
		// Handle close logic here
		console.log("Close button clicked");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted");
	};

	return (
		<div className="reset-password-popup-container">
			<div className="reset-password-popup-content">
				<div className="reset-password-popup-header">
					<span
						className="reset-password-popup-close-btn"
						onClick={handleClose}>
						&times;
					</span>
				</div>
				<div className="reset-password-form">
					<h1 className="reset-password-heading">Reset Your Password</h1>
					<p className="reset-password-description">
						We will send you an email to reset your password.
					</p>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<input
								placeholder="Email"
								className="reset-input"
								type="email"
								id="email"
								name="email"
								required
							/>
						</div>
						<div className="form-actions">
							<button type="submit" className="reset-button">
								Submit
							</button>
							<p className="cancel-link">
								<u>Cancel</u>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ResetPassword;
