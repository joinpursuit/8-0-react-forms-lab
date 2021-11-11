import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      userInput: [],
      operation: '',
      result: '',
    }
  }

  handleUserInput=(event) => {
    this.setState({
      userInput: event.target.value.split(','),
    })
  }

  handleOperationChange=(event) => {
    this.setState({
      operation: event.target.value,
    })
  }

  handleFormSubmit=(event) => {
    const { userInput, operation } = this.state;
    event.preventDefault();

    if (operation === ''){
      this.setState({
        result: 'Invalid input.',
      })
    } else if (operation === "sum") {
      this.setState({
        result: userInput.reduce((a, b) => Number(a) + Number(b)),
        userInput: [],
        operation: '',
      })
    } else if (operation === "average") {
      this.setState({
        result: userInput.reduce((a, b) => Number(a) + Number(b)) / userInput.length,
        userInput: [],
        operation: '',
      })
    } else if (operation === "mode") {
      let modeObj = {};
      let mode = 1;
      for (let num of userInput) {
        if (!modeObj[num]) {
          modeObj[num] = 1;
        } else {
          modeObj[num] += 1;
        }
      }

      for (let num in modeObj) {
        if (modeObj[num] > mode) {
          mode = num;
        }
      }

      this.setState({
        result: mode,
        userInput: [],
        operation: '',
      })
    }
  }

  render() {
    const { result, userInput, operation } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} className="form-container">
          <input 
            id="values"
            name="values"
            type="text"
            value={userInput}
            onChange={this.handleUserInput}
          />
          <select
            id="operation"
            name="operation"
            value={operation}
            onChange={this.handleOperationChange}
          >
            <option value=""></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
        <p id="result">{result}</p>
      </div>
    );
  }
}

export default Form;



// calculatesResult=() => {
//   let sum = this.handleOperationChange === 'sum';
//   let average = this.handleOperationChange === 'average';
//   let mode = this.handleOperationChange === 'mode';

//   switch(this.handleOperationChange) {
//     case sum:
//       console.log(`sum operation picked`)
//       break;
//     case average:
//       console.log(`average operation picked`)
//       break;
//     case mode:
//       console.log(`mode operation picked`)
//       break;
//     default:
//       console.log(`Invalid operation.`);
//   }
// }