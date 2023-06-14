import React, { useState } from 'react';
import './WriteReview.css';

function WriteReview() {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    // Perform submit logic here
    console.log('Rating:', rating);
    console.log('Description:', description);
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="popup-header">
          <h2 className="popup-title">Write a Review</h2>
          <span className="popup-close-btn" onClick={() => console.log('Close button clicked')}>
            &times;
          </span>
        </div>
        <div className="rating-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`rating-star ${star <= rating ? 'active' : ''}`}
              onClick={() => handleRatingChange(star)}
            >
              &#9733;
            </span>
          ))}
        </div>
        <div className="description-container">
          <textarea
          placeholder='Description'
            className="description-textarea"
            rows="5"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="submit-button">
          <button onClick={handleSubmit}>Submit Review</button>
        </div>
      </div>
    </div>
  );
}

export default WriteReview;
