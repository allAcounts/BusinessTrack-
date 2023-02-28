import React from 'react';
import { useState } from 'react';
import AppForm from './AppForm';
import loginJson from '../../assets/configs/login.json';
import * as controller from '../../controllers/authController.js';

const Login = ({ setShouldRenderLogin }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    controller.loginUser(user);
    setShouldRenderLogin(false);
  };
  const inputConfig = loginJson.map((item) => ({ ...item, handleChangeCb: handleChange, inputValue: user[item.name] }));
  return(
    <AppForm handleSubmitCb={handleSubmit} inputConfig={inputConfig} classname={'auth-form'} submitLabel={'login'} />
  )
}

export default Login;
