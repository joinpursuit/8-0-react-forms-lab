import { useState } from "react";
import "./Form.css";

const Form = () => {

const [options, setOptions] = useState("");
const [sum, setSum] = useState(0);
const [average, setAverage] = useState(0);
const [mode, setMode] = useState(0);

const handleOptions = (event) => {
  setOptions(event.target.value)
}

const handleSum = (event) => {
  const { value } = event.target;
  setSum(value);
}

const handleAverage = (event) => {
  const { value } = event.target;
  setAverage(value);
}



  render() {
    return (
      <form>
        <input id="values" name="values" type="text" />
        <select id="operation" name="operation">
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default Form;
