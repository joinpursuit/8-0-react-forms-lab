import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      value:"",
      operator:"",
      result:null
    }
  }
  handleOnSubmit=(e)=>{
    e.preventDefault();
    const newArr=this.state.value.split(",");
    if(!newArr.length || !this.state.operator) this.setState({result:"Invalid input."});
    else{
      if(this.state.operator==="sum") this.setState({result:newArr.reduce((a,b)=>Number(a)+Number(b))}) ;
      if(this.state.operator==="average") this.setState({result:(newArr.reduce((a,b)=>Number(a)+Number(b)))/newArr.length}) ;
      if(this.state.operator==="mode") {
        const newObj={}
        for(let num of newArr){
          if(num in newObj) newObj[num]++;
          else newObj[num]=1;
        }
        const maxValuesPair=Object.entries(newObj).sort((a,b)=>{
          if(a[1]>b[1]) return -1;
          else if(a[1]<b[1]) return 1;
          else return 0;
        });
        this.setState({
          result:Number(maxValuesPair[0][0])
        })
      }
     

    }

  }
  handleSelectChange=(e)=>{
    this.setState({
      operator:e.target.value
    })
  }
  handleUserInput=(e)=>{
    
    this.setState({
      value:e.target.value,
    })
  }
  render() {
    const {value,operator}=this.state;
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form val={value} oper={operator} onChildSubmit={this.handleOnSubmit} onSelection={this.handleSelectChange} onUserInput={this.handleUserInput}/>
        <section id="result">
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
