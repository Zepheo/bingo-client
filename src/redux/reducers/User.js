import { SET_USER, REMOVE_USER, ADD_ACTIVE_ROOMS } from "../actions/actionTypes";

const initialState = { name: '', room: '', activeRooms: []};

const User = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return ({
        ...state,
        name: action.name,
        room: action.room
      });
    case REMOVE_USER:
      return initialState;
    case ADD_ACTIVE_ROOMS:
      return ({
        ...state,
        rooms: action.rooms.map((room) => room.name)
      })
    default:
      return state;
  }
}

export default User;