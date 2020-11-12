import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import {logger} from "redux-logger";

export let store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger, thunk)
));