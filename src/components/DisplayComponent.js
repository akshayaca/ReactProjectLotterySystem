// DisplayComponent.js
import React from 'react';
import "./Layout";

const DisplayComponent = ({ selectedNumbers, totalAmount,onClearAmount, onClear }) => {
  return (
    <div className="display-component">
      <div className="numbers-display">
        <h4>Numbers selected:</h4>
        <ul>
          {selectedNumbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
      <div className="amount-display">
        <h4>Total Amount:</h4>
        <p>${totalAmount.toFixed(2)}</p>
        <button className="clear-amount-button" onClick={onClearAmount}>Clear Amount</button>

      </div>
      <div className="display-buttons">
        <button className="cash-button">Cash</button>
        <button className="clear-button" onClick={onClear}>Clear</button>
      </div>
    </div>
  );
};

export default DisplayComponent;
