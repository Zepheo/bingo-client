const { ADD_MESSAGE, RESET_MESSAGES } = require("../actions/actionTypes");

const initialState = [];

const Log = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.message];
    case RESET_MESSAGES:
      return initialState;
    default:
      return state;
  }
}

export default Log;