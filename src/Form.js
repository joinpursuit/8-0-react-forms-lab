import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {
  const [userInput, setUserInput] = useState([]);
  const [selectOption, setSelectOption] = useState("");

  // function handleCalculate {

  // }

  // function handleInput(e) {
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
    let num = 0;
    e.preventDefault();
    if (selectOption === "sum") {
      num = userInput.reduce((acc, curr) => {
        return (acc += curr);
      }, 0);
      console.log(num);
      return <h3>{num}</h3>;
    } else if (selectOption === "average") {
      let aver = userInput.reduce((acc, curr) => {
        return (acc += curr);
      }, 0);
      console.log(aver / userInput.length);
      num = aver / userInput.length;
    } else if (selectOption === "mode") {
      let item = userInput[0];
      let ocurrencesMap = {};

      for (let i in userInput) {
        const current = userInput[i];

        if (ocurrencesMap[current]) ocurrencesMap[current]++;
        else ocurrencesMap[current] = 1;

        if (ocurrencesMap[item] < ocurrencesMap[current]) item = current;
      }
      console.log(item);

      num = item;
      return {
        item: item,
        ocurrences: ocurrencesMap[item],
      };
    }
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
