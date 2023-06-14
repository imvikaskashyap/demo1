import React, { useState } from "react";
import "./OrderCancel.css";
import { Dropdown } from "react-bootstrap";

function OrderCancel({ handleClose }) {
	const [reason, setReason] = useState("");
	const [description, setDescription] = useState("");

	const handleReasonChange = (event) => {
		setReason(event);
	};

	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};

	const handleSubmit = () => {
		// Perform submit logic here
		console.log("Reason:", reason);
		console.log("Description:", description);
	};

	const handleCancelButtonClick = () => {
		handleClose();
	};

	return (
		<div className="order-cancellation-container">
			<div className="order-cancellation-content">
				<div className="order-cancellation-header">
					<h2 className="order-cancellation-title">Order Cancellation</h2>
					<span
						className="order-cancellation-close-btn"
						onClick={handleCancelButtonClick}>
						&times;
					</span>
				</div>
				<div className="reasons-container">
					<Dropdown onSelect={handleReasonChange}>
						<Dropdown.Toggle
							className="reasons-dropdown"
							variant="secondary"
							id="reason-dropdown"
							size="lg"
							drop="down">
							{reason ? reason : "Reason"}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item eventKey="Option 1">Option 1</Dropdown.Item>
							<Dropdown.Item eventKey="Option 2">Option 2</Dropdown.Item>
							<Dropdown.Item eventKey="Option 3">Option 3</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
				<div className="description-container">
					<textarea
						className="description-textarea"
						placeholder="Description"
						rows="5"
						value={description}
						onChange={handleDescriptionChange}></textarea>
				</div>
				<div className="submit-button">
					<button onClick={handleSubmit}>Submit Request</button>
				</div>
			</div>
		</div>
	);
}

export default OrderCancel;
