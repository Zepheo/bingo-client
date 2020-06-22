import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { TextField, Button, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'column',
    display: 'flex',
  },
}))

export default function Join({joinRoom}) {
  const [ state, setState ] = useState({name: '', room: '', password: '', zones: []})
  const User = useSelector(s => s.User)
  const { container } = useStyles();
  const history = useHistory();
  console.log(User)

  const handleCreateRoom = (e) => {
    e.preventDefault();
    try {
      joinRoom(state);
      // history.push('/')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form id='createRoomForm' action='.' onSubmit={(e) => handleCreateRoom(e)} className={container}>
      <TextField 
        required
        id='username'
        value={state.name}
        placeholder='Username...'
        variant='outlined'
        onChange={(e) => setState({...state, name: e.target.value})}
        autoComplete='off'
      />
      
      <Button type='submit' variant='contained' color='primary'>Join room</Button>
    </form>
  )
}
