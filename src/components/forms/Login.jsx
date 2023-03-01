import React, { useState, useContext } from 'react';
import AppForm from './AppForm';
import loginJson from '../../assets/configs/login.json';
import * as controller from '../../controllers/authController.js';
import AuthContext from '../../utils/contexts/AuthContext';

const Login = ({ setShouldRenderLogin }) => {
  const { loginUser } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const authUser = await controller.loginUser(user);
    loginUser(authUser.email, authUser.id);
    setShouldRenderLogin(false);
  };
  const inputConfig = loginJson.map((item) => ({ ...item, handleChangeCb: handleChange, inputValue: user[item.name] }));
  return(
    <AppForm handleSubmitCb={handleSubmit} inputConfig={inputConfig} classname={'auth-form'} submitLabel={'login'} />
  )
}

export default Login;
