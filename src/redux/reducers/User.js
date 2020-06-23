import { LOG_IN, LOG_OUT, ADD_ACTIVE_ROOMS } from "../actions/actionTypes";

const initialState = { name: null, room: null, activeRooms: []};

const User = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return ({
        ...state,
        name: action.name,
        room: action.room,
      });
    case ADD_ACTIVE_ROOMS:
      return ({
        ...state,
        activeRooms: action.rooms
      })
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
}

export default User;