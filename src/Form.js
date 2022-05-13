import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();

    // Setting the STARTING state to an empty string
    this.state = {
      userInput: "",
      operation: "",
      //sum: 0,
      hasError: false,
      textError: false,
      selectError: false,
    };
  }

  //This is changing the value of whatever is inputted into the FORM

  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  handleClick = () => {
    this.setState({
      sum: this.state.sum + this.handleChange,
    });
  };

  handleSelectChange = (e) => {
    const { value } = e.target;
    this.setState({
      operation: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { userInput, operation } = this.state;

    if (userInput === "") {
      this.setState({ textError: true });
    } else {
      this.setState({ textError: false });
    }

    if (operation === "sum") {

      const nums = userInput.split(",").map((num) => Number(num));

      let sum = 0;

      nums.forEach((num) => (sum += num));

      this.props.afterSubmit(sum);

      this.setState({ SelectError: false });
    } else if (operation === "average") {
      const nums = userInput.split(",").map((num) => Number(num));

      let sum = 0;

      nums.forEach((num) => (sum += num));

      this.props.afterSubmit(sum / nums.length);

      this.setState({ selectError: false });
    } else if (operation === "mode") {
      const nums = userInput.split(",").map(Number);
      let answer = nums[0];
      const counts = {};
      nums.forEach((num) => {
        if (counts[num]) {
          counts[num]++;
        } else {
          counts[num] = 1;
        }
      });

      Object.keys(counts).forEach((key) => {
        if (counts[key] > counts[answer]) {
          answer = key;
        }
      });

      this.props.afterSubmit(answer);
      this.setState({ selectError: false });
    } else {
      this.setState({ selectError: true });
    }
  };

  render() {
    return (
<>
        <form>
          <label htmlFor="userInput">{this.props.name}</label>
          <input
            id="values"
            name="values"
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
            className={this.state.textError ? "error" : ""}
          />

          <p>{this.state.textError && "Invalid input."}</p>

          <select
            id="operation"
            name="operation"
            //value={operation}
            onChange={this.handleSelectChange}
            className={this.state.selectError ? "error" : ""}
          >
            <option value=""></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>

          <p>{this.state.selectError && "Invalid input."}</p>

          <button type="submit" onClick={this.handleSubmit}>
            Calculate
          </button>
        </form>
      </>
    );
  }
}
export default Form;