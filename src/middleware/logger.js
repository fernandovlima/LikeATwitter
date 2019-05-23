const logger = store => next => action => {
  console.group(action.type);
  console.log("Action é ", action);
  const returnValue = next(action);
  console.log("State é ", store.getState());
  return returnValue;
  console.groupEnd();
};

export default logger;
