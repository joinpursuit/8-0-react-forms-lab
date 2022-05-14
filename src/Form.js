import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const { setResult } = props;

  const [numbers, setNumbers] = useState('');
  const [error, setError] = useState('');

  const handleNumbers = (e) => {
    const { value } = e.target;
    setNumbers(value);
  };

  const [select, setSelect] = useState('');

  const handleSelect = (e) => {
    const { value } = e.target;
    setSelect(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numArr = numbers.split(",");

    numArr.forEach(num => {
      if(!Number(num)){
        setResult('Invalid input.');
        setError('error');
      }})

    if(numbers === ''){
      setResult('Invalid input.')
    }else{
      if (select === "sum") {
        numArr.forEach(num => {
          if(!Number(num)){
            setResult('Invalid input.');
            setError('error');
          } else{
            setResult(numArr.reduce((a, b) => Number(a) + Number(b)));
            setNumbers('');
            setSelect('');
            setError('');
          }
        });
      } else if (select === "average") {
        numArr.forEach(num => {
          if(!Number(num)){
            setResult('Invalid input.');
            setError('error');
          } else{
            setResult(numArr.reduce((a, b) => Number(a) + Number(b)) / numArr.length);
            setNumbers('');
            setSelect('');
            setError('');
          }
        });
      } else if (select === "mode") {
        numArr.forEach(num => {
          if(!Number(num)){
            setResult('Invalid input.');
            setError('error');
          } else{
            setResult(numArr.reduce((a, b) => Math.max(Number(a), Number(b))));
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
