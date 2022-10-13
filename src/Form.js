import React from 'react';
import { useState } from 'react';
import './Form.css';

function Form({ setResult }) {
  const [input, setInput] = useState('');
  const [selectOption, setSelectOption] = useState('');
  const [error, setError] = useState(false);

  function doMath(userInput, userOption) {
    let value = input.split(',');
    let num = 0;
    let doReduce = value.reduce((curr, acc) => {
      // console.log(curr);
      // console.log(acc);
      return Number(curr) + Number(acc);
    }, num);
    // console.log(doReduce);
    console.log(userInput);
    if (userInput === '' || userOption === '' || isNaN(doReduce)) {
      return 'Invalid input.';
    }

    if (userOption === 'sum') {
      return doReduce;
    } else if (userOption === 'average') {
      return doReduce / value.length;
    } else if (userOption === 'mode') {
      const obj = {};
      let occurrence = 0;
      let objKey;

      value.forEach((i) => {
        if (!obj[i]) {
          obj[i] = 1;
        } else {
          obj[i] += 1;
        }
      });
      console.log(obj);

      for (let key in obj) {
        // console.log(obj[key]);
        // console.log(occurrence);
        if (obj[key] > occurrence) {
          occurrence = obj[key];
          objKey = key;
          // console.log(occurrence);
          console.log(objKey);
        }
      }

      return objKey;
    }
  }

  function reset() {
    setInput('');
    setSelectOption('');
  }
  function handleSubmit(e) {
    e.preventDefault();
    setResult(doMath(input, selectOption));

    if (doMath(input, selectOption) !== 'Invalid input.') {
      reset();
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        className={error ? 'error' : null}
        onChange={(e) => setInput(e.target.value)}
        id="values"
        name="values"
        type="text"
        value={input}
      />
      <select
        className={error ? 'error' : null}
        value={selectOption}
        onChange={(e) => setSelectOption(e.target.value)}
        id="operation"
        name="operation"
      >
        <option value=""></option>
        <option value="sum" id="sum">
          sum
        </option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
}

export default Form;
