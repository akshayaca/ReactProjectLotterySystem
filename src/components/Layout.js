// Layout.js
import React, { useState, useEffect } from 'react';
import NumberCard from './NumberCard'; // Adjust the path if necessary
import MoneyCard from './MoneyCard'; // Adjust the path if necessary
import DisplayComponent from './DisplayComponent'; // Import the DisplayComponent

const Layout = () => {
  // State to hold the selected numbers and total amount
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [clearTriggered, setClearTriggered] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  // Function to handle the "Clear" button click inside DisplayComponent
  const handleMoneySelect = (value) => {
    setTotalAmount(prevAmount => prevAmount + value);
  };
  
  const handleClearAmount = () => {
    setTotalAmount(0);
  };

  const onClear = () => {
    // Clear the selected numbers and total amount
    setSelectedNumbers([]);
    setClearTriggered(true);
    setTotalAmount(0);
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
          onClear={onClear}
        />
      </div>
    </div>
  );
};

export default Layout;
