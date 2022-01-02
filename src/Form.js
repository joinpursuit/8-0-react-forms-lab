import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: [],
      formula: "",
      result: ""
    };
  }

  handleInputChange = (e) => {
    let user = e.target.value
    this.setState({
      input: user.split(",").map((i) => Number(i))
    });
  }

  handleFormChange = (e) => {
    this.setState({
      formula: e.target.value
    });
  }

  handleError = (e) => {
    e.preventDefault();
    switch (this.state.formula) {
    case "sum": 
    this.setState({
    result: this.state.input.reduce((a, b) => a + b),
    });

    break;
    case "average": 
    this.setState({
    result: this.state.input.reduce((a, b) => a +b) / 
    this.state.input.length,
    });

    break;
    case "mode": 
    let mode = [];
    let nums = {};

    this.state.input.forEach((num) => 
    nums[num] ? (nums[num] +=1) : (nums[num] = 1) && "Invalid input."
    );

    let total = 0;
    for(let num in nums) {
    if(Number(nums[num]) > total) {
    total = Number(nums[num])
    mode = [num];
    } else if (
    Number(nums[num]) === total) {
    mode.push(num);
    }
  }
    this.setState({
    result: mode.join()
    });
    break;
    default:

    this.setState({
    result: "Invalid input."
    })
  };
}

  render() {
    return (
    <>
    <form>
    <input id="values" name="values" type="text" onChange={ this.handleInputChange } />
    <select id="operation" name="operation" onChange={ this.handleFormChange } >
    
    <option value=""></option>
    <option value="sum">sum</option>
    <option value="average">average</option>
    <option value="mode">mode</option>
    
    </select>
    <button type="submit" onClick={ this.handleError }>Calculate</button>
    </form>
    <div>

    <p>{ this.state.input }</p>
    <p>{ this.state.result }</p>

    </div>
    </>
  )};
}

export default Form;
