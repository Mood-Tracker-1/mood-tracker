import * as types from '../actions/actions.js';

const initialState = {
    //user: null,
    totalCards: 0,
    cardsList: [],
    lastCardId: 1,
    newMood: 'okay',
    newSleep: 'okay',
    newExercise: 'okay',
    newFood: 'okay',
    newSocial: 'okay',
    newProductivity: 'okay'
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
        };

        cardsList = state.cardsList.slice();
        cardsList.push(newCard);

        return {
            ...state,
            cardsList,
            lastCardId,
            totalCards
        };
      }

      case 'UPDATE_ACTIVITY': {
        return {
          ...state,
          ...action.payload
        }
      }
      
      // case 'SUBMIT': {
      //   // what information do we need? We need properties from state that start with the word new
      //     // create an empty object named 'changed' to store our keys and values
      //     const changed = {};
      //     // iterate through the state
      //     for (let i = 0; i < state.length; i++) {
      //       // if the property at [i] starts with the string 'new'
      //       if (state[i].slice(0,3) === 'new') {
      //       // changed[propertyName] = state[propertyName]
      //         changed[state[i]] = state[state[i]];
      //         console.log(changed);
      //       }
      //     }

        
      //   // communicate with the server
      //   const serializedData = JSON.stringify(changed);

      //   const connection = mysql.createConnection({
      //     host: 'your_database_host',
      //     user: 'your_database_user',
      //     password: 'your_database_password',
      //     database: 'your_database_name'
      //   });
      //     // sending the 'changed' object
      //       // if the communication is a success
      //         // update our feed
      //         // iterate 'changed' object changing each value to 'okay
      //       // if the communication is a failure
      //         // return our current state

      //   return {
      //     ...state
      //     // spread 'changed'
      //   }
      // }
      
      case 'DELETE_CARD': {
        const newTotalCards = state.totalCards - 1;
      
        return {
            ...state,
            newTotalCards
        };
      }
        
      case 'GET_FEED_ITEMS': {
        
        return {
          ...state
        }
      }

      default: {
        return state;
      }
    };
  };

export default cardsReducer;
