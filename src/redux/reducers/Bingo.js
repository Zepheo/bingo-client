import arrayShuffle from '../../utils/arrayShuffle';
import { SET_TICKED, RESET, ADD_CARDS, ADD_PRESET_CARDS, REMOVE_PRESET_CARD } from '../actions/actionTypes';

const freeCard = {
  data: 'Free',
  ticked: true,
  free: true,
};

const initialState = [];

const Bingo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARDS:
      const cards = arrayShuffle(action.cards);
      cards.splice(12, 0, freeCard);
      return cards
    case SET_TICKED:
      return state.map((data) => data.id === action.id ? ({...data, ticked: !data.ticked}): data);
    case ADD_PRESET_CARDS:
      return action.cards;
    case REMOVE_PRESET_CARD:
      return state.filter(v => v.id !== action.id)
    case RESET:
      state.splice(12, 1);
      const cardsReset = arrayShuffle(state).map((data) => ({...data, ticked: false}))
      cardsReset.splice(12, 0, freeCard);
      return cardsReset;
    default:
      return state;
  }
}

export default Bingo;