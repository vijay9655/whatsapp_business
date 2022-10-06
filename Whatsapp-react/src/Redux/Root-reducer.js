import {combineReducers} from 'redux';
import {Reducer} from "./Reducer";


const RootReducer=combineReducers({data:Reducer});



export default RootReducer;
