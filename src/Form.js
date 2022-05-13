import React, { useState } from "react";
import "./Form.css";


const Form = (props) => {
  const [textInput, setTextInput] = useState("");
  const [selectedOperation, setSelectedOperation] = useState("");
  const [result, setResult] = useState("");
  const [className, setErrorClassName] = useState("");

  const handleTextInput = (e) => {
    const { value } = e.target;
    setTextInput(value);
  };

  const handleSelectedOperation = (e) => {
    const { value } = e.target;
    setSelectedOperation(value);
  };

  const handleResult = () => {
    props.handleResult(result);
  };

  const clearFields = () => {
    setTextInput('');
    setSelectedOperation('');
    setErrorClassName('');
  };

  const handleSubmit = (e) => {
    const myArray = textInput.split(',').map(i => i * 1);
    const sum = myArray.reduce((a, b) => (a + b));
    const average = Math.floor(sum / myArray.length);
    const mode = getMode(myArray);

    e.preventDefault();

    if (!textInput || !selectedOperation || Number.isNaN(myArray[0])) {
      setResult(`Invalid input.`);
      setTextInput(textInput);
      setErrorClassName('error');

    } else if (textInput && selectedOperation === "sum") {
      setResult(sum);
      clearFields();

    } else if (textInput && selectedOperation === "average") {
      setResult(average);
      clearFields();

    } else {
      setResult(mode);
      clearFields();
    }
  };

  const getMode = (myArray) => {
    let myModeObj = {};
    let curentKey;
    let highestCount = 0;

    myArray.forEach(el => {
      if (!myModeObj[el]) {
        myModeObj[el] = 1;
      } else {
        myModeObj[el] += 1;
      }
    });

    Object.entries(myModeObj).forEach(([k, v]) => {
      if (v > highestCount) {
        curentKey = k;
        highestCount = v;
      }
    });
    return curentKey;
  };


  return (
    <form onSubmit={handleSubmit} >
      <input id="values" className={className} name="values" type="text" onChange={handleTextInput} value={textInput} />
      <select id="operation" name="operation"
        onChange={handleSelectedOperation}
        value={selectedOperation}
        className={className}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit" onClick={handleResult()}>Calculate
      </button>
    </form>
  );
}
export default Form;