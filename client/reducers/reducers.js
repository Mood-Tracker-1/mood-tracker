// src/reducers/index.js
//import { combineReducers } from 'redux';
//import cardsReducer from './cardsReducer.js';
// import action types
import * as types from '../actions/actions.js';

const initialState = {
    //user: null,
    totalCards: 0,
    cardsList: [],
    lastCardId: 1,
    newSleep: null,
    newExercise: null,
    newFood: null,
    newSocial: null,
    newProductivity: null
}

const cardsReducer = (state = initialState, action) => {
    let cardsList;
    
    switch (action.type) {
      case 'ADD_CARD': {
          //increment ....
          const newTotalCards = state.totalCards + 1;
          const newCardId = state.lastCardId + 1;
          // create new card
          const newCard = {
            ...state,
            totalCards: newTotalCards,
            cardId: newCardId,
            newSleep: action.payload,
            newExercise: action.payload,
            newFood: action.payload,
            newSocial: action.payload,
            newProductivity: action.payload
        };

        cardsList = state.cardsList.slice();
        cardsList.push(newCard);

        return {
            ...state,
            cardsList,
            lastCardId,
            totalCards
        };
    // user reducer - use later with auth stuff
    // switch (action.type) {
    //   case types.USER_LOGIN:
    //      return {
    //          ...state,
    //          user: action.payload,
    //         };
    //       default:
    //         return state;
    //     }

      }
      
      case 'DELETE_CARD': {
        const newTotalCards = state.totalCards--;

        return {
            ...state,
            newTotalCards
        };
      }

      case 'UPDATE_SLEEP': {
        return {
            ...state,
            newSleep: action.payload
        }
      };
      case 'UPDATE_EXERCISE': {
        return {
            ...state,
            newExercise: actions.payload
        }
      };
      case 'UPDATE_SOCIAL': {
        return {
            ...state,
            newSocial: actions.payload
        }
      };
      case 'UPDATE_FOOD': {
        return {
            ...state,
            newExercise: actions.payload
        }
      };

      case 'UPDATE_PRODUCTIVITY': {
        return {
            ...state,
            newProductivity: action.payload
        }
      };


      default: {
        return state;
      }
    };
  };


// const rootReducer = combineReducers({
//  cards: cardsReducer,
//  dropdown: dropdownReducer
// });


export default cardsReducer;
