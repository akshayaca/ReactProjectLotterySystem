// DisplayComponent.js
import React from 'react';
import "./Layout";
import { IoCloseCircleSharp } from "react-icons/io5";

const DisplayComponent = ({ selectedNumbers, totalAmount,onClearAmount, onClear,onCash }) => {

  return (
    <div className="display-component">
      <div className="numbers-display">
        <h4>Numbers selected:</h4>
        <ul>
          {selectedNumbers.map((number, index) => (
            <li key={index}>{"Mark :"}{number}</li>
          ))}
        </ul>
      </div>

      <div className="amount-display">
        <h4>Total Amount:</h4>
        <div className="icon-on-side">
        <p>${totalAmount.toFixed(2)}</p>
        <IoCloseCircleSharp className="clear-icon" onClick={onClearAmount} title="Clear"/>
        </div>

      </div>

      <div className="display-buttons">
      <button className="cash-button" onClick={onCash}>Cash</button>
        <button className="clear-button" onClick={onClear}>Clear All</button>
      </div>
    </div>
  );
};

export default DisplayComponent;
