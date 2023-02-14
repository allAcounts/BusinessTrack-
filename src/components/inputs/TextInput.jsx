import React from "react";

const TextInput = ({ inputName, inputValue, inputPlaceholder, handleChangeCb }) => 
  <input 
    name={inputName}
    value={inputValue}
    placeholder={inputPlaceholder}
    onChange={handleChangeCb}
  />

export default TextInput;

