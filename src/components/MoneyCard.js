// MoneyCard.js
import React from 'react';


const MoneyCard = ({ onMoneySelect }) => {
  const moneyValues = [1, 5, 10, 20];

  return (
    <div className="money-card">
      {moneyValues.map((value) => (
        <button
          key={value}
          className="money-button"
          onClick={() => onMoneySelect(value)}
        >
          ${value}
        </button>
      ))}
    </div>
  );
};

export default MoneyCard;
