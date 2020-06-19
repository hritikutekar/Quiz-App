import React, { useState, useEffect } from "react";

import "./question-card.styles.css";

import CustomButton from "../custom-button/custom-button.component";
import CustomCheckbox from "../custom-checkbox/custom-checkbox.component";
import CircularProgress from "@material-ui/core/CircularProgress";
import CustomSlider from "../custom-slider/custom-slider.component";

const QuestionCard = ({ questions, timeout }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [unAttendedQuestions, setUnAttendedQuestions] = useState(
    questions.length
  );
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(timeout * 60);

  const getUnAttendedQuestions = () => {
    const attentedQuestions = questions.filter(
      (question) => question.selectedOption === null
    );

    return attentedQuestions.length;
  };

  const timer = () => {
    setTime((prevState) => prevState - 1);
  };

  useEffect(() => {
    setInterval(timer, 1000);
  }, []);

  useEffect(() => {
    setSelectedOption(questions[questionIndex].selectedOption);
  }, [questionIndex, questions]);

  const nextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      if (selectedOption) {
        setUnAttendedQuestions(getUnAttendedQuestions);
      }
    }
  };

  const previousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      if (selectedOption) {
        setUnAttendedQuestions(getUnAttendedQuestions);
      }
    }
  };

  const onSelected = (option) => {
    questions[questionIndex].selectedOption = option;
    setSelectedOption(option);

    setUnAttendedQuestions(getUnAttendedQuestions);

    setProgress(
      (100 / questions.length) * (questions.length - getUnAttendedQuestions())
    );
  };

  function secondsToTime(e) {
    var m = Math.floor((e % 3600) / 60)
        .toString()
        .padStart(2, "0"),
      s = Math.floor(e % 60)
        .toString()
        .padStart(2, "0");

    return m + ":" + s;
  }

  return (
    <div className='question_card'>
      <div className='question_card__header'>
        <div className='section'>
          <div className='section_logo'>LOGO</div>
          <p className='section_title'>Section name</p>
        </div>
        <div className='progress'>
          <p className='progress_text'>Progress: {progress}% completed</p>
          <CustomSlider
            style={{ color: "#5636F8" }}
            value={progress}
            max={100}
            contentEditable={false}
            ThumbComponent={() => <div />}
          />
        </div>
      </div>

      <hr className='header_line' />

      <div className='question_card__info'>
        <p>{unAttendedQuestions} ANSWERS LEFT</p>
        <div className='time'>
          <p>TIME REMAINING</p>
          <div className='time_remaining__circle'>
            <p className='time_remaining__circle_count'>
              {secondsToTime(time)}
            </p>
            <CircularProgress
              className='circular_progress'
              style={{ color: "#2ABFC7" }}
              value={(100 / (timeout * 60)) * time}
              size={50}
              variant='static'
            />
          </div>
        </div>
      </div>

      <p className='question'>{questions[questionIndex].question}</p>
      <div className='option_container'>
        {questions[questionIndex].options.map((el) => (
          <div
            onClick={() => onSelected(el)}
            className={selectedOption === el ? "option active" : "option"}
          >
            <CustomCheckbox checked={selectedOption === el} />
            <p className='option_text'>{el}</p>
          </div>
        ))}
      </div>

      <div className='question_card__footer'>
        <CustomButton
          onClick={previousQuestion}
          title='Previous question'
          hide={questionIndex === 0}
        />

        <CustomButton
          onClick={nextQuestion}
          title='Next question'
          hide={questionIndex === questions.length - 1}
        />

        {unAttendedQuestions === 0 ? (
          <CustomButton onClick={nextQuestion} title='Submit' hide={false} />
        ) : null}
      </div>
    </div>
  );
};

export default QuestionCard;
