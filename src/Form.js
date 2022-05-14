import React from 'react'
import './Form.css'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      operation: '',
      result: '',
      clear: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let { userInput, operation } = this.state

    let array = userInput.split(',').map((ele) => Number(ele))
    let sum = array.reduce((arr, curr) => arr + curr, 0)
    let average = sum / array.length

    if (!array.length || typeof userInput !== 'number') {
      this.setState({ result: 'Invalid input.', userInput: '' })
    }

    if (operation === 'sum') {
      this.setState({ result: sum, clear: '' })
    } else if (operation === 'average') {
      this.setState({ result: average, clear: '' })
    } else if (operation === 'mode') {
      let object = {}
      let highestValue = 1
      let highestValuesKey = -1

      for (let arr of array) {
        if (object[arr]) {
          object[arr] += 1
        } else {
          object[arr] = 1
        }
      }

      Object.keys(object).forEach((key) => {
        let value = object[key]
        if (value > highestValue) {
          highestValue = value
          highestValuesKey = key
          this.setState({ result: highestValuesKey, clear: '' })
        }
      })
    }
  }

  handleUserChange = (event) => {
    const { value } = event.target
    this.setState({ userInput: value })
  }

  handleOperationChange = (event) => {
    const { value } = event.target
    this.setState({ operation: value })
  }

  render() {
    const { userInput, operation, result } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            id='values'
            name='values'
            type='text'
            value={userInput}
            onChange={this.handleUserChange}
          />
          <select
            id='operation'
            name='operation'
            value={operation}
            onChange={this.handleOperationChange}
          >
            <option value=''></option>
            <option value='sum'>sum</option>
            <option value='average'>average</option>
            <option value='mode'>mode</option>
          </select>
          <button type='submit'>Calculate</button>
        </form>
        <p>{result}</p>
      </div>
    )
  }
}

export default Form
