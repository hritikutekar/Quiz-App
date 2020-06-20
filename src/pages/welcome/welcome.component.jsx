import React, { useState } from "react";
import { ArrowForwardIosRounded } from "@material-ui/icons";

import "./welcome.styles.css";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  const [name, setName] = useState("");

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };

  return (
    <div className='welcome-page'>
      <h1>What's your name?</h1>
      <input
        onChange={handleOnChangeName}
        className='name_input'
        placeholder='Type your name here'
      />

      {name.length > 0 ? (
        <Link
          to={{
            pathname: "/topic",
            name: name,
          }}
          className='continue_button'
        >
          <ArrowForwardIosRounded style={{ fontSize: 30 }} />
        </Link>
      ) : null}
    </div>
  );
};

export default WelcomePage;
