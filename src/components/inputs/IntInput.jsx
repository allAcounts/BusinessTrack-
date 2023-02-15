import React from "react";

const IntInput = ({ inputOptions: { inputValue, inputName, handleChangeCb } }) => 
  <input 
    type='number'  
    name={inputName}
    value={inputValue}
    onChange={handleChangeCb}
  />

export default IntInput;

