import React from "react";
import "./InputStyles.css";

const PasswordInput = ({ inputOptions: { inputName, inputValue, inputPlaceholder, inputLabel, handleChangeCb, handleBlurCb } }) => 
  <div className="col">
    <label className="app-label">{inputLabel}</label>
    <input 
      type='password'
      name={inputName}
      value={inputValue}
      placeholder={inputPlaceholder}
      onChange={handleChangeCb}
      onBlur={handleBlurCb}
    />
  </div>

export default PasswordInput;

