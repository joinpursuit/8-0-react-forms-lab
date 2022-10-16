import React from "react";
import "./Form.css";
import {useState} from "react";

function Form({setOutput}) {
  const [input, setInput] = useState("");
  const [op, setOp] = useState();
  const [hasError, setError] = useState(false);

  function onTextInputChange(param){
    let value = param.target.value;
    setInput(value);
  }

  function onOperatorChange(e){
    let value = e.target.value;
    setOp(value);
  }

  function calculate(e){
    e.preventDefault();

    let check = input.split(",").every(i => {
      if(Number(i) === 0){
        return true;
      }
      if(Number(i) === NaN){
        return false;
      }
      if(Number(i)){
        return true;
      }
    })

    if(!check || !op){
      setError(true);
      return setOutput("Invalid input.")
    }

    if(op === "sum"){
      let total = 0;
      input.split(",").map(i => total+=Number(i));
      if(check){
      setOutput(total);
      setInput("");
      setOp("");
      setError(false)
      }
    }
    else if(op === "average"){
      let average = 0;
      input.split(",").map(i => average+=Number(i));
      if(check){
      setOutput(average/(input.split(",").length));
      setInput("");
      setOp("");
      setError(false)
      }
    }
    else if (op === "mode"){
      let value = input.split(",").map(i => Number(i)).sort();
      let count = 1;
      let modeCount = -1;
      let current = value[0];
      let currentMode = value[0]
      for(let i = 1; i < value.length; i++){
        if(value[i] !== current){
          if (modeCount < count) { 
            modeCount = count;
            currentMode = current;
          }
          current = value[i];
          count = 1;
        }

        else {
          count++
        }
      }
      if(check){
        setOutput(currentMode);
        setInput("");
        setOp("");
        setError(false)
      }
      
    }
  }

  return (
    <form>
      <input className={hasError ? "error" : ""} id="values" name="values" type="text" value={input} onChange = {onTextInputChange}/>
      <select className={hasError ? "error" : ""} id="operation" name="operation" value={op} onChange={onOperatorChange}>
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit" onClick={calculate}>Calculate</button>
    </form>
  );
}

export default Form;
