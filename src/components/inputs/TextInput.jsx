import React from "react";

const TextInput = ({ inputOptions: { inputName, inputValue, inputPlaceholder, handleChangeCb } }) => 
  <input 
    name={inputName}
    value={inputValue}
    placeholder={inputPlaceholder}
    onChange={handleChangeCb}
  />

export default TextInput;

