import React from 'react'
import { useHistory } from 'react-router-dom'

import CreateBingoBoard from '../components/CreateBingoBoard';
import { useDispatch } from 'react-redux';
import { sendCustomCards, subscribeTo, addCards, logIn, unsubscribeFrom } from '../redux/actions';
import { useEffect } from 'react';

export default function CreateBingo() {
  const history = useHistory();
  const { location: { state: { name, room }}} = history;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(subscribeTo('customRoomCreated', (data) => {
      dispatch(addCards(data.cards))
      dispatch(logIn(name, data.room, data.users))
      history.push('/bingo')
    }));
    dispatch(subscribeTo('customRoomCreationError', (error) => {
      console.log(error)
      history.push('/create')
    }));

    return () => {
      dispatch(unsubscribeFrom('customRoomCreated'))
      dispatch(unsubscribeFrom('customRoomCreationError'))
    }
  })

  const handleCreateCards = (cards) => {
    dispatch(sendCustomCards({cards, room}))
  }

  return (
    <CreateBingoBoard submitCards={handleCreateCards}/>
  )
}
