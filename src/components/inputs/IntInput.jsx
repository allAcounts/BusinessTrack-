import React from "react";
import "./InputStyles.css";

const IntInput = ({ inputOptions: { inputValue, inputName, inputLabel, handleChangeCb, handleBlurCb } }) => 
  <div className="col">
    <label className="app-label">{inputLabel}</label>
    <input 
      type='number'  
      name={inputName}
      value={inputValue}
      onChange={handleChangeCb}
      onBlur={handleBlurCb}
    />
  </div>

export default IntInput;

