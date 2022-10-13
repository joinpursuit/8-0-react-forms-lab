import React from "react";
import { useState } from "react";
import "./Form.css";

function Form({ getResult }) {
  const [userInput, setUserInput] = useState([]);
  const [selectOption, setSelectOption] = useState("");

  // function testForErrors(e) {
  //   let array = [e.target.value];
  //   console.log(array);
  //   if (!array.every((el) => typeof el === "number")) {
  //     alert("Invalid input.");
  //   } else {
  //     setUserInput([e.target.value]);
  //   }
  // }

  function convertInput(e) {
    let input = e.target.value;
    let inputArr = input.split(",");
    setUserInput(inputArr.map((el) => Number(el)));
    // console.log(userInput);
  }

  function doMath(e) {
    let num;
    e.preventDefault();
    if (selectOption === "sum") {
      num = userInput.reduce((acc, curr) => {
        return (acc += curr);
      }, 0);
      console.log(num);
    } else if (selectOption === "average") {
      let aver = userInput.reduce((acc, curr) => {
        return (acc += curr);
      }, 0);

      num = aver / userInput.length;
    } else if (selectOption === "mode") {
      let aNum = userInput[0];
      let ocurrences = {};

      for (let i in userInput) {
        const current = userInput[i];

        if (ocurrences[current]) ocurrences[current]++;
        else ocurrences[current] = 1;

        if (ocurrences[aNum] < ocurrences[current]) aNum = current;
      }

      num = aNum;
      // return {
      //   item: aNum,
      //   ocurrences: ocurrences[aNum],
      // };
    }
    if (isNaN(num)) {
      num = "Invalid input.";
    }
    getResult(num);
  }

  return (
    <form onSubmit={doMath}>
      <input
        id="values"
        name="values"
        type="text"
        onChange={(e) => convertInput(e)}
      />
      <select
        id="operation"
        name="operation"
        value={selectOption}
        onChange={(e) => setSelectOption(e.target.value)}
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
