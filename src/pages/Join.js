import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { TextField, Button, makeStyles, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { join, subscribeTo, addCards, logIn, unsubscribeFrom } from '../redux/actions';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'column',
    display: 'flex',
  },
  button: {
    margin: 10
  },
}))

export default function Join() {
  const [ state, setState ] = useState({name: '', room: '', password: ''})
  const [ error, setError ] = useState({gotError: false, message: ''});
  const User = useSelector(s => s.User)
  const { container, button } = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(subscribeTo('roomJoined', (data) => {
      dispatch(addCards(data.cards))
      dispatch(logIn(data.name, data.room, data.users))
      history.push('/bingo')
    }))
    dispatch(subscribeTo('passwordError', (data) => {
      setError({gotError: true, message: data});
    }))
    return () => {
      dispatch(unsubscribeFrom('roomJoined'))
      dispatch(unsubscribeFrom('passwordError'))
    }
  }, [history, dispatch])

  const handleJoinRoom = (e) => {
    e.preventDefault();
    dispatch(join({name: state.name, roomname: state.room.name, password: state.password}))
  };

  if (User.activeRooms.length < 1) {
    return (
      <>
        <Typography variant='h6'>
          No active rooms. Would you rather create a room?
        </Typography>
        <Button 
          variant='contained' 
          color='primary'
          onClick={() => history.push('/create')}
        >
          Go to create
        </Button>
      </>
    )
  }

  return (
    <form id='createRoomForm' action='.' onSubmit={(e) => handleJoinRoom(e)} className={container}>
      <TextField 
        required
        id='username'
        value={state.name}
        placeholder='Username...'
        variant='outlined'
        onChange={(e) => setState({...state, name: e.target.value})}
        autoComplete='off'
      />
      <FormControl variant='outlined' required>
        <InputLabel id='select-room-label'>Room</InputLabel>  
        <Select
          labelId='select-room-label'
          id='select-room'
          value={state.room}
          onChange={(e) => setState({...state, room: e.target.value})}
        >
          {User.activeRooms.map((room, i) => <MenuItem key={i} value={room}>{room.name}</MenuItem>)}
        </Select>
        {state.room.password &&
          <TextField 
            id='password'
            type='password'
            label='Leave blank for no password'
            value={state.password}
            placeholder='Password...'
            variant='outlined'
            onChange={(e) => setState({...state, password: e.target.value})}
            autoComplete='off'
            error={error.gotError}
            helperText={error.message}
          />
        }
      </FormControl>
      <Button type='submit' variant='contained' color='primary' className={button}>Join room</Button>
    </form>
  )
}
