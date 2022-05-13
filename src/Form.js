import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(){
    super();

    this.state = {
      values: null,
      action: null,
      valid: false,
    }
  }

  handleOperationChange = (event) => {
    const { value } = event.target

    this.setState({
      action: value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { operation , values } = event.target

    if (operation.value && values.value){
      document.getElementById("values").setAttribute("class", "")
      document.getElementById("operation").setAttribute("class", "")

      this.setState({
        values: values.value,
        valid: true,
      })

      this.sendResults(values.value, operation.value)

      document.querySelector("form").reset()

    } else {
      document.getElementById("values").setAttribute("class", "error")
      document.getElementById("operation").setAttribute("class", "error")
      document.getElementById("result").textContent = "Invalid input."

      this.setState({
        valid: false,
      })
    }
  }

  sendResults = (values, operation) => {
    const sumOfValues = values.split(",").reduce( (acc, num) => (parseFloat(acc) + parseFloat(num)))
    console.log(operation)
    let result = 0

    if (operation === 'sum'){
      result = sumOfValues
    } else if (operation === "average"){
      result = (sumOfValues / values.split(",").length).toFixed()
    }
    // } else if (operation === "mode"){
    //   const counts = new Object
    //   result = values.split(",").forEach(function(e) {
    //     if(counts[e] === undefined) {
    //       counts[e] = 0
    //     }
    //     counts[e] += 1
    //   })
    //}

    document.getElementById("result").textContent = result
  }


  render() {
    const {values, action, valid } = this.state

    return (
      <form onSubmit={this.handleFormSubmit}>
        <input id="values" name="values" type="text"/>
        <select onChange={this.handleOperationChange} id="operation" name="operation" >
          <option value=""></option>
          <option value='sum'>sum</option>
          <option value='average'>average</option>
          <option value='mode'>mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default Form;
