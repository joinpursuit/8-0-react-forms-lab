import React, {useState} from "react";
 import Form from "./Form";
 import "./App.css";

 class App extends React.Component {
   render() {
 const App = () => {
   const [answer, setAnswer] = useState("");
     return (
       <main>
         <p>Enter each number in the array, separated by a ','</p>
         <Form setAnswer={ setAnswer }/>
         <section id="result">
           <p>{ answer }</p>
         </section>
       </main>
     );
   }
 }


 export default App;