// src/reducers/index.js
import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer.js';
import dropdownReducer from './dropdownReducer.js';
// import action types
import * as types from './actions/actions.js';



const rootReducer = combineReducers({
 cards: cardsReducer,
 dropdown: dropdownReducer
});



export default rootReducer;
