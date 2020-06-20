import React from "react";
import { dummyData } from "../../data/dummy-data";
import QuestionCard from "../../components/question-card/question-card.component";

const QuestionsPage = ({ location }) => {
  const { name, topic } = location;

  return (
    <div className='App'>
      <QuestionCard data={dummyData} topic={topic} timeout={15} />
    </div>
  );
};

export default QuestionsPage;
