import React from 'react';
import { useState } from 'react';
import AppForm from './AppForm';
import registerJson from '../../assets/configs/register.json';
import * as controller from '../../controllers/authController.js';

const Register = ({ setShouldRenderRegister }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });  
  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    controller.registerUser(user);
    setShouldRenderRegister(false);
  };
  const handleBlur = (e) => {
    console.log(e.target.value);
  };
  const inputConfig = registerJson.map((item) => ({ ...item, handleChangeCb: handleChange, handleBlurCb: handleBlur, inputValue: user[item.name] }));
  return(
    <AppForm handleSubmitCb={handleSubmit} inputConfig={inputConfig} classname={'auth-form'} submitLabel={'create account'} />
  )
}

export default Register;
