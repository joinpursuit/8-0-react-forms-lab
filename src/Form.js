import React, { useState } from "react";
import "./Form.css";

// class Form extends React.Component {
//   render() {
//     return (
//       <form>
//         <input id="values" name="values" type="text" />
//         <select id="operation" name="operation">
//           <option value=""></option>
//           <option value="sum">sum</option>
//           <option value="average">average</option>
//           <option value="mode">mode</option>
//         </select>
//         <button type="submit">Calculate</button>
//       </form>
//     );
//   }
// }

const Form = (props) => {
  // setting up my states
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  // props from my App.js
  const { setOutput } = props;

  // setting up my handlers
  const handleInput = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const handleSelect = (e) => {
    const { value } = e.target;
    setSelect(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input || !select) {
      setOutput("Invalid input");
    } else {
      let result = mathExecution(input, select);
      setOutput(result);
    }
  };

  // function for all the math stuff
  const mathExecution = (input, select) => {
    // checking if select is sum 
    if (select === "sum") {
      let total = 0;
      let nums = input.split(",");

      // adding the numbers to total 
      nums.map((num) => {
        total += num * 1;
      });
      return total;
    }
    //----------------------------------------
    // checking if select is average
    if (select === "average") {
      let total = 0;
      let nums = input.split(",");
      
      // adding all numbers
      nums.map((num) => {
        total += num * 1;
      });
      // dividing total to the length of my nums to get the average
      return total / nums.length;
    }
    //----------------------------------------
    // checking if select is mode
    if (select === "mode") {
      let nums = input.split(",");

      // function to check the most common numbers 
      const getCommonNum = (arr) => {
        const obj = {};
        arr.forEach((el) => {
          // if not included more than once than it just stays 1, else add 1
          if (!obj[el]) {
            obj[el] = 1;
          } else {
            obj[el] += 1;
          }
        });
        // checking to see what is the highest number for the reacurring number
        let highestNum = 0;
        let highestKey = -Infinity;
        for (let key in obj) {
          const value = obj[key];
          if (value > highestNum) {
            highestNum = value;
            highestKey = key;
          }
        }
        return Number(highestKey);
      };
      return getCommonNum(nums);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          onChange={handleInput}
          value={input}
        />
        <select
          id="operation"
          name="operation"
          onChange={handleSelect}
          value={select}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default Form;
