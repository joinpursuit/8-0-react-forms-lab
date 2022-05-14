import { useState } from "react";
import React from "react";
import "./Form.css";

const Form = (props) => {
  const [values, setValues] = useState("");
  const [select, setSelect] = useState("");
  const { setAnswer } = props;
  let result = 0;

  const handleValues = (e) => {
    const { value } = e.target;
    setValues(value);
  };

  const handleSelect = (e) => {
    const { value } = e.target;
    setSelect(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = values.split(","); 
    if (!select) {
      setAnswer("Invalid input.");
    } else if (select === "average") {
      for (let i = 0; i < arr.length; i++) {
        result = result + Number(arr[i]);
      }
      setAnswer(result / arr.length);
      setValues("");
      setSelect("");
    } else if (select === "mode") {
      const obj = {};
      arr.forEach((number) => {
        if (!obj[number]) {
          obj[number] = 1;
        } else {
          obj[number] += 1;
        }

        let highestCount = 0;
        let mode = 0;

        for (let number in obj) {
          if (obj[number] > highestCount) {
            highestCount = obj[number];
            mode = number;
          }
        }
        setAnswer(mode);
        setValues("");
        setSelect("");
      });
    } else if (select === "sum") {
      for (let i = 0; i < arr.length; i++) {
        result = result + Number(arr[i]);
      }
      setAnswer(result);
      setValues("");
      setSelect("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="values"
        name="values"
        type="text"
        onChange={handleValues}
        value={values}
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
