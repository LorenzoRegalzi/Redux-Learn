const logger = param => store => next => action => {
    console.log("logger" , param);
    next(action);
}

export default logger;