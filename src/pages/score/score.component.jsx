import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { RefreshRounded } from "@material-ui/icons";

import "./score.styles.css";

const ScorePage = ({ location }) => {
  const { questions } = location;
  if (questions === undefined) {
    window.location.replace("/");
  }

  const [score, setScore] = useState();

  useEffect(() => {
    console.log(questions);
    const correctAnswers = questions.filter(
      (question) => question.selectedOption === question.answer
    );

    setScore(correctAnswers.length);
  }, [questions]);

  return (
    <div className='score-page'>
      <h2 style={{ color: "#fff" }}>Score</h2>
      <div className='score_container'>
        <p className='score'>{`${score} / ${questions.length}`}</p>
        <CircularProgress
          className='circular_progress'
          style={{ color: "#2ABFC7" }}
          value={100}
          size={180}
          variant='static'
        />
      </div>

      <div
        onClick={() => window.location.replace("/")}
        className='continue_button'
      >
        <RefreshRounded style={{ fontSize: 30 }} />
      </div>
    </div>
  );
};

export default ScorePage;
