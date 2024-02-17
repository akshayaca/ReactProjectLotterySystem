import React from 'react';

// MoneyCard component responsible for selecting money values
const MoneyCard = ({ onMoneySelect, isDisabled }) => {
  // Define the set of money values available for selection
  const moneyValues = [1, 5, 10, 20];

  // Handle click event on money buttons
  const handleMoneyClick = (value) => {
    // Check if the selection is disabled (e.g., not enough numbers selected)
    if (isDisabled) {
      alert('Please choose 5 numbers first.'); // Alert the user to select numbers first
      return; // Exit the function to prevent further execution
    }
    onMoneySelect(value); // Trigger the passed function with the selected money value
  };

  return (
    <div className="money-card"> {/* Container for money buttons */}
      {moneyValues.map((value) => ( // Map through moneyValues to render buttons
        <button
          key={value} // Unique key for each button for React's reconciliation process
          className="money-button" // Class for styling
          disabled={isDisabled} // Disable button if isDisabled is true
          onClick={() => handleMoneyClick(value)} // Set click handler for each button
        >
          ${value} {/* Display the money value on the button */}
        </button>
      ))}
    </div>
  );
};

export default MoneyCard; // Export the component for use in other parts of the app
