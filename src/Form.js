import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      result: "",
      dropDown: ""
    };
  }

  handleUserInput = (event) => {
    this.setState({
      userInput: event.target.value
    });
  };

  functionChange = (event) => {
    this.setState({
      dropDown: event.target.value,
    });
  };

  function = (event) => {
    event.preventDefault();
      if (this.state.dropDown === "sum") {
        this.props.fun.setState({
          result: this.state.userInput.split(",").reduce((a, b) => Number(a) + Number(b))
        })
      }
      else if (this.state.dropDown === "average") {
        this.props.fun.setState({
          result:  this.state.userInput.split(",").reduce((a, b) => Number(a) + Number(b)) / this.state.userInput.split(",").length
        })
      }
      else if (this.state.dropDown === "mode") {
        const obj = {}
        const arr = this.state.userInput.split(",")
        
        arr.forEach(element => obj[element] = ++obj[element] || 1)
        
        let more;
        for(const key in obj) {
          if(obj[key] > obj[more] || !obj[more]) {
            more = key
          }
        }
        this.props.fun.setState({
          result: more
        })
      }
       else {
        if(this.state.userInput.length === 0 || this.state.userInput !== Number) {
          this.props.fun.setState({
            result: "Invalid input."
          });
        }
      }
    }

  render() {
    return (
      <>
        <form
          onSubmit={this.function}>
          <input
          id="values"
          name="values"
          type="text"
          value={this.state.userInput}
          onChange={this.handleUserInput}/>
          <select
            id="operation"
            name="operation"
            onChange={this.functionChange}>
            <option value=""></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit">
            Calculate
          </button>
        </form>
      </>
    );
  }
}

export default Form;