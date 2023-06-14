import React, { useState } from 'react';
import './OrderCancel.css';

function OrderCancel({setShowOrderCancel}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (value) => {
    setReason(value);
    setIsDropdownOpen(false);
  };

  const handleSubmit = () => {
    // Perform submit logic here
    console.log('Reason:', reason);
    console.log('Description:', description);
  };

  return (
    <div className="order-cancellation-container">
      <div className="order-cancellation-content">
        <div className="order-cancellation-header">
          <h2 className="order-cancellation-title">Order Cancellation</h2>
          <span className="order-cancellation-close-btn" onClick={() => setShowOrderCancel(false)}>
            &times;
          </span>
        </div>
        <div className="reasons-container">
        <div className="reasons-dropdown">
  <div className="dropdown-wrapper">
    <div className="dropdown-toggle">{reason ? reason : 'Reason'}</div>
    <div className="dropdown-icon" onClick={handleDropdownToggle}>
      {/* Add your dropdown icon here */}
    </div>
    {isDropdownOpen && (
      <div className="dropdown-menu">
        {/* Your dropdown menu options */}
      </div>
    )}
  </div>
</div>

        </div>
        <div className="description-container">
          <textarea
            className="description-textarea"
            placeholder="Description"
            rows="5"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="submit-button">
          <button onClick={handleSubmit}>Submit Request</button>
        </div>
      </div>
    </div>
  );
}

export default OrderCancel;
