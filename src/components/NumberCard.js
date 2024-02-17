// NumberCard.js
import React, { useState,useEffect } from 'react';
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";


const NumberCard = ({ onSelectionChange,clearTriggered }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  useEffect(() => {
    // Whenever the selected state changes, propagate the change up
    onSelectionChange(selectedNumbers);
  }, [selectedNumbers, onSelectionChange]);
  
  useEffect(() => {
    if (clearTriggered) {
      setSelectedNumbers([]); // Clear local selection state
      onSelectionChange([]); // Inform parent component about the cleared selections
    }
  }, [clearTriggered, onSelectionChange]);



  const toggleNumberSelection = (number) => {
    if (selectedNumbers.includes(number)) {
      const newSelected = selectedNumbers.filter(n => n !== number)
      setSelectedNumbers(newSelected);
    } else {
      if (selectedNumbers.length >= 5) {
        alert('You are allowed to select only 5 numbers');
        return;
      }
      setSelectedNumbers([...selectedNumbers, number]);
    }
    onSelectionChange([...selectedNumbers, number]); // Update selected numbers in parent component
  };

  const handleRandomSelection = () => {
    const randomSelection = [];
    while (randomSelection.length < 5) {
      const randomNumber = Math.floor(Math.random() * 20) + 1;
      if (!randomSelection.includes(randomNumber)) {
        randomSelection.push(randomNumber);
      }
    }
    setSelectedNumbers(randomSelection);
    onSelectionChange(randomSelection); // Update selected numbers in parent component
  };

  return (
    <div className="number-card">
      {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
        <div 
          key={number} 
          className={`number ${selectedNumbers.includes(number) ? 'selected' : ''}`} 
          onClick={() => toggleNumberSelection(number)}
        >
          {number}
        </div>
      ))}
      <GiPerspectiveDiceSixFacesRandom className="random-button" onClick={handleRandomSelection} title = "Go Random"/>
     
    </div>
  );
};

export default NumberCard;
