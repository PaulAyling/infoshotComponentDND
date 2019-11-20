// THIS IS PLACEHOLDER FILE - APP NOT CURRENTLY USING CONTEXTS
// import {
//   PLACEHOLDER_HOLDER
// } from '../types';

export default (state, action) => {
  switch (action.type) {

    case PLACEHOLDER_HOLDER:
      return {
        ...state,
        cards: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
