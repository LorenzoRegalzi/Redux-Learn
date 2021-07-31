const error = param => store => next => action => {
    if (action.type === 'error')
        console.log("toast" , action.payload.message);
    else
        next(action);
}

export default error;