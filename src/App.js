import React from "react";

import "./App.css";

import QuestionCard from "./components/question-card/question-card.component";
import { dummyData } from "./data/dummy-data";

const App = () => {
  return (
    <div className='App'>
      <QuestionCard questions={dummyData} timeout={15} />
    </div>
  );
};

export default App;
