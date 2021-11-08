import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
constructor(){
  super();
  this.state = {
    result: '',
  }
}

getResult = (userInput, operation) =>{
   const number = userInput.split(',').map(str => (Number(str)))
   console.log(Number.isNaN(userInput))
  if(userInput === "" || operation === "" || isNaN(userInput)){
   
this.setState({
  result: 'Invalid input.'
})
  } else if(operation === "sum"){
  const  sum = (arr) =>arr.reduce((previousValue, currentValue) => previousValue + Number(currentValue),0);
this.setState({
  result:sum(number),
})
  } else if(operation=== 'average'){
   const average = (arr) =>arr.reduce((previousValue, currentValue) => previousValue + Number(currentValue),0) / arr.length;
  this.setState({
    result: (average(number)).toFixed(2)
  })
  } else {
const mode = (arr) => {
        const hashMap = {};
        for (let el of arr) {
          if (hashMap[el] !== undefined) {
            hashMap[el] = hashMap[el] + 1;
          } else {
            hashMap[el] = 1;
          }
        }
        let result = 0;
        let max = -Infinity;
        for (let key in hashMap) {
          if (hashMap[key] > max) {
            max = hashMap[key];
            result = key;
          }
        }
        return result;
      }
      this.setState({
        result:mode(number)
      })
  }
    
    }

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form getResult={this.getResult}/>
        <section id="result">
          <p> {this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
