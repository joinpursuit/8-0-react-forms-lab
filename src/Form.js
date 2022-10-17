import React from "react";
import { useState } from "react";
import "./Form.css";

function Form({ setResult }) {
  const [userInput, setUserInput] = useState("");
  const [selectOption, setSelectOption] = useState("");
  const [error, setError] = useState(false);

  function calculateNum(userInput) {
    let arr = userInput.split(",");
    console.log(arr);

    let val = 0;
    let modCount = {};

    for (let i = 0; i < arr.length; i++) {
      console.log(Number(arr[i]));

      val += Number(arr[i]);
    }

    if (selectOption === "sum") {
      return val;
    }

    if (selectOption === "average") {
      return val / arr.length;
    }
    if (selectOption === "mode") {
      for (let value of arr) {
        if (!modCount[value]) {
          modCount[value] = 1;
        } else {
          modCount[value] += 1;
        }
      }
      let objVal = 0;
      let key;

      for (let count in modCount) {
        if (modCount[count] > objVal) {
          key = count;
          objVal = modCount[count];
        }
        //console.log(key);
      }
      return key;
    }
  }

  function handleUserInputChange(event) {
    setUserInput(event.target.value);
  }

  function handleSelectChange(event) {
    setSelectOption(event.target.value);
  }

  function reset() {
    setUserInput("");
    setSelectOption("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (userInput === "" || selectOption === "") {
      setError(true);
      reset();
      setResult("Invalid input.");
    } else {
      setError(false);
      reset();
      setResult(calculateNum(userInput));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={error ? "error" : null}
        id="values"
        name="values"
        type="text"
        value={userInput}
        onChange={handleUserInputChange}
      />
      <select
        className={error ? "error" : null}
        id="operation"
        name="operation"
        value={selectOption}
        onChange={handleSelectChange}
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
