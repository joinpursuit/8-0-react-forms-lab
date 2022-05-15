import React from "react";
import { useState } from "react/cjs/react.production.min";
import "./Form.css";

const Form = ({ setResult }) => {
  const [userInput, setUserInput] = useState("");
  const [selectOp, setSelectOp] = useState("");

  const handleUserInput = (e) => {
    const { value } = e.target;
    setUserInput(value);
  };

  const handleSelectOp = (e) => {
    const { value } = e.target;
    setSelectOp(value);
  };

  const handleSubmit = (e) => {
    const arr = userInput.split(",").map(i => Number(i));
    const sum = arr.reduce((a, b) => (a + b));
    const average = Math.floor(sum / arr.length);
  }

  e.preventDefault();




  return (
    <form onSubmit={ handleSubmit }>
      <input id="values" name="values" type="text" onChange={ handleUserInput } value={ userInput }/>
      <select id="operation" name="operation" onChange={ handleSelectOp } value={ selectOp }>
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
}





// class Form extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       userInput: [],
//       operation: " ",
//       result: " ",
//     }
//   }

//   userInputHandle = (e) => {
//     this.setState({
//       userInput:
//       e.target.value.split(",")
//       })
//     }
//   }

//   operationHandle = (e) => {
//     this.setState({
//       operation:
//       e.target.value,
//     })
//   }


  // render() {
  //   const { result, userInput, operation } = this.state;
  //   return (
  //     <form>
  //       <input id="values" name="values" type="text" />
  //       <select id="operation" name="operation">
  //         <option value=""></option>
  //         <option value="sum">sum</option>
  //         <option value="average">average</option>
  //         <option value="mode">mode</option>
  //       </select>
  //       <button type="submit">Calculate</button>
  //     </form>
  //   );
  // }
// }

export default Form;
