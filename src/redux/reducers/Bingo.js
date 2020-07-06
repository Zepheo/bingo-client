import arrayShuffle from '../../utils/arrayShuffle';
import { SET_TICKED, RESET, ADD_CARDS, ADD_PRESET_CARDS, REMOVE_PRESET_CARD } from '../actions/actionTypes';

const freeCard = {
  data: 'Free',
  ticked: true,
  free: true,
};

const initialState = {
  cards: [],
  cardOrder: []
};

const Bingo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARDS:
      const cards = arrayShuffle(action.cards);
      cards.splice(12, 0, freeCard);
      return {
        cards, 
        cardOrder: cards.map(c => c.id)
      }
    case SET_TICKED:
      return {
        ...state,
        cards: state.cards.map((data) => data.id === action.id ? ({...data, ticked: !data.ticked}): data)
      };
    case ADD_PRESET_CARDS:
      return {
        ...state,
        cards: action.cards,
      };
    case REMOVE_PRESET_CARD:
      return {
        ...state,
        cards: state.cards.filter(v => v.id !== action.id)
      }
    case RESET:
      state.cards.splice(12, 1);
      const cardsReset = arrayShuffle(state.cards).map((data) => ({...data, ticked: false}))
      cardsReset.splice(12, 0, freeCard);
      return {
        cards: cardsReset,
        cardOrder: cardsReset.map(c => c.id)
      }
    default:
      return state;
  }
}

export default Bingo;