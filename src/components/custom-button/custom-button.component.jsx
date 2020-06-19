import React from "react";

import "./custom-button.styles.css";

const CustomButton = ({ title, onClick, hide }) => {
  return (
    <div
      onClick={onClick}
      className='custom_button'
      style={hide ? { visibility: "hidden" } : {}}
    >
      <div className='button_text'>{title}</div>
    </div>
  );
};

export default CustomButton;
