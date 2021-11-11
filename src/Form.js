import React from "react";
import "./Form.css";

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			error: "",
			inputField: "",
			total: "",
			operation: "",
		};
	}

	//  When you click calculate
	handleFormSubmit = (e) => {
		const { operation, inputField } = this.state;
		e.preventDefault();
		// turning the input fields to array and then to numbers
		let turningArr = this.state.inputField.split(",").map((i) => Number(i));

		// for the empty string && wrong input
		if (inputField === "" || inputField !== Number) {
			this.setState({
				error: "Invalid input.",
			});
		}
		// Sum
		if (operation === "sum") {
			this.setState({
				error: "",
				total: turningArr.reduce((acc, curr) => {
					return acc + curr;
				}),
			});
		}

		// Average
		if (operation === "average") {
			this.setState({
				error: "",
				total: turningArr.reduce((a, b) => a + b) / turningArr.length,
			});
		}

		const mode = (a) =>
			Object.values(
				a.reduce((count, e) => {
					if (!(e in count)) {
						count[e] = [0, e];
					}
					count[e][0]++;
					return count;
				}, {})
			).reduce((a, v) => (v[0] < a[0] ? a : v), [0, null])[1];

		// Mode
		if (operation === "mode") {
			this.setState({
				error: "",
				total: mode(turningArr),
			});
		}
	};

	// for the input field
	handleNumberInput = (e) => {
		this.setState({
			inputField: e.target.value,
		});
	};

	// for when we click some type of operation
	changeOperation = (e) => {
		console.log("it has changed ");
		this.setState({
			operation: e.target.value,
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleFormSubmit}>
					<input
						id="values"
						name="values"
						// value={this.state.inputField}
						type="text"
						onChange={this.handleNumberInput}
					/>
					<select
						id="operation"
						name="operation"
						value={this.state.operation}
						onChange={this.changeOperation}
					>
						<option value=""></option>
						<option value="sum">sum</option>
						<option value="average">average</option>
						<option value="mode">mode</option>
					</select>
					<button type="submit">Calculate</button>
				</form>
				<div>{this.state.total}</div>
				<div>{this.state.error}</div>
			</div>
		);
	}
}

export default Form;
