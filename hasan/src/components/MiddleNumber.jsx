import React, { useState } from "react";

const MiddleNumberFinder = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [middleNumber, setMiddleNumber] = useState(null);

  const findMiddleNumber = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    const num3 = parseFloat(number3);

    // Check if the inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
      // Find the middle number
      const sortedNumbers = [num1, num2, num3].sort((a, b) => a - b);
      const middle = sortedNumbers[1];
      setMiddleNumber(middle);
    } else {
      // Display an error if any input is not a valid number
      alert("Please enter valid numbers.");
    }
  };

  return (
    <div>
      <label htmlFor="number1">Enter Number 1:</label>
      <input
        type="text"
        id="number1"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />

      <br />

      <label htmlFor="number2">Enter Number 2:</label>
      <input
        type="text"
        id="number2"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />

      <br />

      <label htmlFor="number3">Enter Number 3:</label>
      <input
        type="text"
        id="number3"
        value={number3}
        onChange={(e) => setNumber3(e.target.value)}
      />

      <br />

      <button onClick={findMiddleNumber}>Find Middle Number</button>

      <br />

      {middleNumber !== null && <p>Middle Number: {middleNumber}</p>}
    </div>
  );
};

export default MiddleNumberFinder;
