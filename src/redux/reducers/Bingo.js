import arrayShuffle from '../../utils/arrayShuffle';
import { SET_TICKED, RESET, ADD_CARDS } from '../actions/actionTypes';

const initialState = [];

const Bingo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARDS:
      return arrayShuffle(action.cards)
    case SET_TICKED:
      return state.map((data) => data.id === action.id ? ({...data, ticked: !data.ticked}): data);
    case RESET:
      return arrayShuffle(state.map((data) => ({...data, ticked: false})));
    default:
      return state;
  }
}

export default Bingo;