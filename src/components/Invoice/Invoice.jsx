import React from "react";
import "./Invoice.css";

function Invoice() {
	const handleClose = () => {
		// Handle close logic here
		console.log("Close button clicked");
	};

	const transactionData = [
		{ date: "June 15, 2023", downloadLink: "Download" },
		{ date: "June 16, 2023", downloadLink: "Download" },
		{ date: "June 17, 2023", downloadLink: "Download" },
		{ date: "June 18, 2023", downloadLink: "Download" },
	];

	return (
		<div className="invoice-popup-container">
			<div className="invoice-popup-content">
				<div className="invoice-popup-header">
					<h2 className="invoice-popup-title">Invoice</h2>
					<span className="invoice-popup-close-btn" onClick={handleClose}>
						&times;
					</span>
				</div>
				<div className="invoice-details">
					<h6 className="transaction-column-heading">Transaction Date</h6>
					<div className="transaction-column">
						{transactionData.map((data, index) => (
							<div key={index} className="transaction-item">
								<p className="transaction-date">{data.date}</p>
								<p className="download-link">
									<u>{data.downloadLink}</u>
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Invoice;
