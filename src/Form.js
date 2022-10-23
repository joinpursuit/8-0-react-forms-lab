import React, {useState} from "react";
import "./Form.css";

function Form({ setResult }) {
  const [value, setValue] = useState("");
  const [operator, setOperator] = useState("");
  const invalidMsg = "Invalid input.";
  const [isError, setIsError] = useState(false);

  const showError = () => {
    setResult(invalidMsg);
    setIsError(true);
  };

  const findMod = (array) => {
    if (!array.length) return null;
    let mod = array[0];
    let modFreq = 1;
    for (let i = 0; i < array.length - 1; i++) {
      const item = array[i];
      let frequency = 1;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] === item) {
          frequency++;
        }
      }
      if (frequency > modFreq) {
        mod = item;
      }
    }
    return mod;
  };

  const calc = (e) => {
    e.preventDefault();
    setResult("");
    setIsError(false);
    const array = value.split(",");

    if (!operator || !array || !array.length) return showError();

    let result;
    switch (operator) {
      case "sum":
        result = array.reduce((accu, curr) => +accu + +curr, 0);
        break;
      case "average":
        result = array.reduce((accu, curr) => +accu + +curr, 0) / array.length;
        break;
      case "mode":
        result = findMod(array);
        break;
      default:
        return showError();
    }
    if (!result) return showError();
    else setResult(result);

    setValue("");
    setOperator("");
  };

  return (
    <form>
      <input
        id="values"
        name="values"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={isError && "error"}
      />
      <select
        id="operation"
        name="operation"
        value={operator}
        className={isError && "error"}
        onChange={(e) => setOperator(e.target.value)}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit" onClick={calc}>
        Calculate
      </button>
    </form>
  );
}

export default Form;
