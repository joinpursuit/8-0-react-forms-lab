import React, { useState } from "react";
import "./Form.css";

function Form({ result, setResult }) {
  const [textInput, setTextInput] = useState("");
  const [select, setSelect] = useState("");
  const [isBorken, setBorken] = useState("notBorken");

  function submit(e) {
    e.preventDefault();
    if (/[^\d,]/.test(textInput) || !select) {
      setBorken("error");
      setResult("Invalid input.");
    } else {
      const numArr = textInput.split(",").map((a) => Number(a));
      setTextInput('');
      setSelect('');
      setBorken("notBorken");
      if (select === "sum") {
        setResult(numArr.reduce((a, b) => a + b, 0));
      } else if (select === "average") {
        setResult(numArr.reduce((a, b) => a + b, 0) / numArr.length);
      } else if (select === "mode") {
        const store = {};
        numArr.forEach((num) =>
          store[num] ? (store[num] += 1) : (store[num] = 1)
        );
        setResult(Object.keys(store).sort((a, b) => store[b] - store[a])[0]);
      }
    }
  }

  return (
    <form onSubmit={submit}>
      <input
        className={isBorken}
        id="values"
        name="values"
        type="text"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <select
        className={isBorken}
        id="operation"
        name="operation"
        value={select}
        onChange={(e) => setSelect(e.target.value)}
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
