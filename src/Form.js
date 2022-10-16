import React, { useState } from "react";
import "./Form.css";


function Form({setResult}) {
  const [userInput, setUserInput] = useState("");

  const [userSelect, setUserSelect] = useState("");

  function handleInputChange(e) {
    setUserInput(e.target.value);
  }

  function handleSelectChange(e) {
    setUserSelect(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const numbers = userInput.split(",").map((str) => {
      return Number(str);
    });

    let sum = 0;
    let average = 0;

    if (userSelect === "sum") {
      for (let value of numbers) {
        sum += value;
      }
      setResult(sum);
    } else if (userSelect === "average") {
      for (let value of numbers) {
        sum += value;
        average = sum / numbers.length;
      }
      setResult(average);
    } else if (userSelect === "mode") {
      const mode = {};
      let max = 0,
        count = 0;

      for (let i = 0; i < numbers.length; i++) {
        const item = numbers[i];

        if (mode[item]) {
          mode[item]++;
        } else {
          mode[item] = 1;
        }

        if (count < mode[item]) {
          max = item;
          count = mode[item];
        }
      }
      setResult(max);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInputChange}
        id="values"
        name="values"
        type="text"
        value={userInput}
      />
      <select
        id="operation"
        name="operation"
        onChange={handleSelectChange}
        value={userSelect}
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
