import { SET_TICKED, RESET, SET_USER, REMOVE_USER, ADD_CARDS, ADD_ACTIVE_ROOMS } from './actionTypes';

//Bingo
export const addCards = (cards) => ({
  type: ADD_CARDS,
  cards
})
export const setTicked = (id) => ({
  type: SET_TICKED,
  id
})
export const reset = () => ({
  type: RESET
})

//User

export const setUser = (name, room) => ({
  type: SET_USER,
  name,
  room
})

export const removeUser = () => ({
  type: REMOVE_USER,
})

export const addActiveRooms = (rooms) => ({
  type: ADD_ACTIVE_ROOMS,
  rooms
})