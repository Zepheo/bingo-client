import { SET_TICKED, RESET, LOG_IN, LOG_OUT, ADD_CARDS, ADD_ACTIVE_ROOMS } from './actionTypes';
import { CREATE, JOIN } from './actionEvents';

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

export const logIn = (name, room) => ({
  type: LOG_IN,
  name,
  room,
})

export const logOut = () => ({
  type: LOG_OUT,
})

export const addActiveRooms = (rooms) => ({
  type: ADD_ACTIVE_ROOMS,
  rooms
})


// Socket actions

export const create = (data) => ({
  event: CREATE,
  emit: true,
  payload: data
})

export const join = (data) => ({
  event: JOIN,
  emit: true,
  payload: data
})

export const subscribeTo = (event, handle) => ({
  event,
  handle
})

export const unsubscribeFrom = (event) => ({
  event,
  leave: true
})
