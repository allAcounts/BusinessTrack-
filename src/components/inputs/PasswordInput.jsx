import React from "react";

const PasswordInput = ({ inputOptions: { inputName, inputValue, inputPlaceholder, handleChangeCb } }) => 
  <input 
    type='password'
    name={inputName}
    value={inputValue}
    placeholder={inputPlaceholder}
    onChange={handleChangeCb}
  />

export default PasswordInput;

