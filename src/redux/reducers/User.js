import { LOG_IN, LOG_OUT, ADD_ACTIVE_ROOMS, BINGO, SHOW_BOARD, RESET_BINGO } from "../actions/actionTypes";

const initialState = { name: null, room: null, activeRooms: [], hasHadBingo: false, showBingo: false};

const User = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return ({
        ...state,
        name: action.name,
        room: action.room,
      });
    case BINGO:
      return ({
        ...state,
        hasHadBingo: true,
        showBingo: true
      })
    case SHOW_BOARD:
      return ({
        ...state,
        showBingo: false
      })
    case RESET_BINGO:
      return ({
        ...state,
        showBingo: false,
        hasHadBingo: false
      })
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