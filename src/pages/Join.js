import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { TextField, Button, makeStyles, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'column',
    display: 'flex',
  },
}))

export default function Join({joinRoom}) {
  const [ state, setState ] = useState({name: '', room: '', password: ''})
  const User = useSelector(s => s.User)
  const { container } = useStyles();
  const history = useHistory();

  const handleJoinRoom = (e) => {
    e.preventDefault();
    try {
      joinRoom(state);
      history.push('/')
    } catch (error) {
      console.log(error)
    }
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
      <FormControl variant='outlined'>
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
          />
        }
      </FormControl>
      <Button type='submit' variant='contained' color='primary'>Join room</Button>
    </form>
  )
}
