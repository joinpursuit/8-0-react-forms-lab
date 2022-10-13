import React from "react";
import { useState } from "react";
import "./Form.css";

function Form({ setResult }) {
  const [input, setInput] = useState("");

  const [selectOpt, setSelectOpt] = useState("");

  const [error, setError] = useState(false);

  function handleInput(e) {
    const val = e.target.value;
    setInput(val);
  }

  function inputConvert(inp, opt) {
    const array = inp.split(",");
    let answer = 0;
    let total = array.reduce((a, b) => +a + +b, answer);

    if (inp === "" || opt === "") {
      return "Invalid input.";
    }

    if (opt === "sum") {
      return total;
    }

    if (opt === "average") {
      const avg = total / array.length;
      return avg;
    }

    if (opt === "mode") {
      const obj = {};
      array.map((acc) => {
        if (!obj[acc]) {
          obj[acc] = 1;
        } else {
          obj[acc] += 1;
        }
      });

      let modeNum = 0;
      let modeKey;
      for (let key in obj) {
        modeNum = obj[key];
        modeKey = key;
      }
      return modeKey;
    }
  }

  function reset() {
    setInput("");
    setSelectOpt("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setResult(inputConvert(input, selectOpt));
    if (inputConvert(input, selectOpt) !== "Invalid input.") {
      setError(false);
      reset();
    } else {
      setError(true);
    }
  }

  return (
    <form
      type="submit"
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <input
        id="values"
        name="values"
        type="text"
        value={input}
        onChange={(e) => {
          handleInput(e);
        }}
        className={error ? "error" : null}
      />
      <select
        id="operation"
        name="operation"
        value={selectOpt}
        onChange={(e) => setSelectOpt(e.target.value)}
        className={error ? "error" : null}
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
