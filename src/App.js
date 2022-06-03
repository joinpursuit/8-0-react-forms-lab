import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

const App = () => {
  const [total, setTotal] = useState(0);
  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      {/* passing in total as a prop to the form Component */}
      <Form total={total} />
      <section id="result">
        <p>{total}</p>
      </section>
    </main>
  );
};

export default App;
