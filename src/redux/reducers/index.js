import bingoData from '../../data/bingoData';
import arrayShuffle from '../../utils/arrayShuffle';
import { SET_HAPPENED, RESET } from '../actions/actionTypes';

const initialState = arrayShuffle(bingoData).slice(0,16);

const Bingo = (state = initialState, action) => {
  switch (action.type) {
    case SET_HAPPENED:
      return state.map((data) => data.id === action.id ? ({...data, happened: !data.happened}): data);
    case RESET:
      return arrayShuffle(bingoData).slice(0,16);
    default:
      return state;
  }
}

export default Bingo;