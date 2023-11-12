import { useState } from "react";
import React from "react";

const ArrayComparison = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [length1, setlength1] = useState(0);
  const [length2, setlength2] = useState(0);

  const seeResults = () => {
    const array1 = input1.split(",").map(Number);
    const array2 = input2.split(",").map(Number);
    setlength1(array1.length);
    setlength2(array2.length);
    if (array1.length !== array2.length) {
      alert("Array are not equal, make sure of it they are equal");
      return;
    }
    const similarNumbers = array1.filter((num) => array2.includes(num));
    if (similarNumbers.length > 0) {
      console.log("Similar numbers", similarNumbers);
    } else {
      console.log("No similar numbers.");
    }
  };
  return (
    <>
      <div>
        <label htmlFor="input1">Enter number1: </label>
        <input
          type="text"
          id="input1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <span>length: {length1}</span>
      </div>
      <div>
        <label htmlFor="input1">Enter number 2: </label>
        <input
          type="text"
          id="input2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <span>length: {length2}</span>
      </div>
      <button onClick={seeResults}>See Results</button>
    </>
  );
};

export default ArrayComparison;
