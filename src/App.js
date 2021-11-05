import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      operation: '',
      result: '',
    }
  }

  onUserSubmit = (event) => {
    event.preventDefault()

    if(!event.target.values.value.length || event.target.values.value.match(/[a-z]/)){
      this.setState({result: "Invalid input."})
    } else if (this.state.operation === "sum"){
      this.addition(event.target.values.value)
    } else if (this.state.operation === "average"){
      this.findAverage(event.target.values.value)
    } else if (this.state.operation === "mode"){
      this.getMode(event.target.values.value)
    }

    this.setState({operation: ''})
    event.target.reset()
  }

  addition = (string) => {
    this.setState({result: string.split(',').reduce((a, b)=> Number(a) + Number(b))})
  }

  findAverage = (string) => {
    const length = string.split(',').length
    console.log(length)
    this.setState({result: (string.split(',').reduce((a, b) => Number(a) + Number(b)))/length})
  }

  getMode = (string) => {
    const obj = {

    }
    string.split(',').forEach(element => obj[element] = Number(obj[element]) + 1 || 1)

    let most;
    let lastNum = 0

    for(const key in obj){
      if(obj[key] > lastNum){
        most = key
        lastNum = obj[key]
      }
    }

    console.log(obj)
    console.log(most)
    this.setState({result: most})
  }

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form fun={this}/>
        <section id="result">
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
