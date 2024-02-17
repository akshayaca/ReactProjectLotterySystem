import React, { useState, useEffect } from 'react';
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi"; // Import random dice icon for UI

const NumberCard = ({ onSelectionChange, clearTriggered }) => {
  // State to track selected numbers
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  // Effect to notify parent component when selectedNumbers change
  useEffect(() => {
    onSelectionChange(selectedNumbers);
  }, [selectedNumbers, onSelectionChange]);
  
  // Effect to reset selected numbers when clear is triggered from parent
  useEffect(() => {
    if (clearTriggered) {
      setSelectedNumbers([]); // Clear selected numbers
      onSelectionChange([]); // Notify parent component of the reset
    }
  }, [clearTriggered, onSelectionChange]);

  // Function to handle the selection and deselection of numbers
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
      // Add number to selection
      setSelectedNumbers([...selectedNumbers, number]);
    }
    // Notify parent component of the new selection state
    onSelectionChange([...selectedNumbers, number]);
  };

  // Function to generate and set 5 random numbers as selected
  const handleRandomSelection = () => {
    const randomSelection = [];
    while (randomSelection.length < 5) {
      const randomNumber = Math.floor(Math.random() * 20) + 1;
      if (!randomSelection.includes(randomNumber)) {
        randomSelection.push(randomNumber);
      }
    }
    setSelectedNumbers(randomSelection); // Update state with random numbers
    onSelectionChange(randomSelection); // Notify parent component
  };

  return (
    <div className="number-card">
      {/* Render 20 numbers for selection */}
      {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
        <div 
          key={number} // Unique key for React list
          className={`number ${selectedNumbers.includes(number) ? 'selected' : ''}`} // Highlight if selected
          onClick={() => toggleNumberSelection(number)} // Toggle selection on click
        >
          {number}
        </div>
      ))}
      {/* Random selection button */}
      <GiPerspectiveDiceSixFacesRandom className="random-button" onClick={handleRandomSelection} title="Go Random"/>
    </div>
  );
};

export default NumberCard;
