// Layout.js
import React, { useState, useEffect } from 'react';
import NumberCard from './NumberCard'; // Import NumberCard component
import MoneyCard from './MoneyCard'; // Import MoneyCard component
import DisplayComponent from './DisplayComponent'; // Import DisplayComponent

const Layout = () => {
  // State to track selected numbers
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  // State to track if the clear action has been triggered
  const [clearTriggered, setClearTriggered] = useState(false);
  // State to track the total amount assigned to the selected numbers
  const [totalAmount, setTotalAmount] = useState(0);
  
  // Function to update the total amount when a money value is selected
  const handleMoneySelect = (value) => {
    setTotalAmount(prevAmount => prevAmount + value);
  };
  
  // Function to reset the total amount to 0
  const handleClearAmount = () => {
    setTotalAmount(0);
  };

  // Function to handle the Cash action
  const handleCash = () => {
    // Check if there are selected numbers and a total amount before proceeding
    if (selectedNumbers.length > 0 && totalAmount > 0) {
      alert(`Numbers Selected: ${selectedNumbers.join(', ')}\nTotal Amount: $${totalAmount.toFixed(2)}`);
    } else {
      alert("Please select ticket numbers and assign a money value before proceeding.");
    }
  };

  // Function to clear all selections and reset states
  const onClear = () => {
    
    setClearTriggered(true); // Indicate that a clear action has been triggered
   
  };

  // Effect to reset selected numbers when clearTriggered state changes
  useEffect(() => {
    if (clearTriggered) {
      setSelectedNumbers([]); // Reset selected numbers
      setTotalAmount(0); // Reset the total amount
      setClearTriggered(false); // Reset the clearTriggered flag
    }
  }, [clearTriggered]);

  return (
    <div className="layout">
      <div className="layout-left">
        {/* NumberCard component with props for selection change and clear action */}
        <NumberCard 
          onSelectionChange={setSelectedNumbers}
          clearTriggered={clearTriggered} />
        
        {/* MoneyCard component with props for money selection and disabling based on number selection */}
        <MoneyCard 
          onMoneySelect={handleMoneySelect} 
          isDisabled={selectedNumbers.length < 5} 
        />
      </div>
      <div className="layout-right">
        {/* DisplayComponent with props for displaying selected numbers, total amount, and handling clear and cash actions */}
        <DisplayComponent 
          selectedNumbers={selectedNumbers}
          totalAmount={totalAmount}
          onClearAmount={handleClearAmount} 
          onCash={handleCash}
          onClear={onClear}
        />
      </div>
    </div>
  );
};

export default Layout;
