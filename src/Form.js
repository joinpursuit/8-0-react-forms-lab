import React, { useState } from "react";
import "./Form.css";

function Form({ setResult }) {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const [err, setErr] = useState(false);

  const calculation = (input) => {
    let splitArr = input.split(",");
    let val = 0;
    let obj = {};
    for (let i = 0; i < splitArr.length; i++) {
      val += Number(splitArr[i]);
    }
    if (select === "sum") {
      return val;
    }
    if (select === "average") {
      return val / splitArr.length;
    }
    if (select === "mode") {
      for (let value of splitArr) {
        if (!obj[value]) {
          obj[value] = 1;
        } else {
          obj[value] += 1;
        }}
        let countObj = 0;
        let key;
        for (let count in obj) {
          if (obj[count] > countObj) {
            key = count;
            countObj = obj[count];
          }
        }
        return key;
      }
    };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelect(e.target.value);
  };

  const reset = (e) => {
    setInput("");
    setSelect("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "" || select === "") {
      setErr(true);
      reset();
      setResult("Invalid input.");
    } else {
      setErr(false);
      reset();
      setResult(calculation(input));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={err ? "error" : null}
        id="values"
        name="values"
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <select
        className={err ? "error" : null}
        id="operation"
        name="operation"
        value={select}
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
