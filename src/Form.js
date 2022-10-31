import React , {useState} from "react";
import "./Form.css";

function Form( {setSubmit} ) {

  const [selectOption, setSelectOption] = useState('')
  const [input, setInput] = useState('')
  const [err, setErr] = useState(false);

  function calculateNums() {
    const operationArr = input.split(",");
    const i = 0;
    const result = operationArr.map((num) => Number(num)).reduce((acc, el) => {
        return (acc += el);
      }, i);

    if (input === "" || selectOption === "" || isNaN(result)) {
      return "Invalid input.";
    }

    if (selectOption === "sum") {
      return result;

    } else if (selectOption === "average") {
      return result / operationArr.length;
    } else if (selectOption === "mode") {
      let obj = {};
      operationArr.map((num) => {
        if (!obj[num]) {
          obj[num] = 1;
        } else {
          obj[num] += 1;
        }
      });
      console.log(obj);
      let mode = 0;
      let x;
      for (let key in obj) {
        if (obj[key] > mode) {
          mode = obj[key];
          x = key;
        }
      }
      console.log(mode);
      console.log(x);
      return x;
    }
  }
  function resetForm() {
    setInput("");
    setSelectOption("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(calculateNums());
    if (calculateNums(input, selectOption) !== "Invalid input.") {
      resetForm();
      setErr(false);
    } else {
      setErr(true);
    }
  }
  return (
       <form onSubmit={(event) => handleSubmit(event)}>
      <input
        className={err ? "error" : null}
        id="values"
        name="values"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <select
        className={err ? "error" : null}
        id="operation"
        name="operation"
        value={selectOption}
        onChange={(e) => {
          setSelectOption(e.target.value);
        }}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button className="results" type="submit">Calculate </button>
    </form>
  );
}

export default Form;
