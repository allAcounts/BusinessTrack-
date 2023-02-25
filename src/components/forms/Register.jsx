import React from 'react';
import { useState } from 'react';
import AppForm from './AppForm';
import registerJson from '../../assets/configs/register.json';

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
    console.log('User submitted.', user);
    setShouldRenderRegister(false);
  };
  const inputConfig = registerJson.map((item) => ({ ...item, handleChangeCb: handleChange, inputValue: user[item.name] }));
  return(
    <AppForm handleSubmitCb={handleSubmit} inputConfig={inputConfig} />
  )
}

export default Register;
