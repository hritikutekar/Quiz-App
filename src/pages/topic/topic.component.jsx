import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { topics } from "../../data/dummy-data";

import "./topic.styles.css";
import { ArrowForwardIosRounded } from "@material-ui/icons";

const TopicPage = ({ location }) => {
  const history = useHistory();
  if (location.name === undefined) {
    history.push("/");
  }

  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelectedTopic = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className='topic-page'>
      <h1 style={{ marginBottom: 0, color: "#fff" }}>
        Hello, {location.name}!
      </h1>
      <h2 style={{ marginBottom: "32px", color: "#fff" }}>Choose a topic</h2>
      <div className='topic_container'>
        {topics.map((topic) => (
          <div
            onClick={() => handleSelectedTopic(topic)}
            className={
              selectedTopic !== undefined && selectedTopic.name === topic.name
                ? "topic_card topic_card__active"
                : "topic_card"
            }
          >
            <img src={topic.icon} className='topic_card__icon' />
            <h3 className='topic_card__name'>{topic.name}</h3>
          </div>
        ))}
      </div>

      {selectedTopic ? (
        <Link
          to={{
            pathname: "/questions",
            name: location.name,
            topic: selectedTopic,
          }}
          className='continue_button'
        >
          <ArrowForwardIosRounded style={{ fontSize: 30 }} />
        </Link>
      ) : null}
    </div>
  );
};

export default TopicPage;
