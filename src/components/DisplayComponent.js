import React from 'react';
import "./Layout";
import { IoCloseCircleSharp } from "react-icons/io5";

const DisplayComponent = ({ selectedNumbers, totalAmount, onClearAmount, onClear, onCash }) => {
  return (
    // Ensuring a single root element (div) wraps all content
    <div className="display-component"> 
      <div className="numbers-display">
        <h4>Numbers selected:</h4>
        {/* Ensuring the map function is correctly used within braces and each list item has a unique key */}
        <ul>
          {selectedNumbers.map((number, index) => (
            <li key={index}>{"Mark: "}{number}</li> // Correctly formatted list item
          ))}
        </ul>
      </div>

      <div className="amount-display">
        <h4>Total Amount:</h4>
        {/* Wrapping adjacent JSX elements in a parent div */}
        <div className="icon-on-side">
          <p>${totalAmount.toFixed(2)}</p> {/* Correctly displaying totalAmount */}
          <IoCloseCircleSharp className="clear-icon" onClick={onClearAmount} title="Clear"/> {/* Correct usage of IoCloseCircleSharp icon */}
        </div>
      </div>

      {/* Action buttons correctly placed within a single div */}
      <div className="display-buttons">
        <button className="cash-button" onClick={onCash}>Cash</button>
        <button className="clear-button" onClick={onClear}>Clear All</button>
      </div>
    </div>
  );
};

export default DisplayComponent;
