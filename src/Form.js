import React, { useState } from "react";
import "./Form.css";

function Form({ setOutput }) {
  // 1. need to get the states for the user input and select option
  // 2. need handlers for user input, select option and calculate button

  const [userInput, setUserInput] = useState("");
  const [select, setSelect] = useState("");

  //------------------------------------------------------------------------------------------
  // my handlers
  const handleUserInputChange = (e) => {
    const { value } = e.target;
    setUserInput(value);
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setSelect(value);
  };

  const restartForm = () => {
    setUserInput("")
    setSelect("")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput || !select) {
      setOutput("Invalid input.");
    } else {
      let result = handleMath(userInput, select);
      setOutput(result);
      restartForm()
    }
  };
  
  //------------------------------------------------------------------------------------------
  // function to handle the math depending on what the user selects

  const handleMath = (userInput, select) => {
    let userNums = userInput.split(",");
    let total = 0;

    // if user picks sum, average or mode
    if (select === "sum") {
      userNums.map((num) => (total += Number(num)));
      return total;
    } else if (select === "average") {
      userNums.map((num) => (total += Number(num)));
      return total / userNums.length;
    } else if (select === "mode") {
      const getCommonNumber = (arr) => {
        const obj = {};
        // checking if obj doesnt have the array element if it doesn't leave the element = 1, if it does have a element then adds 1
        // ex: arr[1,2,2,3], obj{}. outcome will be {1:1, 2:2, 3:1} => just in case: {key: value}
        arr.forEach((el) => {
          if (!obj[el]) {
            obj[el] = 1;
          } else {
            obj[el]++;
          }
        });
        let highestNumber = -Infinity;
        let highestKey = -Infinity;
        for (let key in obj) {
          // first key will become the value
          const value = obj[key];
          // if value is more then -Infinity
          if (value > highestNumber) {
            //⬇︎
            // highestNum will be the value
            highestNumber = value;
            // highest key is what we will use to see the number that shows up more often
            highestKey = key;
          }
        }
        return Number(highestKey);
      };
      return getCommonNumber(userNums);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="values"
        name="values"
        type="text"
        onChange={handleUserInputChange}
        value={userInput}
      />
      <select
        id="operation"
        name="operation"
        onChange={handleSelectChange}
        value={select}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
}

export default Form;
