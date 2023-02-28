export const findArrayObject = (arr, objKey, arg) => arr.find((arrObj) => arrObj[objKey] === arg);

export const addArrItem = (arr, item) => [...arr, item];
