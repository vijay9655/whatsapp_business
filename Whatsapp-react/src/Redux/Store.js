import {applyMiddleware,createStore} from 'redux';
import RootReducer from "./Root-reducer";
import reduxthunk from "redux-thunk";
const middleware=[reduxthunk]

const store=createStore(RootReducer,applyMiddleware(...middleware));
export default store;
