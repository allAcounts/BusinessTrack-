import React from "react";
import "./InputStyles.css";

const EmailInput = ({ inputOptions: { inputName, inputValue, inputPlaceholder, inputLabel, handleChangeCb } }) => 
  <div className="col">
    <label className="app-label">{inputLabel}</label>
    <input 
      type='email'
      name={inputName}
      value={inputValue}
      placeholder={inputPlaceholder}
      onChange={handleChangeCb}
    />
  </div>

export default EmailInput;

