import { useState } from "react";
import React from "react";
import "./Form.css";

  
  const Form = () => {
    const [input, setInput] = useState("");
    const [select, setSelect] = useState("");
    const [result, setResult] = useState("");
  
    const handleInput = (e) => {
      const { value } = e.target;
      setInput(value);
    };
    const handleSelect = (e) => {
      const { value } = e.target;
      setSelect(value);
    };
    const handleResult = (e) => {
      const { value } = e.target
      if(!input) {
        setResult(value = 'Invalid input.')
      }
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target;
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            id="values"
            name="values"
            type="text"
            onChange={handleInput}
            value={input}
          />
          <select
            id="operation"
            name="operation"
            onChange={handleSelect}
            value={select}
          >
            <option value=""></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
        <h3 onChange={handleResult}>{result}</h3>
        <p>{!input ? "" : "Invalid input."}</p>
        <p>{!input ? "Invalid input." : ""}</p>
      </div>
    );
  };
  
  export default Form;




// class Form extends React.Component {
//   render() {
//     return (
//       <form>
//         <input id="values" name="values" type="text" />
//         <select id="operation" name="operation">
//           <option value=""></option>
//           <option value="sum">sum</option>
//           <option value="average">average</option>
//           <option value="mode">mode</option>
//         </select>
//         <button type="submit">Calculate</button>
//       </form>
//     );
//   }
// }

// export default Form;
