import * as act from '../actions/actionslist';

export const testReducer = (state = true, action) => {
  switch (action.type) {
    case act.TOGGLE_TEST:
      return !state;
    default:
      return state;
  }
};
