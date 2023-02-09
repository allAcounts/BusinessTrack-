import React from 'react';
import "./Button.css";

const Button = ({ btnClass, btnLabel, btnCallback }) =>
  <button onClick={btnCallback} className={btnClass}>{btnLabel}</button>

export default Button;
