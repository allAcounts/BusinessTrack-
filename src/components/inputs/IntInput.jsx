import React from "react";

const IntInput = ({ inputValue, inputName, handleChangeCb }) => 
  <input 
    type='number'  
    name={inputName}
    value={inputValue}
    onChange={handleChangeCb}
  />

export default IntInput;

