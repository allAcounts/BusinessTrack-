import * as auth from '../services/authServices.js';

export const loginUser = (user) => auth.loginUser(user);

export const registerUser = (user) => auth.registerUser(user);
