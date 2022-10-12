import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {
  const [selectOpt, setSelectOpt] = useState("");

  const [input, setInput] = useState("");

  return (
    <form type="submit">
      <input
        id="values"
        name="values"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <select
        id="operation"
        name="operation"
        value={selectOpt}
        onChange={(e) => setSelectOpt(e.target.value)}
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
