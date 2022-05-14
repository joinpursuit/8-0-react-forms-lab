import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const { setAnswer } = props;
  // ____________________________________________

  const handleInput = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSelect = (e) => {
    // const value = e.target.value
    const { value } = e.target;
    setSelect(value);
  };

  let answer = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      setAnswer("Invalid input.");
    }
    if (!select) {
      setAnswer("Invalid input.");
    } else {
      let result = math(input, select);
      setAnswer(result);
    }
  };

  const math = (input, select) => {
    if (select === "sum") {
      let sum = 0;
      let nums = input.split(",");
      nums.map((num) => {
        sum += num * 1;
      });
      return sum;
    }
    if (select === "average") {
      let sum = 0;
      let nums = input.split(",");
      nums.map((num) => {
        sum += num * 1;
      });
      return sum / nums.length;
    }
    if (select === "mode") {
      let nums = input.split(",");

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
        return Number(highestValueKey);
      }
      return getMode(nums);
    }
  };

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
  );
};

export default Form;
