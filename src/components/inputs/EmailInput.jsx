import React, { useState } from "react";
import "./InputStyles.css";

const EmailInput = ({ inputOptions: { inputName, inputValue, inputPlaceholder, inputLabel, handleChangeCb, handleBlurCb } }) => {
  const [hasError, setHasError] = useState(false);
  
  return(
    <div className="col">
      <label className="app-label">{inputLabel}</label>
      <input 
        type='email'
        name={inputName}
        value={inputValue}
        placeholder={inputPlaceholder}
        onChange={handleChangeCb}
        onBlur={handleBlurCb}
      />
    </div>
  )
}

export default EmailInput;

