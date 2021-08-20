import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from './reducer';
import logger from './middleware/logger'
import error from './middleware/errorToast'
import api from "./middleware/api";



export default function() {
    return configureStore({ 
        reducer,
        middleware: [
            api,
            ...getDefaultMiddleware(),
            logger({destination: "console"}),
            //error,
        ]
    });
};




