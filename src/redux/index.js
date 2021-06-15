import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import image from "./image";
import bigImage from "./bigImage";


const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootReducer = combineReducers({
    image,
    bigImage
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store;