import React from "react";

const TextAreaInput = ({ inputOptions: { inputValue, inputName, inputPlaceholder, handleChangeCb } }) => 
  <textarea
    name={inputName}
    value={inputValue}
    placeholder={inputPlaceholder}
    onChange={handleChangeCb}
  />

export default TextAreaInput;
