import usersJson from "../assets/configs/sampleUsers.json";
import * as funcs from '../utils/functions/arrays.js';

export const loginUser = (user) => {
  const appUser = funcs.findArrayObject(usersJson, "id", user.email);
  console.log(appUser)
  if (appUser) {
    console.log(appUser)
    return appUser;
  } else {
    // error message
  }
};

export const registerUser = (user) => {
  const appUser = funcs.findArrayObject(usersJson, "id", user.email);
  if (appUser) {
    // error message
  } else {
    // success message
  }
}
