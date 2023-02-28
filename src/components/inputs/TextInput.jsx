import React from "react";
import "./InputStyles.css";

const TextInput = ({ inputOptions: { inputName, inputValue, inputPlaceholder, inputLabel, handleChangeCb, handleBlurCb } }) => 
  <div className="col">
    <label className="app-label">{inputLabel}</label>
    <input 
      name={inputName}
      value={inputValue}
      placeholder={inputPlaceholder}
      onChange={handleChangeCb}
      onBlur={handleBlurCb}
    />
  </div>

export default TextInput;

