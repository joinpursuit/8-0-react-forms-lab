import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const { setResult } = props;

  const [numbers, setNumbers] = useState('');
  const [error, setError] = useState('');

  const handleNumbers = (event) => {
    const { value } = event.target;
    setNumbers(value);
  };

  const [select, setSelect] = useState('');

  const handleSelect = (event) => {
    const { value } = event.target;
    setSelect(value);
  };

  const handleSubmit = (event) => { 
    event.preventDefault();
    const numArray = numbers.split(",");//splits the commas

    numArray.forEach(num => {
      if(!Number(num)){
        setResult('Invalid input.');
        setError('error');
      }})

    if(numbers === ''){
      setResult('Invalid input.')
    }else{
      if (select === "sum") {
        numArray.forEach(num => {
          if(!Number(num)){
            setResult('Invalid input.');
            setError('error');
          } else{
            setResult(numArray.reduce((a, b) => Number(a) + Number(b)));
            setNumbers('');
            setSelect('');
            setError('');
          }
        });
      } else if (select === "average") {
        numArray.forEach(num => {
          if(!Number(num)){
            setResult('Invalid input.');
            setError('error');
          } else{
            setResult(numArray.reduce((a, b) => Number(a) + Number(b)) / numArray.length);
            setNumbers('');
            setSelect('');
            setError('');
          }
        });
      } else if (select === "mode") {
        numArray.forEach(num => {
          if(!Number(num)){
            setResult('Invalid input.');
            setError('error');
          } else{
            setResult(numArray.reduce((a, b) => Math.max(Number(a), Number(b))));
            setNumbers('');
            setSelect('');
            setError('');
          }
        })
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="values"
        name="values"
        type="text"
        value={numbers}
        onChange={handleNumbers}
        class={error}
      />
      <select
        id="operation"
        name="operation"
        value={select}
        onChange={handleSelect}
        class={error}
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