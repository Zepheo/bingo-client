import { SET_TICKED, RESET, LOG_IN, LOG_OUT, ADD_CARDS, ADD_ACTIVE_ROOMS, BINGO, SHOW_BOARD, RESET_BINGO, ADD_USERS, UPDATE_TICKED, ADD_MESSAGE, RESET_MESSAGES, ADD_PRESET_CARDS, REMOVE_PRESET_CARD, ADD_CARD_ORDER } from './actionTypes';
import { CREATE, JOIN, USERTICK, RESET_TICKED, CREATE_CUSTOM, CUSTOM_CARDS, CARD_ORDER } from './actionEvents';

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
export const addPresetCards = (cards) => ({
  type: ADD_PRESET_CARDS,
  cards
})
export const removePresetCard = (id) => ({
  type: REMOVE_PRESET_CARD,
  id
})

//User

export const logIn = (name, room, users) => ({
  type: LOG_IN,
  name,
  room,
  users,
})

export const logOut = () => ({
  type: LOG_OUT,
})

export const addActiveRooms = (rooms) => ({
  type: ADD_ACTIVE_ROOMS,
  rooms
})

export const bingo = () => ({
  type: BINGO
})

export const showBoard = () => ({
  type: SHOW_BOARD
})

export const resetBingo = () => ({
  type: RESET_BINGO
})

export const addUsers = (user) => ({
  type: ADD_USERS,
  user
})

export const updateTicked = ({id, ticked}) => ({
  type: UPDATE_TICKED,
  id,
  ticked
})

export const addCardOrder = ({id, ticked}) => ({
  type: ADD_CARD_ORDER,
  id,
  ticked
})

// Log
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message
})

export const resetMessages = () => ({
  type: RESET_MESSAGES,
})

// Socket actions

export const create = (data) => ({
  event: CREATE,
  emit: true,
  payload: data
})

export const createCustom = (data) => ({
  event: CREATE_CUSTOM,
  emit: true,
  payload: data
});

export const sendCustomCards = (data) => ({
  event: CUSTOM_CARDS,
  emit: true,
  payload: data
});

export const sendCardOrder = (data) => ({
  event: CARD_ORDER,
  emit: true,
  payload: data
})

export const join = (data) => ({
  event: JOIN,
  emit: true,
  payload: data
})

export const userTick = (data) => ({
  event: USERTICK,
  emit: true,
  payload: data
})

export const resetTicked = (room) => ({
  event: RESET_TICKED,
  emit: true,
  payload: room
})

export const subscribeTo = (event, handle) => ({
  event,
  handle
})

export const unsubscribeFrom = (event) => ({
  event,
  leave: true
})
