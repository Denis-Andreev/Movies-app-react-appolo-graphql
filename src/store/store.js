import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {directorsReducer} from "./directors-reducer";
import {moviesReducer} from "./movies-reducer";

const reducers = combineReducers({
    moviesState: moviesReducer,
    directorsState: directorsReducer,
})


let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;