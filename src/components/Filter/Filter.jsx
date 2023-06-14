import React from "react";
import "./Filter.css";

function Filter() {
	const handleClose = () => {
		// Handle close logic here
		console.log("Close button clicked");
	};

	const handleSubmit = () => {
		// Handle submit logic here
		console.log("Submit button clicked");
	};

	return (
		<div className="filters-popup-container">
			<div className="filters-popup-content">
				<div className="filters-popup-header">
					<h1 className="filters-popup-heading">Filters</h1>
					<span className="filters-popup-close-btn" onClick={handleClose}>
						&times;
					</span>
				</div>
				<div className="filters-popup-filters">
					<div className="filter-item">
						<h2 className="filter-name">By Price</h2>
						<div className="price-filter">
							<div className="price-range">
								<div className="price-circle red">
									<span className="price-value">$500</span>
								</div>
								<div className="price-circle red">
									<span className="price-value">$1000</span>
								</div>
							</div>
						</div>
					</div>
					<div className="filter-item">
						<h2 className="filter-name">By Min and Max</h2>
						<div className="min-max-filter">
							<input className="min-input" type="text" placeholder="Min" />
							<input className="max-input" type="text" placeholder="Max" />
						</div>
					</div>
					<div className="filter-item">
						<h2 className="filter-name">By Average Customer Review</h2>
						<div className="review-stars">
							<div className="star-rating">
								<div className="stars">
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
								</div>
								<span className="and-up">& up</span>
								<span className="rating">4.0</span>
							</div>
							<div className="star-rating">
								<div className="stars">
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="star empty">&#9733;</span>
									<span className="star empty">&#9733;</span>
								</div>
								<span className="and-up">& up</span>

								<span className="rating">3.0</span>
							</div>
						</div>
					</div>
					<div className="filter-item">
						<h2 className="filter-name">By Brands</h2>
						<div className="brand-list">
							<div className="brand-item">Brand 1</div>
							<div className="brand-item">Brand 2</div>
							<div className="brand-item">Brand 3</div>
							<div className="brand-item">Brand 4</div>
						</div>
					</div>
				</div>
				<div className="filters-popup-footer">
					<button className="submit-button" onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}

export default Filter;
