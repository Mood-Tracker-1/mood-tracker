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

export const updateActivityActionCreator = (obj) => ({
  type: types.UPDATE_ACTIVITY,
  payload: obj 
});

export const submitActionCreator = () => ({
  type: types.SUBMIT
})

export const getFeedItemsActionCreator = () => ({
  type: types.GET_FEED_ITEMS
})