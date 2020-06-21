import React from "react";
import { dummyData } from "../../data/dummy-data";
import QuestionCard from "../../components/question-card/question-card.component";

const QuestionsPage = ({ location }) => {
  const { topic } = location;
  if (topic === undefined) {
    window.location.replace("/");
  }

  return (
    <div className='App'>
      <QuestionCard data={dummyData} topic={topic} timeout={15} />
    </div>
  );
};

export default QuestionsPage;
