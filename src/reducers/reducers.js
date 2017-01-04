export const testReducer = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_TEST':
      return !state;
    default:
      return state;
  }
};
