
import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const { setAnswer } = props;

  const handleInput = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  const handleSelect = (event) => {
    const { value } = event.target;
    setSelect(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      setAnswer("Invalid input.");
    }
    if (!select) {
      setAnswer("Invalid input.");
    } else {
      setAnswer(math(input, select));
    }
  };
  const math = (input, select) => {
    let sum = 0;
    let nums = input.split(",");

    if (select === "sum") {
      nums.map((num) => {
        sum += num * 1;
        setInput("");
      });
      return sum;
    }
    if (select === "average") {
      nums.map((num) => {
        sum += num * 1;
        setInput("");
      });

      return sum / nums.length;
    }
    if (select === "mode") {
      function getMode(array) {
        
        const obj = {};

        array.forEach((number) => {
          if (!obj[number]) {
            obj[number] = 1;
          } else {
            obj[number] += 1;
          }
        });
        let highestValue = 0;
        let highestValueKey = -Infinity;
        for (let key in obj) {
          const value = obj[key];
          if (value > highestValue) {
            highestValue = value;
            highestValueKey = key;
          }
        }
        Number(highestValueKey);
      }
      getMode(nums);
    }
    
    
  }
  setInput("")

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="values"
        name="values"
        type="text"
        value={input}
        onChange={handleInput}
      />
      <select
        id="operation"
        name="operation"
        value={select}
        onChange={handleSelect}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default Form;







