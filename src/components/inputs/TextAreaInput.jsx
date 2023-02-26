import React from "react";
import "./InputStyles.css";

const TextAreaInput = ({ inputOptions: { inputValue, inputName, inputPlaceholder, inputLabel, handleChangeCb } }) => 
  <div className="col">
    <label className="app-label">{inputLabel}</label>
    <textarea
      name={inputName}
      value={inputValue}
      placeholder={inputPlaceholder}
      onChange={handleChangeCb}
    />
  </div>

export default TextAreaInput;
