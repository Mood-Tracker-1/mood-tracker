//import action types components
import * as types from '../constants/action-types';

export const addCardCreator = () => ({
  type: types.ADD_CARD
});

export const deleteCardActionCreator = () => ({
  type: types.DELETE_CARD
});

// export const userLogin = (userId, username) => ({
//   type: types.USER_LOGIN,
//   payload: {
//     userId: userId,
//     username: username
//   },
// });

export const updateSleep = (sleep) => ({
  type: types.UPDATE_SLEEP,
  payload: sleep
});

export const updateExercise = (exercise) => ({
  type: types.UPDATE_EXERCISE,
  payload: exercise
});

export const updateFood = (food) => ({
    type: types.UPDATE_FOOD,
    payload: food
});

export const updateSocial = (social) => ({
  type: types.UPDATE_SOCIAL,
  payload: social
});

export const updateProductivity = (productivity) => ({
    type: types.UPDATE_PRODUCTIVITY,
    payload: productivity
  });