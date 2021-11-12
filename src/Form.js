import React from "react";
import "./Form.css";

class Form extends React.Component {
 

 


  
  
  
  
  render() {
    let {  calculate, userInput , handleUserInput, userSelectOption, handleSelectChange}= this.props
    // console.log(this.state.userSelectOption)
    // console.log(result)
    // console.log(handleUserInput)
    // console.log(userInput)
    // console.log(this.props.handleSum.reduce((previousValue,currentValue)=> previousValue+currentValue))
    // let total = ()=>this.handleSum(total)
    // let total = userInput.reduce((previousValue,currentValue)=> previousValue+currentValue)
    // console.log(total)



    return (
      <form onSubmit={calculate}>
        <input id="values" name="values" type="text" value={userInput} onChange={handleUserInput}/>
        <select id="operation" name="operation" value={userSelectOption} onChange={handleSelectChange}>
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
