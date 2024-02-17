// Layout.js
import React, { useState, useEffect } from 'react';
import NumberCard from './NumberCard'; // Adjust the path if necessary
import MoneyCard from './MoneyCard'; // Adjust the path if necessary
import DisplayComponent from './DisplayComponent'; // Import the DisplayComponent

const Layout = ( ) => {
  // State to hold the selected numbers and total amount
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [clearTriggered, setClearTriggered] = useState(false);
  const [totalAmount, settotalAmount] = useState(0);
  

  // Function to handle the "Clear" button click inside DisplayComponent
  const handleMoneySelect = (value) => {
    settotalAmount(prevAmount => prevAmount + value);
  };
  
  const handleClearAmount = () => {
    settotalAmount(0);
  };

  const handleCash = () => {
    // Check if there are selected numbers and the total amount is greater than 0
    if (selectedNumbers.length > 0 && totalAmount > 0) {
      alert(`Numbers Selected: ${selectedNumbers.join(', ')}\nTotal Amount: $${totalAmount.toFixed(2)}`);
    } else {
      alert("Please select ticket numbers and assign a money value before proceeding.");
    }
  };

  const onClear = () => {
    // Clear the selected numbers and total amount
    setSelectedNumbers([]);
    setClearTriggered(true);
    settotalAmount(0);
  };
  useEffect(() => {
    if (clearTriggered) {
      setSelectedNumbers([]);
      setClearTriggered(false); // Reset the clear flag after handling
    }
  }, [clearTriggered]);

  return (
    <div className="layout">
      <div className="layout-left">
        {/* NumberCard now handles its own selection and random number generation */}
       <NumberCard 
       onSelectionChange={setSelectedNumbers}
       clearTriggered={clearTriggered}  />
      
      
        <MoneyCard 
          onMoneySelect={handleMoneySelect} 
          isDisabled={selectedNumbers.length < 5} 
        />
      </div>
      <div className="layout-right">
        {/* DisplayComponent shows the selected numbers and total amount */}
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
