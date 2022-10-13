import React from "react";
import { useState } from "react";
import "./Form.css";

function Form({ setSubmitted }) {
  let [inputted, setInputted] = useState("");
  let [selectOption, setSelectOption] = useState("");
  let [err, setErr] = useState(false);

  function calculateNums() {
    let arr = inputted.split(",");
    let i = 0;
    let answer = arr
      .map((num) => Number(num))
      .reduce((acc, el) => {
        return (acc += el);
      }, i);

    if (inputted === "" || selectOption === "" || isNaN(answer)) {
      return "Invalid input.";
    }

    if (selectOption === "sum") {
      console.log(arr);

      return answer;
    } else if (selectOption === "average") {
      return answer / arr.length;
    } else if (selectOption === "mode") {
      let obj = {};
      arr.map((num) => {
        if (!obj[num]) {
          obj[num] = 1;
        } else {
          obj[num] += 1;
        }
      });
      console.log(obj);
      let mode = 0;
      let x;
      for (let key in obj) {
        if (obj[key] > mode) {
          mode = obj[key];
          x = key;
        }
      }
      console.log(mode);
      console.log(x);
      return x;
    }
  }
  function resetForm() {
    setInputted("");
    setSelectOption("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(calculateNums());
    if (calculateNums(inputted, selectOption) !== "Invalid input.") {
      resetForm();
      setErr(false);
    } else {
      setErr(true);
    }
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        className={err ? "error" : null}
        id="values"
        name="values"
        type="text"
        value={inputted}
        onChange={(e) => setInputted(e.target.value)}
      />
      <select
        className={err ? "error" : null}
        id="operation"
        name="operation"
        value={selectOption}
        onChange={(e) => {
          setSelectOption(e.target.value);
        }}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button
        className="results"
        type="submit"
        // value={setSubmitted}
      >
        Calculate
      </button>
    </form>
  );
}

export default Form;
