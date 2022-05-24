import "./Form.css";
import React, { useState } from "react";

const Form = (props) => {
  const { calculation, setCalculation } = props;

  const [numbers, setNumbers] = useState("");

  const handleNumbers = (e) => {
    const { value } = e.target;
    setNumbers(value);
  };

  const [select, setSelect] = useState("");

  const handleSelect = (e) => {
    const { value } = e.target;
    setSelect(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(numbers === ''){
      setCalculation('Invalid input.')
    }
    const numArr = numbers.split(",");

    numArr.forEach(num => {
      if(!Number(num)){
        setCalculation('Invalid input.')
      }
    })

    if (select === "sum") {
      setCalculation(
        numArr.reduce((a, b) => Number(a) + Number(b))
      );
    } else if (select === "average") {
      setCalculation(
        numArr.reduce((a, b) => Number(a) + Number(b)) / numArr.length)
    } else if (select === "mode") {
      const obj = {};
      let highestValue = 0;
      let highestValueKey = -Infinity;

      numArr.forEach( number => {
        if(!obj[number]){
          obj[number] = 1
        } else{
          obj[number] += 1
        }
      })

      for(let key in obj){
        const value = obj[key];
        if(value > highestValue){
          highestValue = value;
          highestValueKey = key;
        }
      }
      setCalculation(Number(highestValueKey))
    }

    setNumbers('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="values"
        name="values"
        type="text"
        value={numbers}
        onChange={handleNumbers}
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
