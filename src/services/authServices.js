import usersJson from "../assets/configs/sampleUsers.json";
import * as funcs from '../utils/functions/arrays.js';

export const loginUser = (user) => {
  const appUser = funcs.findArrayObject(usersJson, "email", user.email);
  if (appUser && appUser.password === user.password) {
    return appUser;
  } else {
    return false;
  }
};

export const registerUser = (user) => {
  const appUser = funcs.findArrayObject(usersJson, "email", user.email);
  if (appUser) {
    return false;
  } else {
    // success message
  }
}
