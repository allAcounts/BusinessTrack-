import React from "react";

const EmailInput = ({ inputOptions: { inputName, inputValue, inputPlaceholder, handleChangeCb } }) => 
  <input 
    type='email'
    name={inputName}
    value={inputValue}
    placeholder={inputPlaceholder}
    onChange={handleChangeCb}
  />

export default EmailInput;

