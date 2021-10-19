import React, { useState } from "react";
import "./App.css";
import { QuestionPage } from "./components/template";
import { Percentage } from "./components/percentage";
function App() {
  return (
    <div className="App">
      <QuestionPage />
      <Percentage />
    </div>
  );
}

export default App;
/* <div className="res">Answer:{result}</div>
<input type="text" name="diagonal" onChange={setdata} id="diago" />? */
