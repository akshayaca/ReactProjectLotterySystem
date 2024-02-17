import React, { useState, useEffect } from 'react';
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi"; // Importing the random dice icon from react-icons for UI

// NumberCard component definition
const NumberCard = ({ onSelectionChange, clearTriggered }) => {
  // State to keep track of selected numbers
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  // Effect to communicate selected numbers to the parent component
  useEffect(() => {
    onSelectionChange(selectedNumbers);
  }, [selectedNumbers, onSelectionChange]);

  // Effect to clear selected numbers when triggered by the parent component
  useEffect(() => {
    if (clearTriggered) {
      setSelectedNumbers([]); // Reset selected numbers
      onSelectionChange([]); // Notify parent component of the reset
    }
  }, [clearTriggered, onSelectionChange]);

  // Function to handle selection and deselection of numbers
  const toggleNumberSelection = (number) => {
    if (selectedNumbers.includes(number)) {
      // Deselect number if already selected
      const newSelected = selectedNumbers.filter(n => n !== number);
      setSelectedNumbers(newSelected);
    } else {
      // Prevent selection if 5 numbers are already selected
      if (selectedNumbers.length >= 5) {
        alert('You are allowed to select only 5 numbers');
        return;
      }
      // Add number to the selection
      setSelectedNumbers([...selectedNumbers, number]);
    }
    // Notify parent component of the updated selection
    onSelectionChange([...selectedNumbers, number]);
  };

  // Function to generate and select 5 random numbers
  const handleRandomSelection = () => {
    const randomSelection = [];
    while (randomSelection.length < 5) {
      const randomNumber = Math.floor(Math.random() * 20) + 1;
      if (!randomSelection.includes(randomNumber)) {
        randomSelection.push(randomNumber); // Add unique random number
      }
    }
    setSelectedNumbers(randomSelection); // Update state with random numbers
    onSelectionChange(randomSelection); // Notify parent component
  };

  // Render the component UI
  return (
    <div className="number-card">
      {(function() {
        let elements = [];
        for (let i = 1; i <= 20; i++) {
          elements.push(
            <div 
              key={i} // Unique key for each element
              className={`number ${selectedNumbers.includes(i) ? 'selected' : ''}`} // Highlight selected numbers
              onClick={() => toggleNumberSelection(i)} // Toggle selection on click
            >
              {i} { /*Display the number */}
            </div>
          );
        }
        return elements; // Return the array of number elements
      })()}
      {/* Random selection icon with click handler */}
      <GiPerspectiveDiceSixFacesRandom className="random-button" onClick={handleRandomSelection} title="Go Random"/>
    </div>
  );
};

export default NumberCard; // Export the component for use in other parts of the app
