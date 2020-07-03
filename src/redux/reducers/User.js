import { LOG_IN, LOG_OUT, ADD_ACTIVE_ROOMS, BINGO, SHOW_BOARD, RESET_BINGO, ADD_USERS, UPDATE_TICKED, ADD_CARD_ORDER } from "../actions/actionTypes";

const initialState = { name: null, room: null, activeRooms: [], hasHadBingo: false, showBingo: false};

const User = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return ({
        ...state,
        name: action.name,
        room: {
          name: action.room,
          users: action.users
        }
      });
    case ADD_ACTIVE_ROOMS:
      return ({
        ...state,
        activeRooms: action.rooms
      });
    case ADD_USERS:
      return ({
        ...state,
        room: {
          ...state.room,
          users: [...state.room.users, action.user]
        }
      });
    case UPDATE_TICKED:
      return ({
        ...state,
        room: {
          ...state.room,
          users: state.room.users.map((user) => user.id === action.id ? ({...user, ticked: action.ticked}) : user)
        }
      })
    case ADD_CARD_ORDER:
      return ({
        ...state,
        room: {
          ...state.room,
          users: state.room.users.map((user) => user.id === action.id ? ({...user, ticked: action.ticked}) : user)
        }
      })
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
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
}

export default User;