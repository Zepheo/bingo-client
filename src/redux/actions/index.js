import { SET_HAPPENED, RESET } from './actionTypes';

export const setHappened = (id) => ({
  type: SET_HAPPENED,
  id
})
export const reset = () => ({
  type: RESET
})