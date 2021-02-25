import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from "redux-thunk";
import {  appReducer } from "./reducer/app.reducer";
// const combiner = combineReducers({
//     appReducer:appReducer
// });
export const store = createStore(appReducer, applyMiddleware(ReduxThunk));