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

		// for the empty string
		if (inputField === "" || inputField !== Number) {
			this.setState({
				error: "Invalid input.",
			});
		}

		//For not  a number
		if (inputField === "," || inputField === Number) {
			this.setState({
				error: "",
			});
		}

		// Sum
		if (operation === "sum") {
			this.setState({
				total: turningArr.reduce((acc, curr) => {
					return acc + curr;
				}),
			});
		}

		// Average
		if (operation === "average") {
			this.setState({
				total: turningArr.reduce((a, b) => a + b) / turningArr.length,
			});
		}

		// Mode
		if (operation === "mode") {
			this.setState({
				total: turningArr.reduce((acc, curr) => {
					return acc + curr;
				}),
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
