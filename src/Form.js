
import { useState } from "react";
import React from "react";
import "./Form.css";

function Form({ setResult }) {
  const [value, setValue] = useState([]);
  const [selectOption, setSelectOption] = useState("");

  const handleValueUpdate = (e) => {
    setValue(e.target.value);
  };

  const handleOptionChange = (e) => {
    if (e.target.value === "sum") {
      setSelectOption("sum");
    } else if (e.target.value === "average") {
      setSelectOption("average");
    } else {
      setSelectOption("mode");
    }
  };

  const mathOperations = () => {
    if (value.length === 0) {
      setResult("Invalid input.");
    } else {
      let elArr = value.split(",").map((el) => {
        if (Number.isNaN(Number(el)) !== true) {
          return Number(el);
        }
      });

      let sum = elArr.reduce((a, b) => a + b);
      let modeObj = {};

      if (
        elArr.length > 0 &&
        selectOption === "sum" &&
        !elArr.includes(undefined)
      ) {
        setResult(sum);
      } else if (
        elArr.length >= 1 &&
        selectOption === "average" &&
        !elArr.includes(undefined)
      ) {
        setResult(sum / elArr.length);
      } else if (
        elArr.length >= 1 &&
        selectOption === "mode" &&
        !elArr.includes(undefined)
      ) {
        for (let i = 0; i < elArr.length; i++) {
          if (!modeObj[elArr[i]]) {
            modeObj[elArr[i]] = 1;
          } else {
            modeObj[elArr[i]]++;
          }
        }
        console.log(modeObj);
        let max = 0;
        for (const key in modeObj) {
          if (modeObj[key] > max) {
            max = modeObj[key];
            setResult(key);
          }
        }
      } else {
        setResult("Invalid input.");
      }
    }
  };

  const handleSubmittedForm = (e) => {
    e.preventDefault();
    mathOperations();
  };

  return (
    <form>
      <input
        onChange={handleValueUpdate}
        id="values"
        name="values"
        type="text"
        value={value}
      />
      <select
        onChange={handleOptionChange}
        id="operation"
        name="operation"
        value={selectOption}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button onClick={handleSubmittedForm} type="submit">
        Calculate
      </button>
    </form>
  );
}

export default Form;