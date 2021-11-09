import React from "react";
import "./Form.css";

let invalid = true
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      result: "",
      selector: "",
    };
  }

  UserInput = (props) => {
    let value = props.target.value
    this.setState({
      input: value,
    });
  };

  functionChange = (props) => {
    let value = props.target.value
    this.setState({
      selector: value
    });
  };

  changes = (props) => {
    props.preventDefault();
      if (this.state.selector === "sum") {
        this.props.prompt.setState({
          result: this.state.input.split(",").reduce((previous, current) => Number(previous) + Number(current))
        })
      }
      else if (this.state.selector === "average") {
        this.props.prompt.setState({
          result:  this.state.input.split(",").reduce((current, previous) => Number(current) + Number(previous)) / this.state.input.split(",").length
        })
      }
      else if (this.state.selector === "mode") {
        const array = this.state.input.split(",")
        const modeList = {}
        
        array.forEach(element => modeList[element] = ++modeList[element] || 1)
        
        let i;
        for(let modes in modeList) {
          if(modeList[modes] > modeList[i] || !modeList[i]) {
            i = modes
          }
        }
        this.props.prompt.setState({
          result: i
        })
      }
       else {
        if(invalid) {
          this.props.prompt.setState({
            result: "Invalid input."
          });
        }
      }
    }

  render() {
    return (
      <>
        <form
          onSubmit={this.changes}>
          <input
          id="values"
          name="values"
          type="text"
          value={this.state.input}
          onChange={this.UserInput}/>
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