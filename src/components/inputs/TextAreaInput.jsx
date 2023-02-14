import React from "react";

const TextAreaInput = ({ inputValue, inputName, inputPlaceholder, handleChangeCb }) => 
  <textarea
    name={inputName}
    value={inputValue}
    placeholder={inputPlaceholder}
    onChange={handleChangeCb}
  />

export default TextAreaInput;
