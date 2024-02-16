// MoneyCard.js
import React from 'react';

const MoneyCard = ({ onMoneySelect, isDisabled }) => {
  const moneyValues = [1, 5, 10, 20];
  const handleMoneyClick = (value) => {
    if (isDisabled) {
      alert('Please choose 5 numbers first.');
      return;
    }
    onMoneySelect(value);
  };

  return (
    <div className="money-card">
      {moneyValues.map((value) => (
        
        <button
          key={value}
          className="money-button"
          disabled={isDisabled}
          onClick={() => handleMoneyClick(value)}
        >
          ${value}
        </button>
      ))}
    </div>
  );
};

export default MoneyCard;
