import React from "react";
import "./Form.css";

class Form extends React.Component {
	constructor() {
		super();

		this.state = {
			operation: "",
			result: "",
			nums: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		let numArr = this.state.nums.split(",").map((num) => Number(num));
		if (this.state.operation && this.state.nums) {
			if (this.state.operation === "sum") {
				this.setState({
					result: numArr.reduce((num, next) => {
						return num + next;
					}, 0),
				});
			} else if (this.state.operation === "mode") {
				let frequency = []; //an array of tally marks the highest tally mark index is the mode!
				numArr.forEach((num) => {
					frequency[num] ? (frequency[num] += 1) : (frequency[num] = 1);
				});
				let mode = numArr[0];
				for (let ind = 0; ind < frequency.length; ind++) {
					if (frequency[ind] > frequency[mode]) {
						mode = ind;
					}
				}
				this.setState({ result: mode });
			} else if (this.state.operation === "average") {
				this.setState({
					result:
						numArr.reduce((num, next) => {
							return num + next;
						}, 0) / numArr.length,
				});
			}
		} else {
			//set result to "Invalid input."
			this.setState({ result: "Invalid input." });
		}
	};
	handleOperation = (event) => {
		const { value } = event.target;
		this.setState({ operation: value });
	};
	handleNums = (event) => {
		const { value } = event.target;
		this.setState({ nums: value });
	};
	render() {
		const { operation, nums, result } = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						id="values"
						name="values"
						type="text"
						value={nums}
						onChange={this.handleNums}
					/>
					<select
						id="operation"
						name="operation"
						value={operation}
						onChange={this.handleOperation}
					>
						<option value=""></option>
						<option value="sum">sum</option>
						<option value="average">average</option>
						<option value="mode">mode</option>
					</select>
					<button type="submit">Calculate</button>
				</form>
				<p>{result}</p>
			</div>
		);
	}
}

export default Form;
