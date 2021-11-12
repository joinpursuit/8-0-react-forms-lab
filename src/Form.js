import React from "react";
import "./Form.css";

class Form extends React.Component {
  render() {
    const { userInput, handleUserInput, handleClick, operation, handleOperationChange } = this.props;
    return (
        <form onSubmit={handleClick} className="form-container">
          <input className="error" id="values" name="values" type="text" value={userInput} onChange={handleUserInput} />
          <select className="error" id="operation" name="operation" value={operation} onChange={handleOperationChange}>
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


// handleFormSubmit = (event) => {
  //   const { userInput, operation } = this.state;
  //   event.preventDefault();
  //   if(operation === ""){
  //     this.setState({
  //       result: "Invalid input.",
  //     })
  //   }else if(operation === "sum"){
  //     this.setState({
  //       result: userInput.reduce((current, previous) => Number(current) + Number(previous)),
  //       userInput: [],
  //       operation: "",
  //     })
  //   }else if(operation === "average"){
  //     this.setState({
  //       result: userInput.reduce((current, previous) => Number(current) + Number(previous)) / userInput.length,
  //       userInput: "",
  //       operation: "",
  //     })
  //   }else if(operation === "mode"){
  //     let obj = {};
  //     let mode = 1;
  //     let number = userInput;
  //     console.log(number)
  //     for(let num of number){
  //       if(!obj[num]){
  //         obj[num] = 1;
  //       }else{
  //         obj[num] += 1;
  //       }
  //     }

  //     for(let num in obj){
  //       if(obj[num] > mode){
  //         mode = num;
  //       }
  //     }

  //     this.setState({
  //       result: mode,
  //       userInput: "",
  //       operation: "",
  //     });
  //   }
  // }
